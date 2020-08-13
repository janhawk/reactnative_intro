import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from 'react-native';

// import Box from './components/Box';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.top}>
            I
          </Text>
          <Text style={styles.mid}>
            LOVE
          </Text>
          <Text style={styles.bot}>
            NUGGETS
          </Text>
        </ScrollView>
        <Image source={require('./assets/konexio.png')} />
        <Image
        style={styles.konexio}
        source={{
          uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png',
        }}
      />
        <Button
        title="Press me"
        color="red"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
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