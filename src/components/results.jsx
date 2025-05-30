import secretPhoto from "../assets/secretPhoto.jpeg";


function Results({ questionBank, userAnswers, restartQuiz }) {



    function getScore() {
        let wrongAnswers = [null]
        let finalScore = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === questionBank[index].answer) {
                finalScore++
            
            }
        })
        return finalScore
    }

    function getWrongAnswers() {
    const wrongAnswers = [];
    userAnswers.forEach((answer, index) => {
        if (answer !== questionBank[index].answer) {
            wrongAnswers.push(index+1); // store index of wrong answer
        }
    });

    return wrongAnswers;
    }

    const score = getScore()
    const wrongAnswers = getWrongAnswers()

    let message = "Try again to get all the questions right and reveal the secret photo🤫!"

    if (score === questionBank.length) {
        message = "You got all questions right, good job! Here is the secret photo as promised😆:"
        wrongAnswers.push("none")
    }


    return (
        <div> 
            <h2> Quiz Completed </h2> 
            <p> Your Score: {score}/{questionBank.length} </p> 
            <div> Question(s) you got wrong: <ul> {wrongAnswers.map((wronganswer) => (<li> {wronganswer} </li>))} </ul> </div> 
            <p> {message} </p> 
            {score === questionBank.length && (<img src={secretPhoto} alt="Secret reward"  style={{
            display: "block",
            margin: "0 auto",
            width: '300px',
            height: 'auto',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            borderRadius: '8px',
            }}/>)}
            <button className="restart-button" onClick={restartQuiz}> Restart Quiz </button> 
        </div>
    );
}

export default Results;