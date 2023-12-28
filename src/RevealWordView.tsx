import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Player } from './types/Player';
import { GameState } from './types/GameState';
import themeStyles from './styles';

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
          style={[themeStyles.boxedElement, themeStyles.yellow, styles.button]}
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
        style={[themeStyles.boxedElement, themeStyles.green, styles.button]}
      ><Text>Seuraava</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 7,
    marginVertical: 5,
  }
});

export default RevealWordView;
