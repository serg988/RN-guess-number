import { StyleSheet, Text, View } from 'react-native'
import Title from '../components/Title'

interface Props {
  pickedNumber: number
}

const GameScreen = ({ pickedNumber }: Props) => {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess.</Title>
    </View>
  )
}
export default GameScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
})
