import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { 
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
 } from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme'

import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';
import { CategorySelect } from './src/screens/CategorySelect';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';


export default function App() {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (

        
        <ThemeProvider theme={ theme }>
            <StatusBar 
                translucent
                style="light"
            />
            <NavigationContainer>
                <AppRoutes/>
            </NavigationContainer>
        </ThemeProvider>
    )
}