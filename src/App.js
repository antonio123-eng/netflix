import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import categories from './hooks/Api';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      {categories.map((category) => (
        <Row key={category.name} title={category.title} path={category.path} isLarge={category.isLarge}/>
      ))}
    </div>
  );
}

export default App;
