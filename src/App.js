import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <div className="App">
      <Stars count={1} />
      <Stars count={2} />
      <Stars count={3} />
      <Stars count={4} />
      <Stars count={'Любой текст'} />
      <Stars count={0} />
      <Stars count={-10} />
      <Stars count={5} />
    </div>
  );
}

export default App;