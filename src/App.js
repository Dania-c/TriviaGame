import { useEffect, useState } from "react";
import Questionaire from "./components/Questionaire";

const API_URL = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
function App() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setQuestions(data.results);
        console.log("q:", questions);
      })
  }, []);

  const handleAnswer = (answer) => {

  }

  return (
    <>


      {questions.length > 0 ? (
        <Questionaire data={questions[0]} handleAnswer={handleAnswer} />
      ) : (<h3 className="text-2xl text-white font-bold"> Loading...</h3>)}




    </>
  );
}

export default App;
