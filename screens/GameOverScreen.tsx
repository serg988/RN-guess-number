import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
//@ts-ignore
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
  const { width, height } = useWindowDimensions()

  let imageSize = 300
  if (width < 380) {
    imageSize = 150
  }
  if (height < 400) {
    imageSize = 80
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: Math.floor(imageSize / 2),
  }

  return (
    <ScrollView style={styles.rootScreen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  )
}
export default GameOverScreen

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    paddingTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // width: width < 380 ? 200 : 350,
    // height: width < 380 ? 200 : 350,
    // borderRadius: width < 380 ? 100 : 175,
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
