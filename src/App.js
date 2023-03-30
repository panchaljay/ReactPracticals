import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Practical1 from "./Components/Practical1";
import Practical10 from "./Components/Practical10";
import Practical2 from "./Components/Practical2";
import Practical3 from "./Components/Practical3";
import A from "./Components/Practical4/A";
import Practical5 from "./Components/Practical5";
import Practical6 from "./Components/Practical6";
import Practical7 from "./Components/Practical7";
import Practical8 from "./Components/Practical8";
import Practical9 from "./Components/Practical9";

function App() {
  return (
    <div className="App">

      <Practical1 />
      <br />
      <hr />
      <Practical2 />
      <br />
      <hr />
      <Practical3 />
      <br />
      <hr />
      Practical4:-
      <A />
      <br />
      <hr />
      <Practical5 />
      <br />
      <hr />
      <Practical6/>
      <hr />
      <Practical7/>
      <br />
      <hr />
      <BrowserRouter>
      <Practical8/>
      </BrowserRouter>
      <br />
      <hr />
      <Practical9 firstname="Lorem" lastname="Ipsum" age="26" city="Surat"/>
      <br />
      <hr />
      <Practical10/>
      <br />
      <hr />
      
    </div>
  );
}

export default App;
