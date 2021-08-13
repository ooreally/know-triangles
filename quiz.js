const correctAns = ["option1", "option2", "option2", "option1", "option2"]

const formQuiz = document.querySelector("#quiz");
const submitForm = document.querySelector("#submit_btn");

const scoreDiv=document.querySelector("#score");

const calculateScore = () => {
    let score=0;
    let index=0;
    const answer= new FormData(formQuiz);

    for(let ans of answer.values())
    {
        
        if(ans === correctAns[index])
        {
            console.log(ans);
            score+=1;
        }
        index+=1;
    }
    
    return score;
}

const formSubmitHandler = (event) => {
    event.preventDefault();
 
    const score = calculateScore();
    
    scoreDiv.style.display="block";
    
    scoreDiv.innerText=score;
    submitForm.style.display="none";
}

submitForm.addEventListener("click", (event) => formSubmitHandler(event));

