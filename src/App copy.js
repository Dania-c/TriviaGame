import { useEffect, useState } from "react";
import Questionaire from "./components/Questionaire";

const API_URL = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
function xApp() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [gameEnded, setgameEnded] = useState(false)
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setQuestions(data.results);
        console.log("q:", questions);
        // setCurrentIndex(data.results[0])
      })
  }, []);

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex);
    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }

    if (newIndex >= questions.length) {
      setgameEnded(true);
    }

  }

  return gameEnded ? (<h1 className="text-3xl text-white font-bold">Your score was {score}</h1>) : (
    <>


      {questions.length > 0 ?
        (

          <div className="container">
            <Questionaire data={questions[currentIndex]} handleAnswer={handleAnswer} />
          </div>
        ) :
        (<h3 className="text-2xl text-white font-bold"> Loading...</h3>)}




    </>
  );
}

export default xApp;
