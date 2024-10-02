import { UserDto } from './user.dto';
import { ArtworkDto } from './artwork.dto';
import { ArtistDto } from './artist.dto';
import { GalleryDto } from './gallery.dto';
import { ExhibitionDto } from './exhibition.dto';
import { ArtistDetailDto } from './artist-detail.dto';
import { ArtworkDetailDto } from './artwork-detail.dto';
import { GalleryDetailDto } from './gallery-detail.dto';
import { ExhibitionDetailDto } from './exhibition-detail.dto';
import { ArtworkExhibitionDto } from './artwork-exhibition.dto';
import { GalleryExhibitionDto } from './gallery-exhibition.dto';
import { ExhibitionArtworkDto } from './exhibition-artwork.dto';
import { ExhibitionRoomDto } from './exhibition-room.dto';
import { ArtistArtworkDto } from './artist-artwork.dto';
import { RoomDto } from './room.dto';
import { DesignerRoomDto } from './designer-room.dto';
import { DesignerArtworkDto } from './designer-artwork.dto';
import { DesignerLibraryItemDto } from './designer-library-item.dto';
import { NftDto } from './nft.dto';
import { NftDetailDto } from './nft-detail.dto';
import { CountryDto } from './country.dto';
import { createOptionDto } from '@common/helpers';
import {
  User, Artist, Artwork, Gallery, Exhibition, Country, UnityRoom, UnityItemType, Nft,
} from '@modules/app-db/entities';

export function createCountryDto(country: Country): CountryDto {
  return {
    id: country.id,
    name: country.name,
    code: country.code,
  };
}

export function createUserDto(user: User): UserDto {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    description: user.description,
  };
}

export function createArtistDto(artist: Artist): ArtistDto {
  return {
    id: artist.id,
    name: artist.name,
    born: artist.born,
    biography: artist.biography,
    country: createCountryDto(artist.country),
    artistCategory: createOptionDto(artist.artistCategory),
    public: artist.public,
  };
}

export function createArtworkDto(artwork: Artwork): ArtworkDto {
  return {
    id: artwork.id,
    name: artwork.name,
    description: artwork.description,
    artist: {
      id: artwork.artist.id,
      name: artwork.artist.name,
      born: artwork.artist.born,
      biography: artwork.artist.biography,
    },
    year: artwork.year,
    nftId: artwork.nftId,
    ai: artwork.ai,
    tags: artwork.tags,
    artworkGenre: createOptionDto(artwork.artworkGenre),
    artworkWorktype: createOptionDto(artwork.artworkWorktype),
    artworkMaterial: createOptionDto(artwork.artworkMaterial),
    artworkTechnique: createOptionDto(artwork.artworkTechnique),
    measurements: artwork.measurements,
    width: artwork.width,
    height: artwork.height,
    public: artwork.public,
  };
}

export function createGalleryDto(gallery: Gallery): GalleryDto {
  return {
    id: gallery.id,
    name: gallery.name,
    description: gallery.description,
    address: gallery.address,
    country: createCountryDto(gallery.country),
    gps: gallery.gps,
    public: gallery.public,
  };
}

export function createExhibitionDto(exhibition: Exhibition): ExhibitionDto {
  return {
    id: exhibition.id,
    name: exhibition.name,
    fromDate: exhibition.fromDate.toISOString(),
    toDate: exhibition.toDate.toISOString(),
    curator: exhibition.curator,
    gallery: {
      id: exhibition.gallery.id,
      name: exhibition.gallery.name,
      description: exhibition.gallery.description,
      address: exhibition.gallery.address,
      gps: exhibition.gallery.gps,
    },
    public: exhibition.public,
  };
}

export function createArtistDetailDto(artist: Artist): ArtistDetailDto {
  return {
    id: artist.id,
    name: artist.name,
    born: artist.born,
    biography: artist.biography,
    country: createCountryDto(artist.country),
    artistCategory: createOptionDto(artist.artistCategory),
    public: artist.public,
  };
}

