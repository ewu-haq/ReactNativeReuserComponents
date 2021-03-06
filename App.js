import React from 'react';
import { StyleSheet, View, AppRegistry, Text } from 'react-native';
import CustomHeader from './src/Components/CustomHeader';
import AlbumList from './src/Components/AlbumList';

export default class ReactNativeReuserComponents extends React.Component{
  render() {
    return (
      <View style={styles.containerStyle}>
          <CustomHeader 
            headerName='Reusable Components'
            headerStyle={styles.headerStyle}
            fontStyle= {styles.textStyle}
          />
        <AlbumList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 10,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  },
  containerStyle: {
    flex: 1
  }
});