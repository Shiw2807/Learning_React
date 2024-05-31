import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClickButton from './components/FunctionClick';
// import {Button as ClassClickButton} from './components/ClassClick';
import ParentClass from './components/ParentClass';

function App() {

  const users = ['Saurabh',"Shiwanshi","Bhumika","Rahul","Gangesh"]

  return (
    <div className="App">
          <ParentClass/>
       {
         users.map((user,index)=>{
           return <Greet key={user} name={user}></Greet>
         })
       }
    </div>
  );
}

export default App;
