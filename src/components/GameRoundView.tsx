import { Pressable, StyleSheet, Text, View } from 'react-native';
import RevealWordView from './RevealWordView';
import { useState } from 'react';
import { Player } from '../types/Player';
import { PhaseComponentProps } from '../types/PhaseComponentProps';
import words from '../../assets/words.json'
import themeStyles from '../styles';

const getRandomWord = (words: string[]) => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

const GameRoundView = ({ gameState, handleNextPhase }: PhaseComponentProps) => {
  const [word, _] = useState(getRandomWord(words.words));
  const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
  const [playRound, setPlayRound] = useState(false);

  const handleNextPlayer = () => {
    const nextIndex = currPlayerIndex + 1;
    if (nextIndex >= gameState.players.length) {
      setPlayRound(true);
    } else {
      setCurrPlayerIndex(currPlayerIndex + 1);
    }
  }

  const getCurrentPlayer = (): Player => {
    return gameState.players[currPlayerIndex]
  }

  /*
   * people know the word and the impostor has been chosen,
   * app gets put down and people begin drawing
   * TODO: maybe a adjustable timer to determine when the round should end?
  */
  if (playRound) {
    return (
      <View style={styles.container}>
        <Text style={[themeStyles.header, themeStyles.fontLg]}>
          Kierros {gameState.round}
        </Text>
        <Text>Tsädäm, voitte nyt pelata kierroksen</Text>
        <Pressable
          onPress={handleNextPhase}
          style={[themeStyles.boxedElement, themeStyles.cyan, styles.button]}
        ><Text>Lopeta kierros</Text>
        </Pressable>
      </View>
    );
  }

  // app goes around the table and people are shown the word
  return (
    <View style={styles.container}>
      <Text style={[themeStyles.header, themeStyles.fontLg]}>
        Kierros {gameState.round}
      </Text>
      <RevealWordView word={word}
        player={getCurrentPlayer()}
        gameState={gameState}
        handleNextPlayer={handleNextPlayer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 7,
    marginVertical: 5,
  },
})

export default GameRoundView;
