import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ text, id, onDelete }) => {
  const deleteItem = () => {
    onDelete(id);
  };
  return (
    <Pressable onPress={deleteItem}>
      <View style={styles.goalItem} key={id}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default GoalItem;
