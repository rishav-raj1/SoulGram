import React from 'react'
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: "#000" }}>Details Screen</Text>
        <Button
        title="Go to home screen"
        onPress={() => navigation.navigate("Home")}
        />
        <Button
        title="Go to details screen again"
        onPress={() => navigation.navigate("Details")}
        />
        <Button
        title="Go back"
        onPress={() => navigation.goBack()}
        />
        <Button
        title="Go to home screen"
        onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }
  

export default DetailsScreen