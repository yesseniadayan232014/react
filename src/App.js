import './App.css';
import Title from './components/Title'
import Paragraph from './components/Paragraph'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Title>Titulo 1</Title>
      <Title>Titulo 2</Title>
      <Paragraph>Este es mi parrafo</Paragraph>
      <Counter></Counter>
    </div>
  );
}

export default App;
