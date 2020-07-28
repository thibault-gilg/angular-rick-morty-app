export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    image: string;
}

export interface Origin {
    name: string;
    url: string;
}
