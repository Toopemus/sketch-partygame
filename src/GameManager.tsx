import GatherPlayersView from "./GatherPlayersView"
import GameRoundView from "./GameRoundView"
import { useState } from "react"
import { GameState } from "./types/GameState"
import { PhaseComponentProps } from "./types/PhaseComponentProps"
import AddScoresView from "./AddScoresView"

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
    players: [],
    impostor: ""
  })

  const [currentPhase, setCurrentPhase] = useState<CurrentPhase>({
    phase: GamePhase.GatherPlayers,
    component: GatherPlayersView
  })

  const setRandomImpostor = () => {
    const randomIndex = Math.floor(Math.random() * gameState.players.length)
    const newImpostor = gameState.players[randomIndex].name

    setGameState({
      ...gameState,
      impostor: newImpostor
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
        setCurrentPhase({
          phase: GamePhase.AddScores,
          component: AddScoresView
        })
        break;
      case GamePhase.AddScores:
        setRandomImpostor()
        setCurrentPhase({
          phase: GamePhase.GameRound,
          component: GameRoundView
        })
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
