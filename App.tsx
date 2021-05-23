if(__DEV__) {
  import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { ContextProvider } from './src/hooks/useTranslate';

import { dark, ligth } from './src/theme'
import { AuthStack, DashboardTabs } from './src/routes'

export default function App() {
  const [language, setLanguage] = useState({})
  
  useEffect(() => {
    setLanguage('en')
  }, [])

  const contextProps: object = {
    language,
    setLanguage
  }
  return (
    <ContextProvider {...contextProps}>
      <ThemeProvider theme={dark} >
        <NavigationContainer>
          <DashboardTabs />
        </NavigationContainer>
      </ThemeProvider>
    </ContextProvider>
  );
}
