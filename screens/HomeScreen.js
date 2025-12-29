import { View, Text, Pressable } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth();

  return (
    <View style={{ padding: 24, gap: 12 }}>
      <Text style={{ fontSize: 20 }}>
        Welcome, {user?.username ?? "Guest"}
      </Text>

      <Pressable
        style={{ padding: 12, borderWidth: 1, borderRadius: 10, alignItems: "center" }}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text>Go to Settings</Text>
      </Pressable>

      <Pressable
        style={{ padding: 12, borderWidth: 1, borderRadius: 10, alignItems: "center" }}
        onPress={() => {
          logout();
          navigation.replace("Login");
        }}
      >
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
