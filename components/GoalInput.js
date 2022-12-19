import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
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
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={goalsInputHandler}
          placeholder="Your Course Goals!"
          value={enteredGoalsText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goals"
              onPress={addGoalsHandler}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
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
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#311b6b",
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    padding: 8,
    color: "#120438",
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
