import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../contexts/AuthContext";

/**
 * Buttons to test navigation to all pages
 */
export default function Index() {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Try to Access All Pages</Text>
      <Button title="Login" onPress={() => router.push("/(auth)/login")} />
      <Button
        title="Register"
        onPress={() => router.push("/(auth)/register")}
      />
      <Button
        title="Profile"
        onPress={() => router.push("/(main)/profile")}
        disabled={!user}
      />
      <Button
        disabled={!user}
        title="Dashboard"
        onPress={() => router.push("/(main)/dashboard")}
      />
      <Button
        disabled={!user}
        title="Settings"
        onPress={() => router.push("/(main)/settings")}
      />
      <Button
        title="Admin"
        onPress={() => router.push("/(main)/admin")}
        disabled={user?.role != "admin"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 20,
    backgroundColor: "#282c34",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#61dafb",
    fontWeight: "bold",
  },
});
