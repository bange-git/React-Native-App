import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
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
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.goalContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalsInputHandler}
          placeholder="Your Course Goals!"
          value={enteredGoalsText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goals" onPress={addGoalsHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  goalContainer: {
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 20,
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 16,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});
