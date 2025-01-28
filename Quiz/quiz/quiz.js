import { dataModule } from '../dataModule.js'
let manageData = dataModule();

function manageQuestion(qus,form){
    console.log("test");
    let questions = qus;
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
                user : manageData.getCurrentUser().userName,
                questions : res,
                score : total,
            }
            console.log(data,manageData.getCurrentUser());
            return data;
        }
    }
}

let forms;
let list = document.getElementById('from-list');
if(list){
    forms = manageQuestion(manageData.getAllQuiz(),list);
forms.create();
}

let answerForm = document.getElementById('ans-submit');
if(answerForm){
    answerForm.addEventListener("submit",function(e){
        e.preventDefault();
        forms.getResponse();
    });
}
