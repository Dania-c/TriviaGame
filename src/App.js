import { useEffect, useState } from "react";
import Questionaire from "./components/Questionaire";

const API_URL = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
function App() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false)

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {

        // setQuestions(data.results);
        const questions = data.results.map((question) => ({
          ...question, answers: [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
        })

        )
        setQuestions(questions);

      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswers) //prevent double answers
    {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }
    // const newIndex = currentIndex + 1
    // setCurrentIndex(newIndex);
    setShowAnswers(true);

  }

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  }

  return questions.length > 0 ?
    (

      <div className="container">
        {currentIndex >= questions.length ? (<h1 className="text-3xl text-white font-bold">Your score is {score}</h1>)
          : (
            <Questionaire
              data={questions[currentIndex]}
              showAnswers={showAnswers}
              handleAnswer={handleAnswer}
              handleNextQuestion={handleNextQuestion} />
          )} </div>
    ) :
    (<h3 className="text-2xl text-white font-bold"> Loading...</h3>)




}


export default App;
