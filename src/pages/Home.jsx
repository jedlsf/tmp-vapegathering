import React, { useEffect, useState } from 'react';
import styled from 'styled-components';




const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

function Home() {


    return (
        <Container>
            test
        </Container>
    );
}

export default Home;
