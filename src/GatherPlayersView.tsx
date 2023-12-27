import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { PhaseComponentProps } from "./types/PhaseComponentProps";
import { Player } from "./types/Player";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const GatherPlayersView = ({ gameState, setGameState, handleNextPhase }: PhaseComponentProps) => {
  const [nameInput, setNameInput] = useState("")

  const handleAddPlayer = () => {
    if (nameInput) {
      setGameState({
        ...gameState,
        players: [
          ...gameState.players,
          {
            name: nameInput,
            score: 0
          }
        ]
      })
      setNameInput("")
    }
  }

  const handleRemovePlayer = (name: string) => {
    setGameState({
      ...gameState,
      players: gameState.players.filter(player => player.name !== name)
    })
  }

  const PlayerRow = ({ item }: { item: Player }) => {
    return (
      <View style={styles.row}>
        <View style={[styles.boxedElement, styles.rowContent, { backgroundColor: "#ffff00" }]}>
          <Text>{item.name}</Text>
        </View>
        <Pressable
          onPress={() => handleRemovePlayer(item.name)}
          style={[styles.boxedElement, styles.rowButton, { backgroundColor: "#ff0000" }]}
        ><FontAwesome name="close" color="#ffffff" size={16} />
        </Pressable>
      </View>
    )
  }

  return (
    <View>
      <Text>Pelaajat</Text>
      {gameState.players.map(player => (
        <PlayerRow key={player.name} item={player} />
      ))}
      <View style={styles.row}>
        <TextInput
          value={nameInput}
          placeholder="Pelaajan nimi"
          onChangeText={text => setNameInput(text)}
          style={[styles.boxedElement, styles.rowContent, { backgroundColor: "#ffffff" }]}
        />
        <Pressable onPress={handleAddPlayer}
          style={[styles.boxedElement, styles.rowButton, { backgroundColor: "#00ff00" }]}
        ><FontAwesome name="plus" color="#000000" size={16} />
        </Pressable>
      </View>
      <Pressable onPress={handleNextPhase}
        style={[styles.boxedElement, styles.nextPhaseButton]}
      ><Text>Seuraava</Text>
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
    marginVertical: 5,
  },
  rowContent: {
    flex: 9,
    padding: 7,
    marginRight: 5,
  },
  rowButton: {
    flex: 1,
    alignItems: "center",
    padding: 7,
    marginLeft: 5,
  },
  nextPhaseButton: {
    padding: 7,
    marginVertical: 5,
    backgroundColor: "#00ffff",
  },
})

export default GatherPlayersView
