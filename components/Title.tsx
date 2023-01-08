import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/colors'

interface Props{
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}
export default Title
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius:7,
    padding: 12,
  },
})