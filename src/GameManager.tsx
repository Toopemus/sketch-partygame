import GatherPlayersView from "./GatherPlayersView"
import GameRoundView from "./GameRoundView"
import { useState } from "react"
import { GameState } from "./types/GameState"
import { PhaseComponentProps } from "./types/PhaseComponentProps"

enum GamePhase {
  GatherPlayers,
  GameRound,
  AddScores,
}

type CurrentPhase = {
  phase: GamePhase,
  component: ({}: PhaseComponentProps) => React.JSX.Element,
}

/*
 * Handles game state and returns the current phase
 */
const GameManager = () => {
  const [gameState, setGameState] = useState<GameState>({
    round: 0,
    players: []
  })

  const [currentPhase, setCurrentPhase] = useState<CurrentPhase>({
    phase: GamePhase.GatherPlayers,
    component: GatherPlayersView
  })

  const setRandomImpostor = () => {
    let tempPlayers = gameState.players
    const randomIndex = Math.floor(Math.random() * tempPlayers.length)
    const newImpostor = tempPlayers[randomIndex]

    tempPlayers[randomIndex] = { ...newImpostor, isImpostor: true }

    setGameState({
      ...gameState,
      players: tempPlayers
    })
  }

  /*
   * Handles setting the correct game phase
   * GatherPlayers -> GameRound -> AddScores -> back to GameRound
   */
  const handleNextPhase = () => {
    switch (currentPhase.phase) {
      case GamePhase.GatherPlayers:
        setRandomImpostor()
        setCurrentPhase({
          phase: GamePhase.GameRound,
          component: GameRoundView
        })
        break;
      case GamePhase.GameRound:
        break;
      case GamePhase.AddScores:
        break;
      default:
        break;
    }
  }

  const PhaseComponent = currentPhase.component

  return (
    <PhaseComponent
      gameState={gameState}
      setGameState={setGameState}
      handleNextPhase={handleNextPhase}
    />
  )
}

export default GameManager
