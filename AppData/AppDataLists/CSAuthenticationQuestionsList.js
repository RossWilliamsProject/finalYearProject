export const QuestionsList = [
  {
    question: " To allow some access to an asset we must ensure which of the following:",
    answersList: [
      { answer: "They are permitted to access that asset  ", isCorrect: false },
      { answer: "They are who they say they are", isCorrect: false },
      { answer: "Both of the above", isCorrect: true },
    ]
  },
  {
    question: "Complete the sentence: “Using ___ would be an example of secret knowledge.” ",
    answersList: [
      { answer: "Face recognition ", isCorrect: false },
      { answer: "A PIN", isCorrect: true },
      { answer: "A smart card ", isCorrect: false },
      { answer: "A smart watch", isCorrect: false },
    ]
  },
  {
    question: "Complete the sentence: “____ is an example of using authentication based upon a behaviour biometric”",
    answersList: [
      { answer: "Face recognition", isCorrect: false },
      { answer: "A PIN", isCorrect: false },
      { answer: "Voice verification", isCorrect: true },
      { answer: "A smart watch ", isCorrect: true },
    ]
  },
  {
    question: "Which of the following are recognised categories of user authentication approaches?",
    answersList: [
      { answer: "Something the user is, something the user knows, and somewhere the user is", isCorrect: false },
      { answer: "Something the user has, something the user is, and something the user knows", isCorrect: true },
      { answer: "Something the user is, something the user likes, and someone the user knows", isCorrect: false },
      { answer: "Passwords, Fingerprints, Smart Cards", isCorrect: false },
    ]
  },
  {
    question: "Which of the following statements are true?",
    answersList: [
      { answer: "Length matters more than complexity ", isCorrect: true },
      { answer: "The number 1 should always be added to the end of the password", isCorrect: false },
      { answer: "Passwords should automatically expire after a set period of time", isCorrect: false },
      { answer: "Password hints should be offered", isCorrect: false },
    ]
  },
  {
    question: "Which of the following is a problem with passwords",
    answersList: [
      { answer: "People forget them ", isCorrect: false },
      { answer: "They can be guessed ", isCorrect: false },
      { answer: "Spoofing and Phishing", isCorrect: false },
      { answer: "Compromised password files ", isCorrect: false },
      { answer: "All of the above ", isCorrect: true },
    ]
  },
  {
    question: "Where does Linux store passwords?",
    answersList: [
      { answer: "/etc/shadow", isCorrect: true },
      { answer: "/user/file/passwrd", isCorrect: false },
      { answer: "..\system32\config\SAM", isCorrect: false },
    ]
  },
  {
    question: "Where does Windows store passwords? ",
    answersList: [
      { answer: "/etc/shadow", isCorrect: false },
      { answer: "/user/file/passwrd", isCorrect: false },
      { answer: "..\system32\config\SAM", isCorrect: true },
    ]
  },
  {
    question: "Where is the salt stored in relation to the password?",
    answersList: [
      { answer: "unencrypted with the hash", isCorrect: true },
      { answer: "encrypted with the hash", isCorrect: false },
      { answer: "unencrypted separate from the hash", isCorrect: false },
      { answer: "encrypted separate from the hash", isCorrect: false },
    ]
  },
  {
    question: "Is a dictionary attack an Offline or Online password cracking method?",
    answersList: [
      { answer: "Online", isCorrect: true },
      { answer: "Offline", isCorrect: false },
    ]
  },
  {
    question: "Is a social engineering an Offline or Online password cracking method?",
    answersList: [
      { answer: "Online", isCorrect: false },
      { answer: "Offline", isCorrect: true },
    ]
  },
];
