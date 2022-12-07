import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalsHandler = (enteredGoalsText) => {
    if (enteredGoalsText == "" || null) return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalsText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput onGoalAdd={addGoalsHandler} />
      <View style={styles.goalList}>
        <Text style={{ marginBottom: 4 }}>List of Goals ...</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDelete={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
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
