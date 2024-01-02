import GatherPlayersView from "./GatherPlayersView"
import GameRoundView from "./GameRoundView"
import { useState } from "react"
import { GameState } from "../types/GameState"
import { PhaseComponentProps } from "../types/PhaseComponentProps"
import AddScoresView from "./AddScoresView"
import { StyleSheet, View } from "react-native"
import MenuView from "./MenuView"

enum GamePhase {
  Menu,
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
    round: 1,
    players: [],
    impostor: ""
  })

  const [currentPhase, setCurrentPhase] = useState<CurrentPhase>({
    phase: GamePhase.Menu,
    component: MenuView
  })

  const setRandomImpostor = (): GameState => {
    const randomIndex = Math.floor(Math.random() * gameState.players.length)
    const newImpostor = gameState.players[randomIndex].name

    const newState = {
      ...gameState,
      impostor: newImpostor
    }
    setGameState(newState)

    return newState // workaround when there's multiple setState calls in a row
  }

  /*
   * Handles setting the correct game phase
   * GatherPlayers -> GameRound -> AddScores -> back to GameRound
   */
  const handleNextPhase = () => {
    switch (currentPhase.phase) {
      case GamePhase.Menu:
        setCurrentPhase({
          phase: GamePhase.GatherPlayers,
          component: GatherPlayersView
        })
        break;
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
        const newState = setRandomImpostor()
        setGameState({
          ...newState,
          round: gameState.round + 1
        })
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
    <View style={styles.container}>
      <PhaseComponent
        gameState={gameState}
        setGameState={setGameState}
        handleNextPhase={handleNextPhase}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: "20%",
  }
});

export default GameManager
