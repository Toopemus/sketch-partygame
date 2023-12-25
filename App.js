import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GameManager from './src/GameManager';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <GameManager />
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

export default App;
