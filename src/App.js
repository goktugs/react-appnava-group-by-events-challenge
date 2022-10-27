import InputPart from './components/Input/InputPart';
import EventsList from './components/Events/EventsList';
import { Container, Box } from '@chakra-ui/react';
import './App.css';
function App() {
  return (
    <div className="App">
      <Container
        bg={'red'}
        height={'75%'}
        centerContent
        pt={70}
        minWidth="1000px"
      >
        <Box width={'75%'}>
          <InputPart />
        </Box>
        <Box width={'75%'}>
          <EventsList />
        </Box>
      </Container>
    </div>
  );
}

export default App;
