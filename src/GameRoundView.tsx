import { Button, StyleSheet, Text, View } from 'react-native';
import RevealWordView from './RevealWordView';
import { useState } from 'react';
import { Player } from './types/Player';
import { PhaseComponentProps } from './types/PhaseComponentProps';

const gameWords = [
  'kaurapuuro',
  'kattila',
  'kynttilä',
  'formula',
];

const getRandomWord = (words: string[]) => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

const GameRoundView = ({ gameState, handleNextPhase }: PhaseComponentProps) => {
  const [word, _] = useState(getRandomWord(gameWords));
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
        <Text>Tsädäm, voitte nyt pelata kierroksen</Text>
        <Button title="lopeta kierros" onPress={handleNextPhase}/>
      </View>
    );
  }

  // app goes around the table and people are shown the word
  return (
    <View style={styles.container}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GameRoundView;
