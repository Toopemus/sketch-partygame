import { Button, FlatList, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { PhaseComponentProps } from "./types/PhaseComponentProps";
import { Player } from "./types/Player";

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

  const handleRemovePlayer = (name: string) => {
    setGameState({
      ...gameState,
      players: gameState.players.filter(player => player.name !== name)
    })
  }

  const PlayerRow = ({ item }: { item: Player }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Button title="X" onPress={() => handleRemovePlayer(item.name)}/>
      </View>
    )
  }

  return (
    <View>
      <Text>Pelaajat:</Text>
      <FlatList
        data={gameState.players}
        renderItem={PlayerRow}
        keyExtractor={player => player.name}
      />
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
