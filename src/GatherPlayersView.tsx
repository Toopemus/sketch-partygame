import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { PhaseComponentProps } from "./types/PhaseComponentProps";

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
            score: 0,
            isImpostor: false
          }
        ]
      })
      setNameInput("")
    }
  }

  return (
    <View>
      <Text>Jelou</Text>
      <TextInput value={nameInput} onChangeText={text => setNameInput(text)} />
      <Button title="lisää"
        onPress={handleAddPlayer}
      />
      <Button title="seuraava"
        onPress={handleNextPhase}
      />
    </View>
  )
}

export default GatherPlayersView
