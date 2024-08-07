import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded, SignedIn, SignedOut } from '@clerk/clerk-expo'
import { Text } from "react-native";
import LoginScreen from "./../components/LoginScreen";
import * as SecureStore from "expo-secure-store";

const tokenCache = {
  getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return null;
    }
  },
};

export default function RootLayout() {
  // Ajouter une police
  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  })
  return ( 
    <ClerkProvider  tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Stack screenOptions={{
          headerShown:false //désactiver le header
        }}>
          <Stack.Screen name="(tabs)" /> {/* Ajouter les tabs */}
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  );
}
