import React from 'react';

import './global.css';

import Routes from './routes';


function App() {

  // const [counter, setCounter] = useState(0);

  // // usestate retorna um Array [valor, funcaoDeAtualização]

  // function increment(){
  //   setCounter(counter +1); 
  // }

  return (
    // <div>
    //   <Header> 
    //     Contador: {counter} 
    //   </Header>
    //   <button onClick={increment} >Incrementar</button>
    // </div>
    <Routes/>
  );
}

export default App;
