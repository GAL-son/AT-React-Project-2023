import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button className="btn btn-primary" title="button" onClick={()=>{alert("LMAO")}}/>
    </div>
  );
}

export default App;
