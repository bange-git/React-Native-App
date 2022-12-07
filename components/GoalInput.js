import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
const GoalInput = (props) => {
  const [enteredGoalsText, setEnteredGoalsText] = useState("");

  const goalsInputHandler = (enteredText) => {
    setEnteredGoalsText(enteredText);
  };

  const addGoalsHandler = () => {
    props.onGoalAdd(enteredGoalsText);
    setEnteredGoalsText("");
  };
  return (
    <View style={styles.goalContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={goalsInputHandler}
        placeholder="Your Course Goals!"
        value={enteredGoalsText}
      />

      <Button title="Add Goals" onPress={addGoalsHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
