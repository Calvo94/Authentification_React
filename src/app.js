import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyCqFT-juc8j35C6WdCUCw7sa9rBT6h_wu4',
        authDomain: 'authentification-33e23.firebaseapp.com',
        databaseURL: 'https://authentification-33e23.firebaseio.com',
        projectId: 'authentification-33e23',
        storageBucket: '',
        messagingSenderId: '572103970845'
      });
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
  }

renderContent() {
switch (this.state.loggedIn) {
  case true:
    return (
      <CardSection>
      <Button onPress={() => firebase.auth().signOut()}>
        Log out
      </Button>
      </CardSection>
    );
  case false:
      return <LoginForm />;
  default:
    return (
      <CardSection>
        <Spinner size="large" />
      </CardSection>
      );
  }
}


  render() {
    return (
      <View>
        <Header headerText="Authentification" />
        {this.renderContent()}
      </View>
    );
  }
}
export default App;
