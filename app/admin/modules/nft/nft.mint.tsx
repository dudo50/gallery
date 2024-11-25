'use client'

import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, ToggleButton, ButtonGroup } from 'react-bootstrap';
import { AdminIcon } from '../../components/components';
import { AdminFormInput } from '../../components/form';
import { useState } from 'react';
import { AdminType } from '../../types';
import { AdminGetData, AdminPutData } from '../../functions/get.data';
import { useAccount } from './nft.connect';
import { ApiPromise, WsProvider } from "@polkadot/api";

interface MintProps {
   admin: AdminType;
   data: any;
   wallet: any;
   collection: any;
}

export const Mint: React.FC<MintProps> = ({ admin, data, collection }) => {
   const { account, injector, accountAddr } = useAccount();
   const [show, setShow] = useState(false);
   const [mintMode, setMintMode] = useState('trial'); // 'trial' or 'regular'
   const [wallets, setWallets] = useState([]);
   const [loading, setLoading] = useState(false);
   const [options, setOptions] = useState([]);

   const handleClose = () => setShow(false);
   const handleShow = async () => {
      const fetchedWallets = await AdminGetData("admin/wallet");
      const fetchedCollections = await AdminGetData("admin/collection");
      const mappedWallets = fetchedWallets.map((data: any) => ({
         id: data.id,
         name: `address: ${data.walletAddress}`,
      }));
      setWallets(mappedWallets);

      // Select only collections that belong to the selected wallet - accountAddr  
      //Find accountAddr in fetchedWallets and get its id
      let option = [];
      if (account) {
         let walletId = null;
         for (let i = 0; i < fetchedWallets.length; i++) {
         if (fetchedWallets[i].walletAddress === account) {
             walletId = fetchedWallets[i];
         }
         }
         if (walletId) {
         option = fetchedCollections
         .filter((data: any) => data.walletId === walletId.id)
         .map((data: any) => ({
            id: data.colData.id,
            name: `collection: ${data.colData.name}`
         }));
         }
      }
      setOptions(option);
      setShow(true);
   };

   return (
      <>
         <Button variant="secondary" className='mt-2' onClick={handleShow}>
            <FontAwesomeIcon icon={faLink} className="me-2" />
            Mint NFT
         </Button>

         <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>
                  <AdminIcon name="nft" className='me-2' size={36} />
                  Mint NFT from {data.name} artwork
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <ButtonGroup className="mb-4 w-100">
                  <ToggleButton
                     id="toggle-trial"
                     type="radio"
                     variant={mintMode === 'trial' ? 'primary' : 'outline-primary'}
                     name="mintMode"
                     value="trial"
                     checked={mintMode === 'trial'}
                     onChange={(e) => setMintMode(e.currentTarget.value)}
                  >
                     Trial Mint
                  </ToggleButton>
                  <ToggleButton
                     id="toggle-regular"
                     type="radio"
                     variant={mintMode === 'regular' ? 'primary' : 'outline-primary'}
                     name="mintMode"
                     value="regular"
                     checked={mintMode === 'regular'}
                     onChange={(e) => setMintMode(e.currentTarget.value)}
                  >
                     Regular Mint
                  </ToggleButton>
               </ButtonGroup>

                  {mintMode === 'regular' && (
                    <>
                      {account && collection && (
                        <AdminFormInput
                           type="parent"
                           icon="collection"
                           label="Collection to mint into:"
                           name="collection"
                           value=""
                           option={options}
                           required
                        />
                      )}
                      <p>
                        <strong>Connected Account:</strong> {account || "No account connected"}
                      </p>
                      {!account && (
                        <small className="text-muted d-block">
                           <i className="fas fa-info-circle me-1"></i>
                           Please connect your wallet in connect Kusama wallet button first to mint NFTs.
                        </small>
                      )}
                    </>
                  )}

               {mintMode === 'trial' && (
                  <div className="alert alert-info">
                     You are about to mint this NFT for free through Eva Gallery. 
                     You can mint 1 artwork like this for free.
                  </div>
               )}
            </Modal.Body>
            <Modal.Footer>
               {mintMode === 'trial' ? (
                  <Button variant="primary" onClick={async () => {
                     try {
                        setLoading(true);
                        const artworkId = data.id;                        
                        const response = await AdminPutData(`mint/trial/artwork/${artworkId}`, { })
                        setLoading(false);
                        if (response.status === 'mintedAlready') {
                           alert('NFT has already been minted, only one allowed per account.');
                        }
                        else if (response.status === 'minted') {
                           alert('NFT was minted successfully. It should appear in the trial mint section soon.');
                           window.location.reload();
                        } else {
                           throw new Error('Minting failed');
                        }
                     } catch (error) {
                        setLoading(false);
                        console.error('Minting failed:', error);
                        alert('Minting failed. Please try again.');
                     }
                  }}>
                     {loading ? (
                        <>
                           <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                           Minting...
                        </>
                     ) : (
                        'Trial Mint'
                     )}
                  </Button>
               ) : (
                  account ? (
                     <Button
                        variant="primary"
                        onClick={async () => {
                           try {
                              setLoading(true);
                              const collectionElement = document.querySelector('[name="collection"]') as HTMLSelectElement;
                              if (!collectionElement) throw new Error('Collection element not found');

                              const artworkId = data.id;

                              const tx = await AdminPutData(`nft/create/collection/${collectionElement.value}/artwork/${artworkId}`, { address: account });
                              // Sign and submit transaction and listen for events
                              const wsProvider = new WsProvider("wss://kusama-asset-hub-rpc.polkadot.io");
                              const api = await ApiPromise.create({ provider: wsProvider });
                              const callData = tx.callData;
                              const nftTX = api.tx(callData);
                              const nftTXargs = nftTX.args[0].toHuman();
                              const nftID = nftTXargs[1].args.item;
                              const colID = nftTXargs[1].args.collection;
                              const nftData = nftTXargs[1].args.data;

                              let call = api.tx(callData);
                              await call.signAndSend(accountAddr, { signer: injector.signer }, async ({ status, txHash, dispatchError }) => {
                                 if (status.isFinalized) {
                                    setLoading(false);
                                    if (dispatchError) {
                                       if (dispatchError.isModule) {
                                          const decoded = api.registry.findMetaError(dispatchError.asModule);
                                          const { docs, name, section } = decoded;
                                          console.error(`${section}.${name}: ${docs.join(" ")}`);
                                          alert(`${section}.${name}: ${docs.join(" ")}`);
                                       } else {
                                          console.error(dispatchError.toString());
                                          alert(dispatchError.toString());
                                       }
                                    } else {
                                       console.log(txHash);
                                       await AdminPutData(`nft/create/id/${colID+ "-" + nftID}/wallet/${account}/artwork/${artworkId}`, { ipfsLink: nftData });
                                       alert('NFT was minted successfully. It should appear in online checks in a few minutes.');
                                       //Refresh page to load new NFT
                                       window.location.reload();
                                    }
                                    handleClose();
                                 }
                              });
                           } catch (error) {
                              setLoading(false);
                              alert(`Minting failed: ${error}`);
                           }
                        }}
                     >
                        {loading ? (
                           <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Minting...
                           </>
                        ) : (
                           'Sign & Submit Transaction'
                        )}
                     </Button>
                  ) : null
               )}
            </Modal.Footer>
         </Modal>
      </>
   );
};
