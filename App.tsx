import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import Colors from './constants/colors'
import GameOverScreen from './screens/GameOverScreen'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(0)
  const [gameIsOver, setGameIsOver] = useState(true)
const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  // Watch for fonts to be loaded, then hide the splash screen
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync()
    }
    if (fontsLoaded) {
      hideSplashScreen()
    }
  }, [fontsLoaded])
  // Initally return null instead of <AppLoading />
  if (!fontsLoaded) {
    return null
  }

  function pickedNumberHandler(userNumber: number) {
    setPickedNumber(userNumber)
    setGuessRounds(prev=>prev+1)
    setGameIsOver(false)
  }

  function gameOverHandler(guessRoundsListLength: number) {
    setGameIsOver(true)
    setGuessRounds(guessRoundsListLength)
  }

  function startNewGameHandler() {
    setGuessRounds(0)
    setPickedNumber(0)
  }

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />

  if (pickedNumber) {
    screen = (
      <GameScreen pickedNumber={pickedNumber} onGameOver={gameOverHandler} />
    )
  }

  if (gameIsOver && pickedNumber) {
    screen = (
      <GameOverScreen
        pickedNumber={pickedNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}

      />
    )
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StatusBar style='light' />
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
})
