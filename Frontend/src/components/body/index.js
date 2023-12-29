import React,{ useState } from 'react'
import {Div,ImgDiv,Button,InputBox,InputDiv,Lable,OutputDiv,H4,Container,Img,InfoDiv,P,ErrorP,ErrorDiv } from './styledcomponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faIdBadge, faIdCard,faStar,faStarOfLife} from '@fortawesome/free-solid-svg-icons';


const Body = () => {
  const [discordUserId, setDiscordUserId] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
    

  const handleUserIdChange = (e) => {
    setDiscordUserId(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      
      const response = await fetch(`http://localhost:3001/api/users/${discordUserId}`);
      const data = await response.json();
     
      console.log(data);
      if (response.ok) {
        
       
        setUserData(data); 
       
        setError(null);
      } else {
        setError(data.error || 'Unknown error');
        setUserData(null);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Error fetching user data. Please try again.');
      setUserData(null);
    }
  };
  return (
    <Div>
    <Container>
        <H4>Note : This site is not affiliated with Discord.</H4>
        <InputDiv>
        <Lable>Enter User-ID</Lable>
        <InputBox type= "number" onChange={handleUserIdChange}placeholder="471724955365801984" ></InputBox>
      
        <Button type='button' onClick={handleSubmit}>Search</Button>
        
        </InputDiv>
        {userData && (
        <OutputDiv>
          <ImgDiv>
          <Img className="avatar"
              src={`https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`}
              alt="User Avatar" >
          </Img></ImgDiv>
          <InfoDiv>
          <P><FontAwesomeIcon icon={faIdCard}/> Name : <span className='user-details'>{userData.global_name}</span></P>
         <P><FontAwesomeIcon icon={faUser} />    Username : <span className='user-details'>{userData.username}</span></P>
         <P><FontAwesomeIcon icon={faIdBadge} /> ID : <span className='user-details'>{userData.id}</span></P>
         <P><FontAwesomeIcon icon={faStarOfLife} /> Premium Badge : <span className='user-details'>{userData.premium_type } </span> </P>
         <P><FontAwesomeIcon icon={faStarOfLife} /> Accent Color : <span className='user-details'>{userData.accent_color}  </span> </P>
         <P><FontAwesomeIcon icon={faStarOfLife} /> Banner Color : <span className='user-details'>{userData.banner_color }  </span> </P>


  

          </InfoDiv>
        </OutputDiv>)}
        {error && (
        <ErrorDiv>
          <ErrorP>{"Invalid Discord ID! Try Again"}</ErrorP>
        </ErrorDiv>
      )}
  
    </Container>
    </Div>
  );
};
export default Body;

