import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Text from "./src/components/text/Text";
import { colors } from "./src/themes/colors";
import { spacing } from "./src/themes/spacing";
import { typography } from "./src/themes/typography";

export default function App() {
  const [loaded] = useFonts({
    AntonioMedium: require("./assets/fonts/Antonio-Medium.ttf"),
    spartanRegular: require("./assets/fonts/Spartan-Regular.ttf"),
    spartanBold: require("./assets/fonts/Spartan-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text preset="h1">Planet</Text>
      <Text style={{ marginTop: spacing[4] }}>Planet 2</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
  },
});
