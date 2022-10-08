import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { store } from "./src/store";
import { extendTheme, NativeBaseProvider } from "native-base";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const newColorTheme = {
    principal: {
      900: "#ff6600",
      800: "#ff5500",
      700: "#ff3300",
    },
  };
  const theme = extendTheme({ colors: newColorTheme });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PaperProvider>
          <NativeBaseProvider theme={theme}>
            <SafeAreaProvider>
              <Navigation colorScheme={undefined} />
              <StatusBar style="light" />
            </SafeAreaProvider>
          </NativeBaseProvider>
        </PaperProvider>
      </Provider>
    );
  }
}
