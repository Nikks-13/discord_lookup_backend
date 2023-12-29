import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Div= styled.div`
text-align:center;
font-size:50px;
font-family: 'Exo 2';
font-weight:bolder;
padding:20px;
color:white;
border-radius:7px;
background-color:#23272a;
@media only screen and (max-width: 600px){
  font-size: 40px;
}@media only screen and (max-width: 400px){
  font-size:22px;
}
`

const Navbar = () => {
  return (
    <Div><FontAwesomeIcon icon={faMagnifyingGlass} /> Discord LookUp
    </Div>
  );
};
export default Navbar;