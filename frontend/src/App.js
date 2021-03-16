// import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
function App() {
  return (
    <>
       <Header />
      <main className='py-3'>
        <Container>
        <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
