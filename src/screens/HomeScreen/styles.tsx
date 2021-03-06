import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#addbcd',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '20%',
  },
  contentContainer: {
    backgroundColor: '#fff',
    width: '90%',
    height: '100%',
    flexDirection: 'column',
    borderRadius: 5,
    paddingHorizontal: '10%',
  },
  titleWrapper: {
    width: '100%',
    height: 60,
    marginTop: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  formTitle: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 30,
    textAlign: 'left',
    fontWeight: 'bold'

  }
});
