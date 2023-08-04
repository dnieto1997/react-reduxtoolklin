
import './App.css'
import Header from './components/Header'
import Email from './components/Email'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { addUser } from './redux/userSlice';
function App() {
  const dispatch =useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div  className='App'>
      <Header/>
      <Email/>
    </div>
  )
}

export default App
