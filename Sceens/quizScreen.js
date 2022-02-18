import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { QuestionsList } from "./subjectScreens/QuestionsList";
import { v4 as uuidv4 } from "uuid";

export default function QuizScreen({ navigation }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [showScore, setShowScore] = useState(false);
    const [correct, setCorrect] = useState(false);

    const handleCorrectAnswer = (isCorrect) => {
        if (isCorrect) {
            setCorrect(true);
        }
        setClicked(true);
    };

    const handleNextQuestion = () => {
        if (correct) {
            setClicked(false);
            setCorrect(false);
            if (currentQuestion < QuestionsList.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setScore(score + 1);
            }
            else {
                setScore(score + 1);
                setShowScore(true);
            }
        }
        else {
            setClicked(false);
            setCorrect(false);
            if (currentQuestion < QuestionsList.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            }
            else {
                setShowScore(true);
            }
        }
    };

    return (
        <View style={Styles.view}>
            {showScore ? (
                <View>
                    <Text style={Styles.text}>your score: {score}/{QuestionsList.length}</Text>
                </View>
            ) : (
                <View>
                    <View>
                        <Text style={Styles.text}>Question {currentQuestion + 1} of {QuestionsList.length}</Text>
                    </View>
                    <View>
                        <View style={Styles.space} />
                        <Text style={Styles.text} >{QuestionsList[currentQuestion].question}</Text>
                    </View>
                    <View>

                        <View style={Styles.space} />
                        <View style={Styles.space} />

                        {QuestionsList[currentQuestion].answersList.map((answerOption) => (
                            <TouchableOpacity
                                style={clicked && answerOption.isCorrect ? Styles.correctButton : Styles.button}
                                key={uuidv4()}
                                onPress={handleCorrectAnswer}>
                                <Text style={Styles.text}>
                                    {answerOption.answer}
                                </Text>
                            </TouchableOpacity>
                        ))}

                        <View style={Styles.space} />
                        <View style={Styles.space} />
                    </View>

                    <TouchableOpacity
                        style={Styles.AnswerButton}
                        onPress={handleNextQuestion}>
                        <Text style={Styles.text}>
                            Next Question
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

const Styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#D9E3E5"
    },
    button: {
        backgroundColor: 'white',
        width: 375,
        height: 60,
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        marginVertical: 5,
    },
    correctButton: {
        backgroundColor: 'green',
        width: 375,
        height: 60,
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        marginVertical: 5,
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    AnswerButton: {
        backgroundColor: 'grey',
        width: 200,
        height: 60,
        padding: 10,
        borderRadius: 20,
        flexDirection: 'row',
        position: 'relative',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    space: {
        width: 20,
        height: 10,
    },
})