export function createArtworkDetailDto(artwork: Artwork): ArtworkDetailDto {
  return {
    id: artwork.id,
    name: artwork.name,
    description: artwork.description,
    artist: {
      id: artwork.artist.id,
      name: artwork.artist.name,
      born: artwork.artist.born,
      biography: artwork.artist.biography,
    },
    year: artwork.year,
    nftId: artwork.nftId,
    ai: artwork.ai,
    tags: artwork.tags,
    artworkGenre: createOptionDto(artwork.artworkGenre),
    artworkWorktype: createOptionDto(artwork.artworkWorktype),
    artworkMaterial: createOptionDto(artwork.artworkMaterial),
    artworkTechnique: createOptionDto(artwork.artworkTechnique),
    measurements: artwork.measurements,
    width: artwork.width,
    height: artwork.height,
    public: artwork.public,
  };
}

export function createGalleryDetailDto(gallery: Gallery): GalleryDetailDto {
  return {
    id: gallery.id,
    name: gallery.name,
    description: gallery.description,
    address: gallery.address,
    country: createCountryDto(gallery.country),
    gps: gallery.gps,
    public: gallery.public,
  };
}

export function createExhibitionDetailDto(exhibition: Exhibition): ExhibitionDetailDto {
  return {
    id: exhibition.id,
    name: exhibition.name,
    fromDate: exhibition.fromDate.toISOString(),
    toDate: exhibition.toDate.toISOString(),
    curator: exhibition.curator,
    gallery: {
      id: exhibition.gallery.id,
      name: exhibition.gallery.name,
      description: exhibition.gallery.description,
      address: exhibition.gallery.address,
      gps: exhibition.gallery.gps,
    },
    public: exhibition.public,
  };
}

export function createArtworkExhibitionDto(exhibition: Exhibition): ArtworkExhibitionDto {
  return {
    id: exhibition.id,
    name: exhibition.name,
    fromDate: exhibition.fromDate.toISOString(),
    toDate: exhibition.toDate.toISOString(),
    curator: exhibition.curator,
    gallery: {
      id: exhibition.gallery.id,
      name: exhibition.gallery.name,
    },
    public: exhibition.public,
  };
}

export function createGalleryExhibitionDto(exhibition: Exhibition): GalleryExhibitionDto {
  return {
    id: exhibition.id,
    name: exhibition.name,
    fromDate: exhibition.fromDate.toISOString(),
    toDate: exhibition.toDate.toISOString(),
    curator: exhibition.curator,
    gallery: {
      id: exhibition.gallery.id,
      name: exhibition.gallery.name,
    },
    public: exhibition.public,
  };
}

export function createExhibitionArtworkDto(artwork: Artwork): ExhibitionArtworkDto {
  return {
    id: artwork.id,
    name: artwork.name,
    description: artwork.description,
    artist: {
      id: artwork.artist.id,
      name: artwork.artist.name,
      born: artwork.artist.born,
      biography: artwork.artist.biography,
    },
    year: artwork.year,
    nftId: artwork.nftId,
    ai: artwork.ai,
    tags: artwork.tags,
    artworkGenre: createOptionDto(artwork.artworkGenre),
    artworkWorktype: createOptionDto(artwork.artworkWorktype),
    artworkMaterial: createOptionDto(artwork.artworkMaterial),
    artworkTechnique: createOptionDto(artwork.artworkTechnique),
    measurements: artwork.measurements,
    width: artwork.width,
    height: artwork.height,
    public: artwork.public,
  };
}

export function createArtistArtworkDto(artwork: Artwork): ArtistArtworkDto {
  return {
    id: artwork.id,
    name: artwork.name,
    description: artwork.description,
    artist: {
      id: artwork.artist.id,
      name: artwork.artist.name,
      born: artwork.artist.born,
      biography: artwork.artist.biography,
    },
    year: artwork.year,
    nftId: artwork.nftId,
    ai: artwork.ai,
    tags: artwork.tags,
    artworkGenre: createOptionDto(artwork.artworkGenre),
    artworkWorktype: createOptionDto(artwork.artworkWorktype),
    artworkMaterial: createOptionDto(artwork.artworkMaterial),
    artworkTechnique: createOptionDto(artwork.artworkTechnique),
    measurements: artwork.measurements,
    width: artwork.width,
    height: artwork.height,
    public: artwork.public,
  };
}

export function createExhibitionRoomDto(room: UnityRoom): ExhibitionRoomDto {
  return {
    id: room.id,
    name: room.name,
    x: room.x,
    y: room.y,
    width: room.width,
    height: room.height,
    length: room.length,
  };
}

export function createRoomDto(room: UnityRoom): RoomDto {
  return {
    id: room.id,
    name: room.name,
    x: room.x,
    y: room.y,
    width: room.width,
    height: room.height,
    length: room.length,
    exhibition: createExhibitionDto(room.exhibition),
  };
}

