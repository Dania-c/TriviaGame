import React from 'react'

// const Button = ({ answer, className }) => {
//     return (
//         <button className={`bg-white  p-4 text-purple-800 font-semibold rounded shadow ${className}`}>{answer}</button>
//     );
// }



function Questionaire({ handleAnswer, data: { question, correct_answer, incorrect_answers } }) {
    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);
    console.log("shuf", shuffledAnswers)
    return (
        <div className="container">
            <div className="bg-white text-purple-800 p-10 rounded shadow-md">
                <h2 className="text-2xl" dangerouslySetInnerHTML={{ __html: question }} />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6 justify-around ">
                {shuffledAnswers.map(answer => (
                    <button
                        className={`${correct_answer === answer ? 'bg-purple-300' : 'bg-white'}
                        p-4 text-purple-800 font-semibold rounded shadow`}
                        onClick={() => handleAnswer(answer)}

                    >{answer}</button>
                ))}

            </div>
        </div>
    )
}

export default Questionaire

