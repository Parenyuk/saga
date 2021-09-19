
import '../App.css';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from "react-router-dom";

function App() {

  const store = useSelector(store => store);

  console.log(store);

  return (
    <div className="App">
    hi!
      <div>
        <Link to={'/blog'}>open blog</Link>
      </div>
    </div>
  );
}

export default App; 
