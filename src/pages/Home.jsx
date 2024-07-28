import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CountdownTimer from '../components/functional/CountdownTimer'



const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;


`;
const targetDate = '2024-12-31T23:59:59Z'; // 'Z' denotes UTC time

function Home() {


    return (
        <Container>
            <CountdownTimer
                targetDate={targetDate}
            />
        </Container>
    );
}

export default Home;
