import { useState, useEffect } from 'react'
import { StyleSheet, View, Alert, FlatList } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import NumberContainer from '../components/game/NumberContainer'
import Card from '../components/ui/Card'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import InstructionText from '../components/ui/InstructionText'
import { generateRandomBetween } from '../lib/utils'
import GuessLog from '../components/game/GuessLog'

interface Props {
  pickedNumber: number
  onGameOver: (guessRoundsListLength: number) => void
}

let min = 1
let max = 100

const GameScreen = ({ pickedNumber, onGameOver }: Props) => {
  const initialGuess = generateRandomBetween(min, max, pickedNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess])

  const guessRoundsListLength = guessRounds.length
  useEffect(() => {
    if (pickedNumber === currentGuess) {
      onGameOver(guessRoundsListLength)
      return
    }
  }, [pickedNumber, currentGuess, onGameOver, guessRoundsListLength])

  useEffect(() => {
    min = 1
    max = 100
  }, [])

  function nextGuessHandler(direction: 'higher' | 'lower') {
    if (
      (direction === 'lower' && currentGuess < pickedNumber) ||
      (direction === 'higher' && currentGuess > pickedNumber)
    ) {
      Alert.alert('You cheat!', 'You know this is wrong!', [
        { text: 'Oops', style: 'cancel' },
      ])
      return
    }

    if (direction === 'lower') {
      max = currentGuess
    } else {
      min = currentGuess + 1
    }

    const newRndNum = generateRandomBetween(min, max, currentGuess)
    setCurrentGuess(newRndNum)
    setGuessRounds((prev) => [newRndNum, ...prev])
  }

  

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess.</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name='md-remove' size={24} color='#ddb52f' />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}>
              <Ionicons name='add' size={24} color='#ddb52f' />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLog
              roundNumber={guessRoundsListLength - index}
              guess={item}
            />
          )}
          keyExtractor={(item: number) => item.toString()}
        />
      </View>
    </View>
  )
}
export default GameScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    alignItems: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
})
