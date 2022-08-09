import {Button, createTheme, ThemeProvider} from '@rneui/themed';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import EvCheckbox from './src/Components/EvCheckbox';

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
    CheckBox: {
      checkedIcon: 'check',
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
        <EvCheckbox />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
