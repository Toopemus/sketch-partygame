import { GameState } from "./GameState";

export interface PhaseComponentProps {
  gameState: GameState,
  setGameState: React.Dispatch<React.SetStateAction<GameState>>,
  handleNextPhase: () => void
}
