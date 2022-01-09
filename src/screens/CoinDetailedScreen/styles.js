import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  priceContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coinName: {
    color: 'white',
    fontSize: 15,
  },
  currentPrice: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 1,
  },
  priceChangePercentage: {
    paddingHorizontal: 3,
    paddingVertical: 8,
    borderRadius: 5,
    flexDirection: 'row',
  },
  priceChange: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 10,
    fontSize: 16,
    color: 'white'
  }
})

export default styles
