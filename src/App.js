import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
 
  const items = [

    {name:'Photoshop', details:'This tools for photo editing on your mobile', price:'$45.50'},
    {name:'Pdf', details:'This tools for reading on your mobile', price:'$5.50'},
    {name:'Ilustator', details:'This tools for graphicsdesign in mobile ', price:'$55.50'},
    {name:'Lightroom', details:'This tools for Image filture in mobile', price:'$85.50'}

  ]

  return (
    <div className="App">
      <header className="App-header">

      <Counter></Counter>
      <Usersinfo></Usersinfo>


      <ul>
          {
            items.map (pd => <Products product={pd}></Products>)
          }
      </ul>


      </header>
    </div>
  );
}

//////////////// Using Props for access multiple object /////////////////////


function Products(props){
  const productStyle = {
      border: '1px solid lightgray',
      borderShadow: '5px gray',
      backgroundColor: 'skyblue',
      borderRadius: '5px',
      height: '300px',
      width: '300px',
      margin: '5px',
      float: 'left',
      color:'black'
  }

  return (
    <div style={productStyle}>
        <h4>{props.product.name}</h4>
        <p>{props.product.details}</p>
        <h5>{props.product.price}</h5>
        <button>Buy Now</button>
    </div>

  )
}

///////////////// How to use state in website //////////////////
 
function Counter() {

  const [count, setCount] =  useState(0);
  const handleIncrease = () =>{
    const newCount = count + 1;
    setCount (newCount);
  };

  const handledecrease = () =>{
    const newCount = count - 1;
    setCount (newCount);

  };

  return(

    <div>
      <h3> Product Counter : {count} </h3>
      <button onClick={handleIncrease} style= {{marginRight:'20px'}}>Add</button> 
      <button id='remove' onClick={handledecrease}>Remove</button>
    </div>

  )
  
}


///////////////////// How to use effect for data load in react ////////////////


function Usersinfo(params) {

  const [users, setUsers] =  useState([])

  useEffect (()=>{

    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data => setUsers(data))

  },[])
 
  return (

    <div>

  <h3>Total Avaialble Users : {users.length} </h3>
  
 
 <ul>

    {

    users.map (users =><li> {users.name}  </li>)
    }

 </ul>

    </div>
  )
  
}



export default App;
