import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { PhaseComponentProps } from "./types/PhaseComponentProps";
import { Player } from "./types/Player";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import themeStyles from "./styles";

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
        <View style={[themeStyles.boxedElement, themeStyles.yellow, styles.rowContent]}>
          <Text>{item.name}</Text>
        </View>
        <Pressable
          onPress={() => handleRemovePlayer(item.name)}
          style={[themeStyles.boxedElement, themeStyles.red, styles.rowButton]}
        ><FontAwesome name="close" color="#000" size={16} />
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={[themeStyles.header, themeStyles.fontLg]}>Pelaajat</Text>
      {gameState.players.map(player => (
        <PlayerRow key={player.name} item={player} />
      ))}
      <View style={[styles.row, { marginTop: 30 }]}>
        <TextInput
          value={nameInput}
          placeholder="Pelaajan nimi"
          onChangeText={text => setNameInput(text)}
          style={[themeStyles.boxedElement, themeStyles.white, styles.rowContent]}
        />
        <Pressable onPress={handleAddPlayer}
          style={[themeStyles.boxedElement, themeStyles.green, styles.rowButton]}
        ><FontAwesome name="plus" color="#000" size={16} />
        </Pressable>
      </View>
      <Pressable onPress={handleNextPhase}
        style={[themeStyles.boxedElement, themeStyles.cyan, styles.nextPhaseButton]}
      ><Text>Seuraava</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
})

export default GatherPlayersView
