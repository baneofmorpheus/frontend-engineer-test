export type RickAndMortyCharacter = {
  id: number;
  name: string;
  status: string;
  type: string;
  species: string;
  gender: string;
  origin: CharacterOriginType;
  location: LocationType;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
};

export type RickAndMortCharacterList = Array<RickAndMortyCharacter>;

type CharacterOriginType = {
  name: string;
  url: string;
};
type LocationType = {
  name: string;
  url: string;
};
