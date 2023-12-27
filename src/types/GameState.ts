import { Player } from "./Player";

export interface GameState {
  round: number,
  players: Player[],
  impostor: string
}
