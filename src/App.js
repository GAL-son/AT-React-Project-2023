import './App.css';

import Button from './components/Button';
import MovieCard from './components/MovieCard'
import Navigation from './components/Navigation';
import ProfileBubble from './components/ProfileBubble';

function App() {
  return (
    <div className="App">
      <Button className="btn-primary" title="button" onClick={()=>{alert("LMAO")}}/>
      <MovieCard/>
      <ProfileBubble/>
    </div>
  );
}

export default App;
