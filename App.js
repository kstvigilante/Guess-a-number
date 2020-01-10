import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/header";
import StartGame from "./screens/start-game";
import GameScreen from "./screens/game-screen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame startGameHandler={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
