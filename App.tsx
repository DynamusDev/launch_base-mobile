import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native'

import { dark, ligth   } from './src/theme'
import { AuthStack, DashboardTabs } from './src/routes'

export default function App() {
  return (
    <ThemeProvider theme={dark} >
      <NavigationContainer>
        <DashboardTabs />
      </NavigationContainer>
    </ThemeProvider>
  );
}
