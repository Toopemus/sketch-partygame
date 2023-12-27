import { Button, FlatList, Text, View } from "react-native";
import { PhaseComponentProps } from "./types/PhaseComponentProps";
import { Player } from "./types/Player";

const AddScoresView = ({ gameState, setGameState, handleNextPhase}: PhaseComponentProps) => {
  const increaseScore = (playerName: string) => {
    const tempPlayers = [...gameState.players]
    const player = tempPlayers.find(player => playerName === player.name)
    if (player) {
      player.score = player.score + 1
    }
    setGameState({
      ...gameState,
      players: tempPlayers
    })
  }

  const decreaseScore = (playerName: string) => {
    const tempPlayers = [...gameState.players]
    const player = tempPlayers.find(player => playerName === player.name)
    if (player) {
      player.score = player.score - 1
    }
    setGameState({
      ...gameState,
      players: tempPlayers
    })
  }

  const PlayerRow = ({ item }: { item: Player }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Button title="-" onPress={() => decreaseScore(item.name)}/>
        <Text>{item.score}</Text>
        <Button title="+" onPress={() => increaseScore(item.name)}/>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={gameState.players}
        renderItem={PlayerRow}
        keyExtractor={player => player.name}
      />
      <Button title="seuraava kierros" onPress={handleNextPhase} />
    </View>
  )
}

export default AddScoresView
