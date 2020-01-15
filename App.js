import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/header";
import StartGame from "./screens/start-game";
import GameScreen from "./screens/game-screen";
import GameOver from "./screens/game-over";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setRounds(0);
  };

  const gameOverHandler = numOfRounds => {
    setRounds(numOfRounds);
  };

  let content = <StartGame startGameHandler={startGameHandler} />;

  if (userNumber && rounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (rounds > 0) {
    content = <GameOver />;
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
