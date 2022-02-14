import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Container, ImageBackground } from 'react-native';
import { quizData } from "./subjectScreens/SERequirementsData";

export default function QuizScreen({ navigation }) {
    return (
        <View>
            <MainQuiz />
        </View>
    );
};

class MainQuiz extends React.Component {
    state = {
        currentQuestion: 0,
        myAnswer: null,
        options: [],
        score: 0,
        disabled: true,
        isEnd: false
    };

    loadQuizData = () => {
        // console.log(quizData[0].question)
        this.setState(() => {
            return {
                questions: quizData[this.state.currentQuestion].question,
                answer: quizData[this.state.currentQuestion].answer,
                options: quizData[this.state.currentQuestion].options
            };
        });
    };

    componentDidMount() {
        this.loadQuizData();
    }

    nextQuestionHandler = () => {
        // console.log('test')
        const { myAnswer, answer, score } = this.state;
        if (myAnswer == answer) {
            this.setState({
                score: score + 1
            });
        }
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    disabled: true,
                    questions: quizData[this.state.currentQuestion].question,
                    options: quizData[this.state.currentQuestion].options,
                    answer: quizData[this.state.currentQuestion].answer
                };
            });
        }
    }

    //check answer
    checkAnswer = answer => {
        this.setState({
            myAnswer: answer,
            disabled: false
        });
    };

    finishHandler = () => {
        if (this.state.currentQuestion === quizData.length - 1) {
            this.setState({
                isEnd: true
            });
        }
        if (this.state.myAnswer === this.state.answer) {
            this.setState({
                score: this.state.score + 1
            });
        }
    };
    render() {
        const { options, myAnswer, currentQuestion, isEnd } = this.state;

        if (isEnd) {
            return (
                <div className="result">
                    <h3>Game Over your Final score is {this.state.score} points </h3>
                    <div>
                        The correct answer's for the questions was
                        <ul>
                            {quizData.map((item, index) => (
                                <li key={index}>
                                    {item.answer}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="App">

                    <h1>{this.state.questions} </h1>

                    <span>{`Questions ${currentQuestion}  out of ${quizData.length -
                        1} remaining `}</span>



                    {options.map(option => (
                        <p
                            key={option.id}
                            onClick={() => this.checkAnswer(option)}
                            style={styles.button}
                        >
                            {option}
                        </p>
                    ))}

                    {currentQuestion < quizData.length - 1 && (
                        <button
                            disabled={this.state.disabled}
                            onClick={this.nextQuestionHandler}
                        >
                            Next
                        </button>
                    )
                    }


                    {/* //adding a finish button */}
                    {currentQuestion === quizData.length - 1 && (
                        <button onClick={this.finishHandler}>
                            Finish
                        </button>
                    )}


                </div>
            );
        }
    }
}



const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        width: 200,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    space: {
        width: 20,
        height: 10,
    },
    view: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D9E3E5"
    },
});