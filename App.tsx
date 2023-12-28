import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import GameManager from './src/GameManager';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import themeStyles from './src/styles';
import { useFonts } from 'expo-font';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Super-Reduce': require('./assets/fonts/Super_Reduce.ttf'),
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[themeStyles.white, styles.container]}>
        <StatusBar style="auto" />
        <GameManager />
      </SafeAreaView >
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
