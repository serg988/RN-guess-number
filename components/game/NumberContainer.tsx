import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Colors from '../../constants/colors'

interface Props {
  children: number
}

const NumberContainer = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}
export default NumberContainer

const deviseWidth = Dimensions.get('window').width
console.log("🚀 ~ file: NumberContainer.tsx:18 ~ deviseWidth", deviseWidth)

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviseWidth < 380 ? 12 : 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.accent500,
    fontSize: deviseWidth < 380 ? 24 : 36,
    fontWeight: 'bold',
  },
})
