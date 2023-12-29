import './App.css';
import Body from './components/body';
import Navbar from './components/navbar';
import Footer from './components/footer';
import styled from 'styled-components'

 const Container = styled.div`
 

`

function App() {
  return (
    <Container>
    <Navbar/>
    <Body/>
    <Footer/>
    </Container>

  );
}

export default App;
