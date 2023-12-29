import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #23272a;
  padding: 20px;
  text-align: center;
  border-radius:6px
`;

const Div = styled.div`

  max-width: 800px;
  margin: 0 auto;
`;

const MadeBy = styled.div`

  font-size: 16px;
  margin-bottom: 10px;
  color: white;
`;

const Span = styled.span`

  color: #e44d26; 
`;

const A = styled.a`
  text-decoration: none;
  text-decoration:underline;
  color: white; 
  font-weight: bold;
`;

const Copyright = styled.div`
color: white;
  font-size: 14px;
  margin-top: 10px;
`;

const Note = styled.div`
  font-size: 12px;
  color: #666; 
  margin-top: 10px;
  color: white;
`;

const Footer = () => {
  return (
    <Container>
      <Div>
        <MadeBy>
          Made with <Span>&hearts;</Span> BY{' '}
          <A href="https://nixx.netlify.app/" target="blank">
            Nixx
          </A>
        </MadeBy>
        <Copyright>© 2023 Discord Lookup</Copyright>
        <Note>
          Discord Lookup is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Discord Inc., or any of its subsidiaries or its affiliates.
        </Note>
      </Div>
    </Container>
  );
};

export default Footer;
