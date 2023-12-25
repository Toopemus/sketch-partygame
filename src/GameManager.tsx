import GatherPlayersView from "./GatherPlayersView"
import GameRoundView from "./GameRoundView"
import { useState } from "react"
import { GameState } from "./types/GameState"

export interface PhaseComponentProps {
  gameState: GameState,
  setGameState: React.Dispatch<React.SetStateAction<GameState>>,
  handleNextPhase: () => void
}
/*
 * Handles game state and returns the current phase
 */
const GameManager = () => {
  const [gameState, setGameState] = useState<GameState>({
    round: 0,
    players: []
  })

  const [currentPhase, setCurrentPhase] = useState<number>(0)
  const phases = [
    GatherPlayersView,
    GameRoundView
  ]

  /*
   * Handles setting the correct game phase
   */
  const handleNextPhase = () => {
    // TODO: proper logic, phases should be:
    // GatherPlayers -> GameRound -> AddScores -> back to GameRound
    setCurrentPhase(currentPhase + 1)
  }

  const PhaseComponent = phases[currentPhase]

  return (
    <PhaseComponent
      gameState={gameState}
      setGameState={setGameState}
      handleNextPhase={handleNextPhase}
    />
  )
}

export default GameManager
