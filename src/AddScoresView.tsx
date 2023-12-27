import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { PhaseComponentProps } from "./types/PhaseComponentProps";
import { Player } from "./types/Player";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
        <View style={styles.row}>
          <View style={[styles.boxedElement, styles.rowContent, { backgroundColor: "#ffff00"}]}>
            <Text>Pisteet: {item.score}</Text>
          </View>
          <Pressable
            onPress={() => decreaseScore(item.name)}
            style={[styles.boxedElement, styles.rowButton, { backgroundColor: "#ff0000" }]}
          ><FontAwesome name="minus" color={"#000"} size={16}/>
          </Pressable>
          <Pressable
            onPress={() => increaseScore(item.name)}
            style={[styles.boxedElement, styles.rowButton, { backgroundColor: "#00ff00" }]}
          ><FontAwesome name="plus" color={"#000"} size={16}/>
          </Pressable>
        </View>
      </View>
    )
  }

  return (
    <View>
      {gameState.players.map(player => (
        <PlayerRow key={player.name} item={player} />
      ))}
      <Pressable
        onPress={handleNextPhase}
        style={[styles.boxedElement, styles.nextRoundButton, { backgroundColor: "#00ffff" }]}
      ><Text>Seuraava kierros</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  boxedElement: {
    borderWidth: 3,
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 10,
  },
  rowContent: {
    flex: 8,
    padding: 7,
    marginRight: 5,
  },
  rowButton: {
    flex: 1,
    alignItems: "center",
    padding: 7,
    marginLeft: 5,
  },
  nextRoundButton: {
    padding: 7,
    marginVertical: 5,
    backgroundColor: "#00ffff",
  },
})

export default AddScoresView
