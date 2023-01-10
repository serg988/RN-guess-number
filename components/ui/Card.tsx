import { ReactNode } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Colors from '../../constants/colors'

interface Props {
  children: ReactNode
}

const Card = ({ children }: Props) => {
  return <View style={styles.card}>{children}</View>
}
export default Card

const deviseWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  card: {
    // flex: 1,
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: deviseWidth < 380 ? 10 : 35,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})
