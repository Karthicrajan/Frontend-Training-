// import { dataModule } from './dataModule.js'
let list = document.getElementById('from-list');
let manageData = dataModule();
let validater = validation();
 function dataModule(){
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
    
    let answers = new Map;
    let currentUserEmail = '';
    let currentUserName = '';
    return {
        createUser(email,name){
           users.set(email,{user : email,userName : name,questions: [],score : 0})
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
        },
        updateAnswer(data){
            // if(users.has(data.user) && users[data.user].score < data.score){
            //     users.set(data.user,{user : data.user,userName : data.name,question : data.question,score : data.score});
            //     console.log(users);
            // }
        },
        getQuestionCount(){
            return quiz.length;
        }
    }
}
function manageQuestion(qus,form){
    console.log("test");
    let questions = qus;
    let result = document.getElementById('result-con');
    return{
        create(){
            console.log("qus");
             questions.forEach((item,index) => {
                let div = document.createElement('div');

                div.innerHTML = `<div class="quiz-card">
                                <h5>${item.question}</h5>
                                <div class="option">`
                            item.options.forEach((op,oi) =>{
                                div.innerHTML += `<input type="radio" id="q${index}-${oi}" name="${index}" />
                                                 <label for="q${index}-${oi}">"${op.answer}"</label><br>`
                            })

                            div.innerHTML += `</div></div>`
                             
                    form.appendChild(div);
             }); 
            
        },
        getResponse(){
            let total = 0;
            let res = questions.map((data,index) =>{
                let correct = 0;
                let answer = "";
                data.options.forEach((item,cind) =>{
                        if(item.isCorrect){
                            correct = cind;
                            answer = item.answer;
                        }
                })
                let selectedAnswer = document.querySelector(`input[type="radio"][name="${index}"]:checked`);
                console.log("called");
                let selectedind = parseInt(selectedAnswer.id.split('-')[1]);
                console.log(selectedind);
                    
                let temp = {
                    question : data.question,
                    selected : data.options[selectedind].answer,
                    correct : data.options[correct].answer,
                    point : correct === selectedind ? 1 : 0
                }
                if(correct === selectedind){
                    total++;
                }
              return temp;
            })

            let data = {
                user : manageData.getCurrentUser().userEmail,
                userName : manageData.getCurrentUser().userName,
                questions : res,
                score : total,
            }
            console.log(data,manageData.getCurrentUser());
            return data;
        },
        displayResult(data){
            let score = document.getElementById('score');
           

            data.questions.forEach((item) =>{
                let div = document.createElement('div');
                div.innerHTML = `<div class="quiz-card">
                                <h5>${item.question}</h5>
                                <div class="option">
                                <p class="correct">correct Ansewer :  ${item.correct}</p>
                                <p>Selected Ansewer :  ${item.selected}</p>`


                            div.innerHTML += `</div></div>`

                result.appendChild(div);
            })
            score.innerHTML = "Score :  " + data.score + "/" + manageData.getQuestionCount();
        }
    }
}

let forms;
if(list){
    forms = manageQuestion(manageData.getAllQuiz(),list);
forms.create();
}


validater.validate(null,"karthicrajan",'^[a-z]+$');

let loginpage = document.getElementById('login-page');
let quizpage = document.getElementById('quiz-page');
let resultpage = document.getElementById('result-page');
let nav = document.getElementById('page-nav');


let loginForm = document.getElementById('login-form');
if(loginForm){
    loginForm.addEventListener("submit",function(e){
        e.preventDefault();
        let emailfield = document.getElementById("email");
        let namefield = document.getElementById("name");
        let welcome = document.getElementById("Welcome");

       
         
        console.log(emailfield);
        validater.clearError();
        let validEmail = validater.validate(emailfield,emailfield.value,'^[a-z0-9]+@[a-zA-Z0-9-]+.[a-z]{1,3}$',"Enter Valid Email");
        let validname = validater.validate(namefield,namefield.value,'^[a-zA-Z \s]+$',"Enter valid name");
        console.log(validEmail,validname);
    
        if(!validEmail || !validname){
            return;
        }
        manageData.createUser(emailfield.value,namefield.value);
        console.log(manageData.getAllUser());
        loginpage.classList.add('hide');
        quizpage.classList.remove('hide');
        nav.classList.remove('hide');
        welcome.innerText += " " + manageData.getCurrentUser().userName;
        // window.location.href = "http://127.0.0.1:5500/Quiz/quiz/quiz.html"
    })
}


let answerForm = document.getElementById('ans-submit');
if(answerForm){
    answerForm.addEventListener("submit",function(e){
        e.preventDefault();
        loginpage.classList.add('hide');
        quizpage.classList.add('hide');
        resultpage.classList.remove('hide');
        let res =  forms.getResponse();
        forms.displayResult(res);
        manageData.updateAnswer(res);
        console.log(res);
    });
}



let dashboard = document.getElementById('dashboard');
let quiz = document.getElementById('QuizPage');
let result = document.getElementById('resultPage');
let logout = document.getElementById('logout');

result.addEventListener('click',function(){
    quizpage.classList.add('hide');
    resultpage.classList.remove('hide');
})

quiz.addEventListener('click',function(){
    quizpage.classList.remove('hide');
    resultpage.classList.add('hide');
})

logout.addEventListener('click',function(){
    quizpage.classList.add('hide');
    resultpage.classList.add('hide');
    loginpage.classList.remove('hide');
    
})

function validation(){

    return{
        validate(element,value,regx,message){
            let pattern = new RegExp(regx);
            let res = pattern.test(value);
            if(!res){
                console.log("error");
                this.appendErrorMessage(element,message);
                return false;
            }

            return true;
        },
        appendErrorMessage(element,msg){
            let errorEl = element.closest('.fld-set').children[2];
            errorEl.classList.remove('hide');
            errorEl.innerHTML = msg;
            console.log(errorEl);

        },
            clearError(){
                let allfield = document.querySelectorAll('.error');
                console.log(allfield);
                for(let i of allfield){
                    i.classList.add('hide');
                }
            }
    }
}

