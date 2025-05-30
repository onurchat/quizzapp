import { useState } from "react";
import Results from "./results";

function Quiz () {
    const questionBank = [
        {
            question: "Where is Ozan from? ❤️☀️💚",
            options: ["Kurdistan", "Tuzla", "Ankara", "Nigeria"],
            answer: "Kurdistan",
        },
        {
            question: "What is Ozan's LOL rank? (idk just choose dia)🥇💎",
            options: ["Gold", "Platinum", "Emerald", "Diamond"],
            answer: "Diamond",
        },
        {
            question: "Where does Ozan live?🏠",
            options: ["Tarnlaan 9", "Tarnlaan 10", "Tarnlaan 11", "Tarnlaan 12"],
            answer: "Tarnlaan 10",
        },
        {
            question: "Where did Ozan work at?💼📊",
            options: ["Redlight District", "McDonalds", "Strip Club", "All of the above"],
            answer: "All of the above",
        },
        {
            question: "Which highschool did Ozan go to in Istanbul?🎒📚",
            options: ["FMV Erenköy Işık Lisesi", "Robert College", "Notre Dame de Sion High School", "Üsküdar American Academy"],
            answer: "FMV Erenköy Işık Lisesi",
        },
        {
            question: "What is Ozan's favorite drink?🍹🥂",
            options: ["Vodka", "Cola", "Fanta", "Water"],
            answer: "Water",
        },
        {
            question: "What is Ozan's skin color?👇🏻",
            options: ["🖐🏻", "🖐🏽", "🖐🏾", "🖐🏿"],
            answer: "🖐🏿",
        },
        {
            question: "What is Ozan's favorite food?😋",
            options: ["Hamburger", "Rhinoceros testicles", "Pizza", "Pasta"],
            answer: "Rhinoceros testicles",
        },
        {
            question: "What is Ozan most scared of?😨",
            options: ["Monsters", "Dinasours", "Talking to girls", "Dying"],
            answer: "Talking to girls",
        },
        {
            question: "What is Ozan's religion?🛐",
            options: ["Islam Sunni", "Christian Roman Catholic", "Hindu", "Judaism"],
            answer: "Islam Sunni",
        },

        
        



    ];

    const initialAnswers = [null, null, null]


    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    const [currentQuestion, setCurrentQuestion] =useState(0)
    const [isQuizFinished, setIsQuizFinished] =useState(false);

    const selectedAnswer = userAnswers[currentQuestion]; //null, option

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    }

    function goToNext() {
        if (currentQuestion === questionBank.length - 1) {
            setIsQuizFinished(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function goToPrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

        function restartQuiz() {
        setUserAnswers(initialAnswers)
        setCurrentQuestion(0)
        setIsQuizFinished(false)
    }




    if (isQuizFinished) {
        return <Results userAnswers={userAnswers} questionBank={questionBank} restartQuiz={restartQuiz}/>
    }

    return <div> 
        
        <h2> Question {currentQuestion + 1} </h2> 
        <p className="question"> {questionBank[currentQuestion].question} </p>

        {questionBank[currentQuestion].options.map((option) => (
            <button className={"option" + (selectedAnswer=== option ? " selected": "")} onClick={() => handleSelectOption(option)}> 
                {option}
            </button>
        ))}


        <div className="nav-buttons"> 
            <button onClick={goToPrev} disabled={currentQuestion===0} > Previous </button>
            <button onClick={goToNext} disabled={!selectedAnswer}> 
                {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}

                
            </button>
        </div>


    </div>

}

export default Quiz;
