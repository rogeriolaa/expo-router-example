import { useRouter } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const auth = useAuth();
  const router = useRouter();
  function login() {
    auth.login();
    Alert.alert("Success", "Logged in  as Tony");
    setTimeout(() => router.navigate(".."), 500);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 Login Screen</Text>
      <Button title="Login as Tony" onPress={login} color="#61dafb" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282c34",
  },
  title: {
    fontSize: 24,
    color: "#61dafb",
    fontWeight: "bold",
    marginBottom: 20,
  },
});
