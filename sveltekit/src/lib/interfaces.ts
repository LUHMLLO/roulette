export enum ActionType {
  Dare, Truth
}

export enum ActionDifficulty {
  Easy, Medium, Hard
}

export interface Action {
  type: ActionType;
  difficulty: ActionDifficulty;
  description: string;
}

export interface Player {
  avatar: string;
  name: string;
  lives: number
}

export interface Game {
  icon?: string;
  name: string;
  description?: string;
  screen?: number;
  onGoing: boolean;
  players?: Player[];
  actions?: Action[];
  winners?: Player[];
}