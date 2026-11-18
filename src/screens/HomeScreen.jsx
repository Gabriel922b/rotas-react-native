import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tela inicial home Screen</Text>
        <Button
            title="Ir para a tela de detalhes"
            onPress={() => this.props.navigation.navigate('Details', { id: 10})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