export function createNftDto(nft: Nft): NftDto {
  return {
    id: nft.id,
    walletId: nft.walletId,
    nftData: {
      id: nft.nftData.id,
      name: nft.nftData.name,
      metadata: nft.nftData.metadata,
      image: nft.nftData.image,
    },
    artwork: {
      id: nft.artwork.id,
      name: nft.artwork.name,
      description: nft.artwork.description,
      artistId: nft.artwork.artistId,
      year: nft.artwork.year,
      ai: nft.artwork.ai,
      tags: nft.artwork.tags,
      artworkGenreId: nft.artwork.artworkGenreId,
      artworkWorktypeId: nft.artwork.artworkWorktypeId,
      artworkMaterialId: nft.artwork.artworkMaterialId,
      artworkTechniqueId: nft.artwork.artworkTechniqueId,
      measurements: nft.artwork.measurements,
      width: nft.artwork.width,
      height: nft.artwork.height,
      public: nft.artwork.public,
    }
  };
}

export function createNftDetailDto(nft: Nft): NftDetailDto {
  return {
    id: nft.id,
    walletId: nft.walletId,
    nftData: {
      id: nft.nftData.id,
      name: nft.nftData.name,
      metadata: nft.nftData.metadata,
      image: nft.nftData.image,
    },
    artwork: {
      id: nft.artwork.id,
      name: nft.artwork.name,
      description: nft.artwork.description,
      artistId: nft.artwork.artistId,
      year: nft.artwork.year,
      ai: nft.artwork.ai,
      tags: nft.artwork.tags,
      artworkGenreId: nft.artwork.artworkGenreId,
      artworkWorktypeId: nft.artwork.artworkWorktypeId,
      artworkMaterialId: nft.artwork.artworkMaterialId,
      artworkTechniqueId: nft.artwork.artworkTechniqueId,
      measurements: nft.artwork.measurements,
      width: nft.artwork.width,
      height: nft.artwork.height,
      public: nft.artwork.public,
    }
  };
}

export function createDesignerRoomDto(room: UnityRoom): DesignerRoomDto {
  return {
    id: room.id,
    name: room.name,
    x: room.x,
    y: room.y,
    width: room.width,
    height: room.height,
    length: room.length,
    exhibitionId: room.exhibitionId,
    walls: room.walls.map(wall => ({
      id: wall.id,
      x: wall.x,
      y: wall.y,
      z: wall.z,
      rotation: wall.rotation,
      width: wall.width,
      height: wall.height,
      thick: wall.thick,
      color: wall.color,
      opacity: wall.opacity,
      artworkId: wall.artworkId,
      images: wall.images.map(image => ({
        id: image.id,
        x: image.x,
        y: image.y,
        scale: image.scale,
        artworkId: image.artworkId,
      })),
    })),
    lamps: room.lamps.map(lamp => ({
      id: lamp.id,
      x: lamp.x,
      y: lamp.y,
      z: lamp.z,
      range: lamp.range,
      shadow: lamp.shadow,
    })),
    items: room.items.map(item => ({
      id: item.id,
      x: item.x,
      y: item.y,
      z: item.z,
      rotation: item.rotation,
      itemTypeId: item.itemTypeId,
    })),
  };
}

export function createDesignerArtworkDto(artwork: Artwork, exhibition: Exhibition): DesignerArtworkDto {
  return {
    id: artwork.id,
    src: `/admin/artwork/${artwork.id}/unity-image`,
    width: artwork.width,
    height: artwork.height,
    name: artwork.name,
    artist: artwork.artist.name,
    worktype: artwork.artworkWorktype.name,
    material: artwork.artworkMaterial.name,
    technique: artwork.artworkTechnique.name,
    measurements: artwork.measurements,
    exhibition: exhibition.name,
    gallery: exhibition.gallery.name,
    year: artwork.year,
    urlArtwork: `/admin/artwork/${artwork.id}`,
    urlExhibition: `/admin/exhibition/${exhibition.id}`,
    urlGallery: `/admin/gallery/${exhibition.gallery.id}`,
  };
}

export function createDesignerLibraryItemDto(itemType: UnityItemType): DesignerLibraryItemDto {
  return {
    id: itemType.id,
    name: itemType.name,
  };
}
