export function dataModule(){
    let users = new Map;
    let quiz = [{
        question: "Which method is used to remove the last element from an array?",
        options: [
          { answer: "pop()", isCorrect: true },
          { answer: "shift()", isCorrect: false },
          { answer: "push()", isCorrect: false },
          { answer: "unshift()", isCorrect: false }
        ]
      },
        {
          question: "Which method is used to join all elements of an array into a string?",
          options: [
            { answer: "join()", isCorrect: true },
            { answer: "concat()", isCorrect: false },
            { answer: "slice()", isCorrect: false },
            { answer: "splice()", isCorrect: false }
          ]
        },
        {
        question: "Which method creates a new array with all elements that pass a test?",
        options: [
          { answer: "filter()", isCorrect: true },
          { answer: "map()", isCorrect: false },
          { answer: "reduce()", isCorrect: false },
          { answer: "forEach()", isCorrect: false }
        ]
      },
        {
          question: "Which of the following is not a valid JavaScript data type?",
          options: [
            { answer: "Number", isCorrect: false },
            { answer: "String", isCorrect: false },
            { answer: "Float", isCorrect: true },
            { answer: "Boolean", isCorrect: false }
          ]
        },
        {
          question: "What will the following code output: `console.log(3 + '3')`?",
          options: [
            { answer: "33", isCorrect: true },
            { answer: "6", isCorrect: false },
            { answer: "NaN", isCorrect: false },
            { answer: "Error", isCorrect: false }
          ]
        }
      
      ];
    
    let answers = [];
    let currentUserEmail = '';
    let currentUserName = '';
    return {
        createUser(name,email){
           users.set(email,{name : name,email : email,score : 0})
            console.log(users);
            currentUserEmail = email;
            currentUserName = name;
        },
        getAllUser(){
            return users;
        },
        getAllQuiz(){
            return quiz;
        },
        getCurrentUser(){
            return {
                userEmail : currentUserEmail,
                userName : currentUserName
            }
        }
    }
}