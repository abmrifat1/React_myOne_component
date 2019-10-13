import React from 'react';
import { StyleSheet,View ,Image,Text} from 'react-native';

const Grocery = props => {
    const {grocery}=props;
    return(
    <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  color: 'white',
                }}>
                <View style={{flex: 1, justifyContent: 'center', padding: 10}}>
                  <Image
                    source={grocery.img}
                    style={{width: 50, height: 50}}
                  />
                </View>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    padding: 10,
                    color: 'red',
                  }}>
                  <Text style={{fontSize: 18}}>{grocery.name}</Text>
                  <Text>{grocery.quantity}</Text>
                </View>
                <View
                  style={
                    
                    {flex: 1, justifyContent: 'center', padding: 10}
                  }>
                  <Text style={{fontSize: 20}}> {grocery.price} </Text>
                </View>
              </View>
)};


export default Grocery;
