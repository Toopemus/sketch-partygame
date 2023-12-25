import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const RevealWordView = ({ word, player, handleNextPlayer }) => {
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

  if (player.isImpostor) {
    return (
      <View style={styles.container}>
        <Text>{player.name}, olet huijari!</Text>
        <Button title='seuraava'
          onPress={handleNextPress}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>{player.name}, sanasi on {word}</Text>
        <Button title='seuraava'
          onPress={handleNextPress}
        />
      </View>
    );
  }

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
