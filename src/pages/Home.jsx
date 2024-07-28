import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CountdownTimer from '../components/functional/CountdownTimer'
import ThreeDViewer from '../components/3d/ThreeDViewer'


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;


`;
const targetDate = '2024-12-31T23:59:59Z'; // 'Z' denotes UTC time

function Home() {


    return (
        <Container>
            <ThreeDViewer />
            <CountdownTimer
                targetDate={targetDate}
            />
        </Container>
    );
}

export default Home;
