// screens/SettingsScreen.js
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useThemeContext } from "../context/ThemeContext";

export default function SettingsScreen() {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#0B0F14" : "#FFFFFF" }]}>
      <Text style={[styles.title, { color: isDark ? "#FFFFFF" : "#111827" }]}>Settings</Text>
      <Text style={{ color: isDark ? "#D1D5DB" : "#374151" }}>
        Current theme: {theme}
      </Text>

      <Pressable
        onPress={toggleTheme}
        style={[
          styles.button,
          { backgroundColor: isDark ? "#111827" : "#F3F4F6", borderColor: isDark ? "#374151" : "#D1D5DB" },
        ]}
      >
        <Text style={{ color: isDark ? "#FFFFFF" : "#111827", fontWeight: "600" }}>
          Toggle Theme
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12 },
  title: { fontSize: 20, fontWeight: "700" },
  button: { padding: 12, borderWidth: 1, borderRadius: 10, alignItems: "center" },
});
