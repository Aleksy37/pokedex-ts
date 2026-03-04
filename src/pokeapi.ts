export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const fullUrl = pageURL || `${PokeAPI.baseURL}/location-area`
        try {
            const resp = await fetch(fullUrl);
            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }
            const locations: ShallowLocations = await resp.json();
            return locations;
        } catch (err) {
            throw new Error(`Error fetching locations: ${(err as Error).message}`)
        }
    }

  async fetchLocation(locationName: string): Promise<Location> {
    const fullURL = `${PokeAPI.baseURL}/location-area/${locationName}`
    try {
        const resp = await fetch(fullURL);
        if (!resp.ok) {
            throw new Error(`${resp.status} ${resp.statusText}`);
        }
        const location: Location = await resp.json();
        return location;
    } catch (err) {
        throw new Error(`Error fetching location '${locationName}': ${(err as Error).message}`);
    }
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {name: string, url: string}[];
};

export type Location = {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: any[];
        max_level: number;
        method: {
          name: string;
          url: string;
        };
        min_level: number;
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
};