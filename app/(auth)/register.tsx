import { StyleSheet, Text, View } from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Register Screen (Coming Soon!)</Text>
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
  },
});
