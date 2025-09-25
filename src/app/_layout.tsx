import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import { HeroUINativeProvider } from 'heroui-native';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import '../../global.css';
import { AppThemeProvider, useAppTheme } from '../contexts/app-theme-context';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

function ThemedLayout() {
  const { currentTheme } = useAppTheme();

  return (
    <HeroUINativeProvider
      config={{
        colorScheme: 'system',
        theme: currentTheme,
        textProps: {
          allowFontScaling: false,
        },
      }}
    >
      <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen
          name="(public)/login"
          options={{ headerShown: false }}
        />
      </Stack>
    </HeroUINativeProvider>
  );
}

export default function Layout() {
  useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <GestureHandlerRootView style={styles.root}>
      <KeyboardProvider>
        <AppThemeProvider>
          <ThemedLayout />
        </AppThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
