export enum Difficulty {
  Easy, Medium, Hard
}

export interface Action {
  difficulty: Difficulty;
  description: string;
}

export interface Gamemode {
  name: string;
  description: string;
  actions: Action[];
}

export interface Player {
  name: string;
  avatar?: string;
  points?: number;
}