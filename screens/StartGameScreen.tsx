import { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
//@ts-ignore
import Title from '../components/ui/Title' 
import Card from '../components/ui/Card'

interface Props {
  pickedNumberHandler: (userNumber: number) => void
}

const StartGameScreen = ({ pickedNumberHandler }: Props) => {
  const [enteredNumber, setEnteredNumber] = useState('')
  const { width, height } = useWindowDimensions()

  function inputHandler(text: string) {
    setEnteredNumber(text)
  }

  function resetHandler() {
    setEnteredNumber('')
  }

  function submitHandler() {
    const number = parseInt(enteredNumber)
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert('Неправильное число.', 'Число должно быть от 1 до 99.', [
        { text: 'Okey', style: 'destructive', onPress: resetHandler },
      ])
      return
    }
    pickedNumberHandler(number)
  }

  const marginTop = height < 450 ? 30 : 100

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <Text style={styles.instructionText}>Enter a number</Text>
            <TextInput
              onChangeText={inputHandler}
              value={enteredNumber}
              style={styles.input}
              maxLength={2}
              keyboardType='number-pad'
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetHandler}>Cancel</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={submitHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}
export default StartGameScreen

// const deviseHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    // marginTop: deviseHeight < 450 ? 10 : 100,
    alignItems: 'center',
  },
  instructionText: {
    color: Colors.primary500,
    fontSize: 36,
  },

  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flex: 1,
  },
})
