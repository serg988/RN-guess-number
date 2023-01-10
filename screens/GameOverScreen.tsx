import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'

interface Props {
  roundsNumber: number
  pickedNumber: number
  onStartNewGame: () => void
}

const GameOverScreen = ({
  pickedNumber,
  roundsNumber,
  onStartNewGame,
}: Props) => {

  
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.jpeg')}
        />
      </View>
      <Text style={styles.summaryText}>
        It took your phone{' '}
        <Text style={styles.highlighted}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.highlighted}>{pickedNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game?</PrimaryButton>
    </View>
  )
}
export default GameOverScreen

const deviseWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    paddingTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: deviseWidth < 380 ? 200 : 350,
    height: deviseWidth < 380 ? 200 : 350,
    borderRadius: deviseWidth < 380 ? 100 : 175,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: Colors.primary800,
    marginVertical: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlighted: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
})
