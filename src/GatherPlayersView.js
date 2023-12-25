import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";

const GatherPlayersView = () => {
  const [players, setPlayers] = useState([])
  const [nameInput, setNameInput] = useState("")

  const handlePlayerInput = (event) => {
    setNameInput(event.nativeEvent.text)
  }

  return (
    <View>
      <Text>Jelou</Text>
      <TextInput onChange={handlePlayerInput}/>
      <Button title="lisää"/>
    </View>
  )
}

export default GatherPlayersView
