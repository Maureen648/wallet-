import { Stack } from "expo-router";
import SafeScreen from "../components/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import Constants from "expo-constants";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={Constants.expoConfig?.extra?.clerkPublishableKey} tokenCache={tokenCache}>
      <SafeAreaProvider>
        <SafeScreen>
          <Stack screenOptions={{ headerShown: false }} initialRouteName="(root)">
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(root)" options={{ headerShown: false }} />
          </Stack>
        </SafeScreen>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}