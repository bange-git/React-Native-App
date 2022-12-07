import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
export default function App() {
  const [enteredGoalsText, setEnteredGoalsText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalsInputHandler = (enteredText) => {
    setEnteredGoalsText(enteredText);
  };

  const addGoalsHandler = () => {
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      enteredGoalsText,
    ]);
    console.log(courseGoals);
    //setEnteredGoalsText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.goalContainer}>
        <TextInput style={styles.textInput} onChangeText={goalsInputHandler}>
          Your Course Goals!
        </TextInput>
        <Button title="Add Goals" onPress={addGoalsHandler} />
      </View>
      <View style={styles.goalList}>
        <Text style={{ marginBottom: 4 }}>List of Goals ...</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem} key={itemData.index}>
                <Text style={styles.goalText}>{itemData.item}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 20,
    alignItems: "center",
    flex: 1,
  },
  textInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 8,
    padding: 8,
  },

  goalList: {
    marginTop: 50,
    flex: 4,
  },

  goalItem: {
    borderRadius: 6,
    margin: 8,
    padding: 8,
    backgroundColor: "purple",
  },

  goalText: {
    color: "#fff",
  },
});
