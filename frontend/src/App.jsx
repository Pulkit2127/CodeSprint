import { BrowserRouter, Route, Routes } from "react-router-dom";
import Problems from "./pages/Problems";
import ProblemSet from "./pages/ProblemSet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProblemSet />}></Route>
        <Route path="/problems/:problemId" element={<Problems />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
