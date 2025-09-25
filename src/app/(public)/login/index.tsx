import { AppText } from "@/src/components/app-text";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useFocusEffect, useRouter } from "expo-router";
import { TextField, useTheme } from "heroui-native";
import { useCallback, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BG from '../../../../assets/images/paywall-showcase-bg.jpeg';
export default function Login() {
  const { colors, isDark } = useTheme();
  const insets = useSafeAreaInsets();

  const router = useRouter()
  const { theme, setTheme } = useTheme();

  const prevTheme = useRef(theme);

  useFocusEffect(
    useCallback(() => {
      prevTheme.current = theme;
      setTheme('dark');
      return () => {
        setTheme(prevTheme.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  return (
    <View
      className="flex-1   px-6"
      style={{ paddingTop: insets.top + 12, paddingBottom: insets.bottom + 12 }}
    >
      <Animated.View
        style={StyleSheet.absoluteFill}
        entering={FadeInUp.duration(1000)}
      >
        <Image source={BG} style={StyleSheet.absoluteFill} blurRadius={50} />
      </Animated.View>
      <Animated.View entering={FadeIn.duration(1000)} >
        <View>


          <Text className="text-3xl dark:text-black text-foreground font-semibold  self-center">
            Næncy
          </Text>
        </View>
        <AppText className="text-sm text-default font-medium text-center tracking-wider uppercase mt-3">
          Control your finance
        </AppText>
      </Animated.View>
      <View className=" flex-auto justify-center">
        <TextField isRequired>
          <TextField.Label>Email</TextField.Label>
          <TextField.Input
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </TextField>

        <TextField isRequired>
          <TextField.Label>Password</TextField.Label>
          <TextField.Input placeholder="Enter your password" secureTextEntry>
            <TextField.InputStartContent className="pointer-events-none">
              <Ionicons
                name="lock-closed-outline"
                size={16}
                color={colors.mutedForeground}
              />
            </TextField.InputStartContent>
            <TextField.InputEndContent className="pointer-events-none">
              <Ionicons
                name="eye-outline"
                size={16}
                color={colors.mutedForeground}
              />
            </TextField.InputEndContent>
          </TextField.Input>
        </TextField>
      </View>
    </View>
  )
}