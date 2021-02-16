import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Home />
      </Container>
    </Router>
  );
}

export default App;
