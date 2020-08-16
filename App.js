import React from 'react';
import { WebView } from 'react-native-webview';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  ActivityIndicator,
  
} from 'react-native';
// import MyWeb from './components/MyWeb';


// import Box from './components/Box';

class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <WebView
          source={{
            uri: 'https://www.konexio.eu/index.html'
          }}
          style={{ height: 800 }}
        />
        <ActivityIndicator/>
        <View>
          <Text style={styles.top}>
            I
          </Text>
          <Text style={styles.mid}>
            LOVE
          </Text>
          <Text style={styles.bot}>
            NUGGETS
          </Text>
        </View>
        <Image source={require('./assets/konexio.png')} />
        <Image
        style={styles.konexio}
        source={{
          uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png',
        }}
      />
      <Text style={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
        <Button
        title="Press me"
        color="red"
        onPress={() => Alert.alert('Simple Button pressed')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 80,
    backgroundColor: "beige",
  },
  top: {
    fontSize: 30,
  },
  mid: {
    textAlign: "center",
  },
bot: {
  fontWeight: "bold",
},
scrollView: {
  backgroundColor: 'pink',
  marginHorizontal: 20,
},
konexio: {
  width: 150,
  height: 50,
},
button: {
 
  
},
});
export default App;