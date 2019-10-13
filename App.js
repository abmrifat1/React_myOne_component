/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  FlatList,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import img_iphone from './src/img/iphone.jpg';
import img_mi from './src/img/mi.jpeg';
import GroceryItem from "./src/components/GroceryItem";

const App: () => React$Node = () => {
  const shoppingItems = [
    {
      img: img_iphone,
      name: 'iphone',
      quantity: 2,
      price: 80000,
    },
    {
      img: img_mi,
      name: 'mi',
      quantity: 5,
      price: 90000,
    },
  ];
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{borderRadius: 10, backgroundColor: '#AED6CD'}}>
        <View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={shoppingItems}
            renderItem={data => (
              <GroceryItem grocery={data.item}/>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 5,
    backgroundColor: '#1845B8',
    margin: 5,
    fontSize: 20,
    color: 'white',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
