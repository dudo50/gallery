import { NftId, WalletId, ArtworkId } from '@modules/app-db/entities';

export interface NftDetailDto {
  id: NftId;
  walletId: WalletId;
  nftData: {
    id: string;
    name: string;
    metadata: string;
    image: string;
  }
  artwork: {
    id: ArtworkId;
    name: string;
    description: string;
    artistId: string;
    year: string;
    ai: boolean;
    tags: string;
    artworkGenreId: string;
    artworkWorktypeId: string;
    artworkMaterialId: string;
    artworkTechniqueId: string;
    measurements: string;
    width: number;
    height: number;
    public: boolean;
  }
}
