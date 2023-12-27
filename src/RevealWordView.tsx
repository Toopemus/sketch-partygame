import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
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
      <View>
        <Text>Hei, {player.name}!</Text>
        <Pressable
          onPress={() => setRevealWord(true)}
          style={[styles.boxedElement, styles.revealWordButton]}
        ><Text>Paljasta sana</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View>
      { gameState.impostor === player.name
        ? <Text>{player.name}, olet huijari!</Text>
        : <Text>{player.name}, sanasi on {word}</Text>
      }
      <Pressable
        onPress={handleNextPress}
        style={[styles.boxedElement, styles.nextPlayerButton]}
      ><Text>Seuraava</Text>
      </Pressable>
    </View>
  );
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
  revealWordButton: {
    padding: 7,
    marginVertical: 5,
    backgroundColor: "#ffff00",
  },
  nextPlayerButton: {
    padding: 7,
    marginVertical: 5,
    backgroundColor: "#00ff00",
  },
});

export default RevealWordView;
