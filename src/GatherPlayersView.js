import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";

const GatherPlayersView = ({ gameState, setGameState, handleNextPhase }) => {
  const [nameInput, setNameInput] = useState("")

  const handlePlayerInput = (event) => {
    setNameInput(event.nativeEvent.text)
  }

  const handleAddPlayer = () => {
    if (nameInput) {
      setGameState({
        ...gameState,
        players: [
          ...gameState.players,
          { name: nameInput }
        ]
      })
      setNameInput("")
    }
  }

  return (
    <View>
      <Text>Jelou</Text>
      <TextInput value={nameInput} onChange={handlePlayerInput} />
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
