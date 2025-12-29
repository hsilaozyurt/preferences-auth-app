import { View, Text } from "react-native";

export default function HomeScreen({ route }) {
  const { username } = route.params;
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 20 }}>Welcome, {username}</Text>
    </View>
  );
}
