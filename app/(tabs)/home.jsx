import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Hello 👋</Text>
      <Text style={styles.subtitle}>Here’s what’s on your plate today</Text>

      <View style={styles.actions}>
        <Link href="/tasks" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+ Add Task</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/notes" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+ Add Note</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  greeting: { fontSize: 28, fontWeight: "600", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#555", marginBottom: 20 },
  actions: { flexDirection: "row", gap: 10 },
  button: {
    flex: 1,
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600" },
});
