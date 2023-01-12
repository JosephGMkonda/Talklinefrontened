import React from 'react'
import styled from 'styled-components';
import Text from '../Components/Text'

export default SignInScreen =() =>{
  return (
   
  
    <Container>
      <Main>
        <Text title semi  center>Talk Line</Text>
      

      </Main>
    </Container>
  );
}

const Container = styled.View`
flex: 1;

`

const Main = styled.View`
margin-top: 100px;
`

const StatusBar = styled.View``