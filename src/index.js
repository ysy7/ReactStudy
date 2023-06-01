import {useState} from "react"
import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import bg from './img/bg1.png';
import shoes01 from './img/shoes01_.png';
import shoes02 from './img/shoes02_.png';
import shoes03 from './img/shoes03_.png';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from "./routes/Detail";
import axios from 'axios';


function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();  

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate(-1)}}>Home</Nav.Link> */}
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>             
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
         < Route path = "/" element={
          <>
           <div className="main-bg"></div>
           <div className = "container">
            <div className = "row">                   
             { shoes.map((a,i) => {
               return < Card shoes={shoes[i]} i={i+1}></Card>              
            })}        
          </div> 
          </div> 
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((결과)=>{
              console.log(결과.data)
              console.log(shoes)
              let copy = [...shoes, ...결과.data]
              setShoes(copy);
            })
            .catch(()=>{
              console.log('접속실패')
            })
          }}>상품보기</button>

         </>
        }/>

        {/* 여러장의 상세페이지를 만들기 */}
      <Route path = "/detail/:id" element={<Detail shoes={shoes}/>}/>
      <Route path = "/about" element={<About/>}>
        <Route path = "member" element = {<div>member</div>}/>
        <Route path = "location" element = {<div>location</div>}/>
      </Route>
      <Route path = "*" element={<div>페이지없음</div>}/> 
   </Routes>   
 </div>
 ); 
}

function About(){
  return(
    <div>
      <Outlet></Outlet>
      <h4>스포츠화전문점</h4>
      <Outlet></Outlet>
    </div>
  )
}


function Card(props){
  return (
    <div className = "col-md-4">
      {/* <img src={props.images} alt='에어'/> */}
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg' } width="100%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  )
}


export default App;



///////////////////////////////////////////////

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
 background : ${props => props.bg};
 color : ${props => props.bg == 'blue' ?'white' : 'black'};
 padding : 10px;
`
let NewBtn =  styled(YellowBtn)`  
 color : ${props => props.bg == 'green' ?'white' : 'black'};
`
let Box = styled.div`
 background : grey; 
 padding : 20px;
`
function Detail(props) {
  let [alert, setAlert] = useState(true)
  useEffect(()=>{
    let a = setTimeout(()=>{setAlert(false)}, 2000)  
    console.log(2) 
    return ()=>{
      console.log(1) 
      // 타이머제거, useEffect가 실행되기 전에 실행됨 
       clearTimeout(a)   
    }     
  }, []) 
  // [] mount시 1회가 코드가 실행되어라 
  
  // 유저가 입력한 URL파라미터의 값을 읽어오려면 useParams()이용 
  let {id} = useParams();  
   return (
       <div className="container">
       {
        alert == true   
        ? <div className = "alert alert-waring">
           2초이내 구매시 할인 
         </div>
        : null 
       } 
         <Box>
         <YellowBtn bg="blue">스타일버튼_blue</YellowBtn>
         <NewBtn bg="green">스타일버튼_green</NewBtn>
         </Box>           
           <div className="row">
           <div className="col-md-6">
             <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />              
                </div>
                 <div className="col-md-6">
                     <h4 className="pt-5">{props.shoes[id].title}</h4>
                     <p>{props.shoes[id].content}</p>
                     <p>{props.shoes[id].price}원</p>
                     <button className="btn btn-danger">주문하기</button> 
                </div>
             </div>
        </div> 
      )
    }
export default Detail;

