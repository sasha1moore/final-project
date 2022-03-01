import { StyleSheet, Text, SafeAreaView } from "react-native";
import {Pressable} from 'react-native';
import React from "react";


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate('TabNav')}>
        <Text>Checkout Screen! Go back to tabs</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});