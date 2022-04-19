//imports
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { QuestionsList } from "../../AppData/AppDataLists/CSFoundationsQuestionsList";
import { v4 as uuidv4 } from "uuid";
import { useNavigation } from '@react-navigation/native';

//displays and calculates quizzes and results based on questions list stored in appdata file. 
//also responsible for assigning new badges if needed
export default function CSFoundationsQuizScreen({ sessionScore, setSessionScore, setShowBadge01, showBadge01 }) {
    const navigation = useNavigation();

     //set states to track in order to change UI based on states below
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [showScore, setShowScore] = useState(false);
    const [correct, setCorrect] = useState(false);

    // function used to handle updating the sessionScore 
    // this is added to the previous session score and is dislayed on leaderboard
    const handleUpdateScore = () => {
        console.log("points awarded: " + Math.round(((score + 1) / (QuestionsList.length)) * 100))
        setSessionScore(sessionScore + Math.round(((score + 1) / (QuestionsList.length)) * 100));
    }

    // Function is used to handle moving onto the next question 
    // this invloves updating the quiz score, updating the total questions answered, 
    // and then finally iterating to the next question (which will update the UI due to state change)
    const handleNextQuestion = () => {
        if (correct == true) {
            setClicked(false);
            setCorrect(false);
            if (currentQuestion < QuestionsList.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            }
            else {
                setScore(score + 1);
                setShowScore(true);
                handleUpdateScore();
            }
            setScore(score + 1);
        }
        else {
            setClicked(false);
            if (currentQuestion < QuestionsList.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            }
            else {
                setShowScore(true);
                handleUpdateScore();
            }
        }
    };
    
    //conditional return is based around showScore state 
    //if quiz is completed, the result code is rendered, if not, the quiz code is rendered.
    //displaying badges works in a similar way, conditional rendering based on the "Showbadge01" state
    //which is passed as an argument to this screen from main. 
    return (
        <View style={Styles.view}>
            {showScore ? (
                <View>
                    <Text style={Styles.text}>Quiz Score:</Text>
                    <TouchableOpacity
                        style={Styles.scoreOpacity}
                        disabled={true}
                    >
                        <Text style={Styles.text}>
                            {score}/{QuestionsList.length}
                        </Text>
                    </TouchableOpacity>

                    <View style={Styles.space} />

                    <Text style={Styles.text}>Points Earned:</Text>
                    <TouchableOpacity
                        style={Styles.scoreOpacity}
                        disabled={true}
                    >
                        <Text style={Styles.text}>
                            {Math.round(score / QuestionsList.length * 100)}
                        </Text>
                    </TouchableOpacity>

                    <View style={Styles.space} />

                    <Text style={Styles.text}>Badges Earned:</Text>
                    <TouchableOpacity
                        style={Styles.profileContainer}
                        disabled={true}>
                        <View style={Styles.space} />
                        <Text style={Styles.textBold}>
                            Badges:
                        </Text>
                        <View>
                            <Image
                                source={require('C:/Users/epicr/OneDrive/Documents/GitHub/finalYearProject/assets/award1.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    <View style={Styles.space} />

                    <TouchableOpacity
                        style={Styles.scoreOpacity}
                        onPress={() => { setShowBadge01(true), navigation.navigate("leaderboard") }}>
                        <Text style={Styles.textBold}>
                            View Leaderboard
                        </Text>

                    </TouchableOpacity>

                    <View style={Styles.space} />

                    <TouchableOpacity
                        style={Styles.scoreOpacity}
                        onPress={() => { setShowBadge01(true), navigation.navigate("SubjectSelectionCS") }}>
                        <Text style={Styles.textBold}>
                            Return to Course
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={Styles.TextView}>
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
                                onPress={
                                    answerOption.isCorrect ? () => { setCorrect(true), setClicked(true) }
                                        : () => { setCorrect(false), setClicked(true) }
                                }>
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
                        onPress={handleNextQuestion}
                        disabled={clicked ? false : true}>
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
    TextView: {
        width: 355
    },
    textBold: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    profileContainer: {
        backgroundColor: 'white',
        width: 375,
        height: 200,
        padding: 10,
        borderRadius: 20,
    },
    button: {
        backgroundColor: 'white',
        width: 355,
        height: 60,
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        marginVertical: 5,
    },
    scoreOpacity: {
        backgroundColor: 'white',
        width: 375,
        height: 60,
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        marginVertical: 5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 15
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
        height: 8,
    },
})