import { StyleSheet, View } from 'react-native';
import RevealWordView from './RevealWordView';
import { useState } from 'react';

const gameWords = [
  'kaurapuuro',
  'kattila',
  'kynttilä'
];

const getRandomWord = (words) => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

const GameRoundView = ({ gameState, setGameState, handleNextPhase }) => {
  const [word, setWord] = useState(getRandomWord(gameWords));
  const [players, setPlayers] = useState([
    {
      isImpostor: true,
      name: 'Roope',
    },
    {
      isImpostor: false,
      name: 'Toope',
    },
    {
      isImpostor: false,
      name: 'Poope',
    }
  ]);
  const [currPlayerIndex, setCurrPlayerIndex] = useState(0);

  const handleNextPlayer = () => {
    setCurrPlayerIndex(currPlayerIndex + 1);
  }

  return (
    <View style={styles.container}>
      <RevealWordView word={word}
        player={players[currPlayerIndex]}
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
