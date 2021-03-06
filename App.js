import React from 'react';
import { StyleSheet,
                Text,
                View,
               FlatList } from 'react-native';

import { Drawer } from 'native-base'; 

 import { Container, Header,Left,Body,Right,Button,Icon,Title } from 'native-base';                             
import CardImage from './components/CardImage';
import FooterBadge from './components/FooterBadge';
import Sidebar from './components/Sidebar';

export default class App extends React.Component {

// hello
closeDrawer ()  {
  this . drawer._root.close()

}
  openDrawer ()   {
    this . drawer._root.open()
    
  }


  render( ) {
  
    return (
   
      <Drawer 
                      ref={(ref) => { this.drawer = ref; }}
                      content={<Sidebar navigator={this._navigator} />}
                      onClose={()  =>  this.closeDrawer()}>
                  <View style={styles.container}>
                      <Container>
                        <Header>
                            <Left>
                               <Button transparent>
                                        <Icon name='menu' />
                                </Button>
                          </Left>
                          <Body>
                          <Title>Side bar Drawer</Title>
                          </Body>
                          <Right>
                            <Button transparent onPress={()=> this.openDrawer}>
                              <Icon name='camera' />
                            </Button>
                          </Right>
                    
                            
                        </Header>

                        <FlatList 
                          
                            data={[{key:'a'}, {key:'b'}, {key:'c'}, {key:'d'}]}
                            renderItem={({item}) => <CardImage />}
                        />
                        <CardImage />
                      </Container>


                          {/* <CardImage /> */}
                          <FooterBadge />
                  </View>
                    </Drawer>
      
               
             
             
               
      
      
    );
  }
}

const styles =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',

  },
});