import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import categories from './hooks/Api';

function App() {
  return (
    <div className="App">
      <Banner/>
      {categories.map((category) => (
        <Row key={category.name} title={category.title} path={category.path}/>
      ))}
    </div>
  );
}

export default App;
