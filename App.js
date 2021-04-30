import React from 'react';
import { StyleSheet,
                Text,
                View,} from 'react-native';
import CardImage from './components/CardImage';
import FooterBadge from './components/FooterBadge';

export default class App extends React.Component {





  render( ) {
    return (
       <CardImage />
    );
  }
}

const styles =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});