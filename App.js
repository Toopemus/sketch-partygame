import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GameRoundView from './src/GameRoundView';
import GatherPlayersView from './src/GatherPlayersView';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <GatherPlayersView />
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
