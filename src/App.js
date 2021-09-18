
import './App.css';
import {useSelector, useDispatch} from 'react-redux'

function App() {

  const store = useSelector(store => store);

  const dispatch =  useDispatch()

  console.log(store);

  return (
    <div className="App">
    hi!
    <button onClick={() => dispatch({type: 'LOAD_DATA'})} >Click!</button>
    </div>
  );
}

export default App; 
