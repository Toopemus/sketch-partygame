import { StyleSheet, View } from 'react-native';
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

const GameRoundView = ({ gameState, setGameState, handleNextPhase }: PhaseComponentProps) => {
  const [word, setWord] = useState(getRandomWord(gameWords));
  const [currPlayerIndex, setCurrPlayerIndex] = useState(0);

  const handleNextPlayer = () => {
    setCurrPlayerIndex(currPlayerIndex + 1);
  }

  const getCurrentPlayer = (): Player => {
    return gameState.players[currPlayerIndex]
  }

  return (
    <View style={styles.container}>
      <RevealWordView word={word}
        player={getCurrentPlayer()}
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
