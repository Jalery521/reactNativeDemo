import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  titleName: {
    fontSize: 22,
    color: '#333',
  },
  contentBox: {
    paddingTop: 20,
    flex: 1,
  },
  formItem: {
    flexDirection: 'row',
    paddingTop: 10,
    height: 60,
    alignItems: 'center',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  pickerWrapper: {
    width: 50,
    overflow: 'hidden',
  },
  pickerBox: {
    height: 30,
    width: 120,
    color: '#666',
    fontSize: 12,
    backgroundColor: '#eaeaea',
  },
  phoneInput: {
    paddingLeft: 10,
    flex: 1,
  },
  loginBtn: {
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd243',
  },
  loginText: {
    fontSize: 16,
    color: '#fff',
  },
  cutTypeText: {
    fontSize: 14,
    color: '#666',
  },
})
