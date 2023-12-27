import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Player } from './types/Player';
import { GameState } from './types/GameState';

interface RevealWordViewProps {
  word: string,
  player: Player,
  gameState: GameState,
  handleNextPlayer: () => void
}
const RevealWordView = ({ word, player, gameState, handleNextPlayer }: RevealWordViewProps) => {
  const [revealWord, setRevealWord] = useState(false);

  const handleNextPress = () => {
    handleNextPlayer();
    setRevealWord(false);
  }

  if (!revealWord) { // The word is still hidden
    return (
      <View style={styles.container}>
        <Text>Hei, {player.name}!</Text>
        <Button
          onPress={() => setRevealWord(true)}
          title='paljasta sana' />
      </View>
    )
  }

  if (gameState.impostor === player.name) {
    return (
      <View style={styles.container}>
        <Text>{player.name}, olet huijari!</Text>
        <Button title='seuraava'
          onPress={handleNextPress}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>{player.name}, sanasi on {word}</Text>
      <Button title='seuraava'
        onPress={handleNextPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RevealWordView;
