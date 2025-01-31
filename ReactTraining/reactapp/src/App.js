import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';
import {test} from './components/card/Card';

function App() {
  const clickFunction = (data) =>{
    alert("btn Click for card " +  data);
  }
  test();
  return (
    <>
      <Card data="hellobro" onClick={clickFunction}>{() => <h1>This data form function 1 </h1>}</Card>
      <Card data={'<3'} onClick={clickFunction}>{() => <h1>This data form function 2 </h1>}</Card>
      
    </>
    
  );
}

export default App;
