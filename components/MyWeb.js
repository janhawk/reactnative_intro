import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWeb extends Component {
    render() {
        return(
            <Webview 
            source={{
                uri: 'https://www.konexio.eu/index.html'
              }}
              style={{ marginTop: 20 }}
            />
        );
    }
}
export default MyWeb;