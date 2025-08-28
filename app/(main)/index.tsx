import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  function getOut() {
    router.replace("..");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You have no right to be here</Text>
      <Button title="Get out !" onPress={getOut}></Button>
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
