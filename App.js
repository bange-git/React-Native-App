import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.goalContainer}>
        <TextInput style={styles.textInput}>Your Course Goals!</TextInput>
        <Button title="Add Goals" />
      </View>
      <View style={styles.goalList}>
        <Text>List of Goals ...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 20,
    alignItems: 'center',
    flex: 1
  },
  textInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 8,
    padding: 8,
  },

  goalList : {
    marginTop: 50,
    flex: 4
  }
});
