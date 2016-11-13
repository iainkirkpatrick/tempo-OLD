import StyleSheet from 'stilr'

export default StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  gridColumn: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black'
  },
  dayCellActive: {
    height: 75,
    width: 75,
    border: '1px solid black',
    backgroundColor: 'black'
  },
  dayCellInactive: {
    height: 75,
    width: 75,
    border: '1px solid black'
  }
})
