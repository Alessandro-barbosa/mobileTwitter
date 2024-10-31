import { useState } from 'react';
import * as React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const HomeScreen = ({navigation}: {navigation: any}) => {
    return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Logado</Text>
       </View>
    );
};

export default HomeScreen;
