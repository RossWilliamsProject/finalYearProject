import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { QuestionsList } from "./subjectScreens/QuestionsList";
import {v4 as uuidv4} from "uuid";

export default function LeaderboardScreen({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setClicked(true);
  };

  const handleNextQuestion = () => {
    setClicked(false);
    if (currentQuestion < QuestionsList.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
    else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          your score: {score}/{QuestionsList.length}
        </div>
      ) : (
        <div>
          <div>
            Question {currentQuestion + 1} of {QuestionsList.length}
          </div><div>
            {QuestionsList[currentQuestion].question}
          </div><div>
            {QuestionsList[currentQuestion].answersList.map((answerOption) => (
              <li key={uuidv4()}>
                <button onClick={handleCorrectAnswer}>{answerOption.answer}</button>
              </li>
            ))}
          </div><button onClick={handleNextQuestion}>next</button>
        </div>
      )}
    </div>
  )
}

const Styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#D9E3E5"
  }
})