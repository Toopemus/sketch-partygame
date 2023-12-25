import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";

const GatherPlayersView = ({ gameState, setGameState, handleNextPhase }) => {
  const [nameInput, setNameInput] = useState("")

  const handlePlayerInput = (event) => {
    setNameInput(event.nativeEvent.text)
  }

  return (
    <View>
      <Text>Jelou</Text>
      <TextInput onChange={handlePlayerInput} />
      <Button title="lisää" />
      <Button title="seuraava"
        onPress={handleNextPhase}
      />
    </View>
  )
}

export default GatherPlayersView
