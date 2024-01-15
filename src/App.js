
import { useState } from 'react';
import './App.css';
import Header from './Header';
// import Products from './Products_list';
import Products_list from './Products_list';
// import Product from './Product'; 


function App() {


  let countries = [
    { name: "India", capital: "South Africa" },
    { name: "Bangladesh", capital: "Pkan" },
    { name: "Australia", capital: "New cap" }
  ];









  // let [name,setName]=useState();
  // let [age,setAge]=useState();

  // function doSomething(){
  //    alert("Helloo I am Submited")
  //  }

  // function doSomething(data){
  //  alert("Helloo I am Clicked"+ data)
  // }

  // let name = "Sourav";
  //its a normal variable

  // let [name, setName] = useState("sourav")
  // function changeData() {
  //   // name="Thor";  normal varia
  //   setName("thor")
  //   console.log(name)


  return (

    <div className='App'>





    {
      countries.map((country,index)=>{
        return(
          <div className='data' key={index}>
            <h3>{country.name}</h3>
            <h4>{country.capital}</h4>
          </div>
        )
        
      })
    }
   
   <Products_list />






    {/* <h3>Name:</h3>
    <h4>{name}</h4>

    <h3>Age:</h3>
    <h4>{age}</h4>

    <input type='text' placeholder='Enter your name'onChange={(event)=>{
      setName(event.target.value)
    }}></input>
    <input type='number' placeholder='enter your age' onChange={(e)=>{
      setAge(e.target.value)
    }}></input>
    <button type='button' onClick={()=>{
      doSomething();
      console.log(name, age)
    }}>Submit</button>


      <Header />
      <Products_list /> */}

      {/* <button className='btn' onClick={() => {
        doSomething(" sour ")
      }}>Click</button> */}



      {/* 
      <h2>Just a Component </h2>
      <h3>{name}</h3>
      <button onClick={changeData}>Click</button> */}



    </div>
  );
}

export default App;
