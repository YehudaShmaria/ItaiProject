import './App.css';
import Home from './Pages/Home';
import TheNavbar from './Layout/TheNavbar';
import Footer from './Layout/Footer';
import DrinkProvider from './Context/drinkContext'; 
import axios from 'axios';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <DrinkProvider>
        <Container>
          <TheNavbar />
          <Home />
          <Footer />
        </Container>
      </DrinkProvider>
    </div>
  );
}

export default App;
