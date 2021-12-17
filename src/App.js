const API_URL = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
function App() {
  return (
    <div className="container">
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md"> <h2 className="text-2xl">question goes here</h2> </div>
      <div className="flex flex-wrap mt-4 justify-around ">
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4">option 1</button>
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4">option 2</button>
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow">option 3</button>
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow">option 4</button>
      </div>

    </div>
  );
}

export default App;
