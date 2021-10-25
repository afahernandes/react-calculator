import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import Container from './Container';
import { useFonts,Roboto_400Regular, Roboto_400Regular_Italic, } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

export default function App() {
  
  //fonts
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
  });
    // Setup Font
    const fontConfig = {
      Roboto: {
        400: {
          normal: "Roboto_400Regular",
          italic: "Roboto_400Regular_Italic",
        },
      },
    };

   // Setup Theme
  const customeColor = {
    primary: {
      50: "#FFE9DD",
      100: "#FFCDBB",
      200: "#FFAB9A",
      300: "#FF8B81",
      400: "#FF5757",
      500: "#DB3F4D",
      600: "#DB3F4D",
      700: "#B72B44",
      800: "#931B3A",
      900: "#930707",
    },
    amber: {
      400: "#FF5757",
    },
  };
 
  //Configuration Native Base Custom Theme
  const theme = extendTheme({
    colors: customeColor,
    fontConfig,
    fonts: {
      heading: "Roboto",
      body: "Roboto",
      mono: "Roboto",
    },
    config: { initialColorMode: "dark" },
  }); 
  
  
 
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <NativeBaseProvider theme={theme}>
    <Container />
    </NativeBaseProvider>
  );
  }
}