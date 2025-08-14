import React from 'react';
import { SafeAreaView, StatusBar, Platform, KeyboardAvoidingView, ScrollView, ActivityIndicator } from 'react-native';
import SignUpScreen from './screens/CarSaleScreen';
import CarSaleScreen from './screens/CarSaleScreen';

import { Poppins_400Regular,Poppins_600SemiBold,Poppins_700Bold} from '@expo-google-fonts/poppins';
import {useFonts} from 'expo-font';


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,Poppins_600SemiBold,Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <ActivityIndicator size={20} color={"black"} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'dark-content'}
        backgroundColor="#f5f5f5"
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          bounces={false}
        >
          <CarSaleScreen />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
