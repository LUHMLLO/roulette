export enum Difficulty {
  Easy, Medium, Hard
}

export interface Dare {
  difficulty: Difficulty;
  description: string;
}

export interface Player {
  avatar: string;
  name: string;
  lives: number
}

export interface Gamemode {
  icon: string;
  name: string;
  description: string;
  onGoing: boolean;
  players?: Player[];
  dares?: Dare[];
  winners?: Player[];
}