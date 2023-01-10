import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/colors'

interface Props {
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
    fontFamily: 'open-sans-bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 7,
    padding: 12,
    maxWidth: '80%'
  },
})
