import { useEffect, useState } from "react";
import Questionaire from "./components/Questionaire";

const API_URL = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
function App() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
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
    setCurrentIndex(currentIndex + 1);


  }

  return (
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

export default App;
