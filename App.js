import {Button, createTheme, ThemeProvider} from '@rneui/themed';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});

// Your App
export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Button title="My Button" />
        <Button title="My 2nd Button" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
