export enum Difficulty {
  Easy, Medium, Hard
}

export interface Dare {
  difficulty: Difficulty;
  description: string;
}

export interface Player {
  icon?: string;
  name: string;
  points?: number;
}

export interface Gamemode {
  icon?: string;
  name: string;
  description: string;
  onGoing: boolean;
  dares?: Dare[];
  players?: Player[];
  winners?: Player[];
}