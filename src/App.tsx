import AutoComplete from './components/AutoComplete';
import './App.css';

function App() {
  const data = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

  return (
    <div className='App'>
      <AutoComplete data={data} />
    </div>
  );
}

export default App;
