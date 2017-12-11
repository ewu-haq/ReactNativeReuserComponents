import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/Components/Header'

export default class ReactnativeUsableComponents extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerName = 'ReactnativeUsableComponents'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
