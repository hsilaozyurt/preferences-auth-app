import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (!username.trim()) return;
    navigation.replace("Home", { username });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24, gap: 12 },
  title: { fontSize: 28, fontWeight: "700" },
  input: { borderWidth: 1, borderRadius: 10, padding: 12 },
  button: { padding: 12, borderRadius: 10, alignItems: "center", borderWidth: 1 },
  buttonText: { fontSize: 16, fontWeight: "600" },
});
