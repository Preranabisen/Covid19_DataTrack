import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  firstcontainer: {
    marginTop: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  secondcontainer: {
    flex: 1,
    flexDirection: 'row',
  },
  affectedview: {
    borderRadius: 10,
    backgroundColor: '#f6af62',
    padding: 15, 
    marginRight: 5,
    paddingRight: 5,
  },
  deathview: {
    borderRadius: 10,
    backgroundColor: '#ff5959',
    padding: 15,
    marginLeft: 5,
    paddingRight: 5,
  },
  recoveredview: {
    borderRadius: 10,
    backgroundColor: '#4cd97b',
    padding: 15,
    marginRight: 6,
    paddingRight: 5,
  },
  activeview: {
    borderRadius: 10,
    backgroundColor: '#4bb5ff',
    padding: 15,
    marginRight: 3,
    marginLeft: 3,
    paddingRight: 5,
  },
  seriousview: {
    borderRadius: 10,
    backgroundColor: '#9059ff',
    padding: 15,
    marginLeft: 6,
    paddingRight: 5,
  },
  caseNameTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  caseCountTitle: {
    color: '#fff',
    fontSize: 16,
  },
});
