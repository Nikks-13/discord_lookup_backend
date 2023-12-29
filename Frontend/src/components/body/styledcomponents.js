import styled from 'styled-components'

export const Div = styled.div`
min-height:70vh;
margin :20px;

`
export const Container = styled.div`
margin :20px;
@media only screen and (max-width: 600px){
  margin :0;

}


`
export const H4 = styled.h4`
color:white;
text-align:center;
padding-top:60px;
@media only screen and (max-width: 600px){
  padding-top:20px;}
@media only screen and (max-width: 500px){
  padding-top:5px;
  margin:5px;
  font-size:12px;
  
}
`
export const InputDiv = styled.div`
text-align:center;

`
export const Lable= styled.label`
display :block;
color: white;
font-family: 'Chakra Petch', sans-serif;
padding:20px 0px;
font-size:32px;
@media only screen and (max-width: 500px){
  font-size:24px;
  padding:10px 0px;

}
`
export const InputBox = styled.input`
color:black;
text-align:center;
font-size:28px;
padding:10px;
/* Remove arrow buttons for number input */
  -moz-appearance: textfield; /* Firefox */
  appearance: textfield; /* Others */

  /* For Chrome, Safari, and newer versions of Edge */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
   
  }
  border:2px solid #5865f2;
  border-radius: 15px;
  @media only screen and (max-width: 500px){
    font-size:18px;;
  }
  
  
`

export const Button = styled.button`
display: block;
    margin: auto;
    margin-top: 25px;
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 300;
    font-size: 30px;
    padding:2px 20px;
    border-radius: 4px;
    border:2px;
    color:#ffffff;
    background-color:#5865f2;
    &:hover {
      background-color: #7289da;
      color: 
    }
    @media only screen and (max-width: 500px){
      font-size:22px;
    }
`
export const OutputDiv = styled.div`
background-color:#23272a;
min-height:200px;
border:2px solid #7289da;
border-radius:20px;
display :flex;
max-width:500px;
margin:auto;
margin-top:40px;
@media only screen and (max-width: 600px){
  max-width:318.4px;
}
@media only screen and (max-width: 500px){
  max-width:200px;
flex-direction:column;
}

`
export const ImgDiv = styled.div`
display: grid;
    align-content: space-evenly;
    padding: 10px;
    font-size: 20px;
    @media only screen and (max-width: 500px){
      padding: 1px;
    }
`
export const Img = styled.img`
height:200px;
width:200px;
padding:20px;
border-radius:30px;
@media only screen and (max-width: 600px){
  height:120px;
  width:120px;
  padding:10px;
}
@media only screen and (max-width: 500px){
  margin:auto;
  padding-top: 20px;
  padding-bottom:1px;
}





`
export const InfoDiv = styled.div`
padding :20px;
align-content: space-evenly;
@media only screen and (max-width: 500px){
  padding :5px;
  align-content: space-evenly;
}
@media only screen and (max-width: 500px){
  margin:auto;
}

`
export const P = styled.p`
color:white;
font-weight:500;
font-size:16px;
@media only screen and (max-width: 600px){
font-weight:300;
font-size:10px;
}
@media only screen and (max-width: 500px){
  text-align:center;
}

`

export const ErrorP = styled.p`
color:red;
font-family: 'Chakra Petch', sans-serif;
font-size:30px;
font-weight:900;
@media only screen and (max-width: 500px){
  font-size:20px;
}

`
export const ErrorDiv = styled.div`
text-align:center;



`


