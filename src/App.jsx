import "./index.css";
import Quiz from "./components/quiz"
import Results from "./components/results"

function App() {
  return (
      <div className="app-container">

        <h1> Ozan's Quizz App </h1>
        <h1 className="s1"> Get all the questions right for a special photo reveal! </h1>
        <hr style={{ borderTop: '2px solid #4a0757', width: '90%', margin: '1rem auto', borderBottom: '0px solid #4a0757', borderRight: '0px solid #4a0757', borderLeft: '0px solid #4a0757'}} />

        <Quiz/>


      </div>
  );
}

export default App;