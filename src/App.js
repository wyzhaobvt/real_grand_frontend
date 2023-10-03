import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import House from './components/House';
import { useEffect, useState } from 'react';
import SearchFilter from './components/SearchFilter';
import { Route,Routes } from 'react-router-dom';
import SearchResult from './components/SearchResult';
import SearchHouseDetail from './components/SearchHouseDetail';
import SignUp from './components/Signup';
import Login from './components/Login';


function App() {


   let [housesData,setHousesData] = useState();
   
  // to read houses.json and send one house obj to House.js
  useEffect(() => {
    // console.log('in useEffect');
    const fetchData = async ()=>{
    let resp =  await fetch('/Data.json');
    let data = await resp.json();
    // console.log(' date from json - ');
    // console.log(data);
    setHousesData(data);    
    // console.log('data from state');
    // console.log(housesData);
    //write the data to the state so we can use it anywhere in the component
    };
    fetchData();
  },[]);

  

  return (
    <div className='container-fluid'>
     
           <Header/> 
           {housesData && <SearchFilter houseCounty={housesData}/>}

           <Routes>
           <Route path='/signup' element={<SignUp/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
            <Route path='/' element={housesData &&  <House houseinfo={housesData[Math.floor(Math.random()*10)]}/>}></Route>
            <Route path='/searchresult/:county' element={housesData && <SearchResult  houseinfo={housesData}/>}></Route>
            <Route path='/searchedHouse/:houseId' element={housesData && <SearchHouseDetail  houseinfo={housesData}/>}></Route>
           </Routes>
           <Footer/>
          

          
    </div>
  );
}


export default App;
