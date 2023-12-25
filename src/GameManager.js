import GatherPlayersView from "./GatherPlayersView"
import GameRoundView from "./GameRoundView"
import { useState } from "react"

/*
 * Handles game state and returns the current phase
 */
const GameManager = () => {
  const [gameState, setGameState] = useState({
    roundNumber: 0,
    players: []
  })

  const [currentPhase, setCurrentPhase] = useState(0)
  const phases = [
    GatherPlayersView,
    GameRoundView
  ]

  /*
   * Handles setting the correct game phase
   */
  const handleNextPhase = () => {
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
