import { StyleSheet, Text, View } from "react-native";

export default function Admin() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👑 Admin Screen - You hold the keys!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
  text: { color: "#61dafb", fontSize: 24, fontWeight: "bold" },
});
