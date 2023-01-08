import { useState } from 'react'
import { StyleSheet, View, TextInput, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Colors from '../constants/colors'

interface Props {
  pickedNumberHandler: (userNumber: number) => void
}

const StartGameScreen = ({ pickedNumberHandler }: Props) => {
  const [enteredNumber, setEnteredNumber] = useState('')
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

  return (
    <View style={styles.inputContainer}>
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
    </View>
  )
}
export default StartGameScreen
const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
