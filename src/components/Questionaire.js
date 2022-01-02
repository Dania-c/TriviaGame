import React from 'react'

// const Button = ({ answer, className }) => {
//     return (
//         <button className={`bg-white  p-4 text-purple-800 font-semibold rounded shadow ${className}`}>{answer}</button>
//     );
// }

function Questionaire({ handleAnswer, showAnswers, handleNextQuestion, data: { question, correct_answer, answers } }) {
    // const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);
    // console.log("shuf", shuffledAnswers)
    return (
        <div className="container flex flex-col">
            <div className="bg-white text-purple-800 p-10 rounded shadow-md">
                <h2 className="text-2xl" dangerouslySetInnerHTML={{ __html: question }} />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6 justify-around ">
                {answers.map((answer) => {
                    // const bgColor = showAnswers ?
                    //     answer === correct_answer ? 'text-green-500' : 'text-red-500'
                    //     : 'bg-white';
                    const textColor = showAnswers ?
                        answer === correct_answer ? 'text-green-500' : 'text-red-500'
                        : 'text-purple-700';
                    // const textColor = showAnswers ? 'text-white' : 'text-purple-800'
                    return (

                        < button
                            //className={`${correct_answer === answer ? 'bg-purple-300' : 'bg-white'}
                            className={`bg-white p-4 ${textColor} font-semibold rounded shadow`
                            }
                            onClick={() => {
                                handleAnswer(answer);
                                // console.log("bgColor", bgColor); 
                                // console.log("showAnswers", showAnswers)
                            }}
                            dangerouslySetInnerHTML={{ __html: answer }}

                        />
                    );
                })}

            </div>
            {showAnswers && (
                <button className={`ml-auto bg-purple-700 text-white p-4  font-semibold rounded shadow mt-6`}
                    onClick={handleNextQuestion}>
                    Next Question
                </button>)}
        </div>
    )
}

export default Questionaire

