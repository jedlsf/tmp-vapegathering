import React from 'react';
import styled from 'styled-components';
import EventMapLayout from '../components/3d/EventMapLayout';
import theme from '../theme.js';

const MainContainer = styled.div`
  width: 90vw;
  height: 70vh;
  position: relative;
  z-index: 4;
  backdrop-filter: blur(25px);
  margin: 25px;
 
`;

const BodyContainer = styled.div`
  width: 70%;
  max-width: 350px;
  height: 70vh;
  padding: 20px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  gap: 15px;
  box-sizing: border-box;
  margin-right:15px;
   margin-left:150px;

  border-radius: 15px;
`;

const InfoContainer = styled.div`
  width: 70%;
  max-width: 1400px;
  height: 70vh;
  padding: 20px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  gap: 15px;
  box-sizing: border-box;
  margin-right:15px;
   margin-left:150px;

  border-radius: 15px;
`;

const DynaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ColumnContainer = styled.div`
  width: 100%;
  max-height: ${({ mHeight }) => mHeight}px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-height: 100%;
  }
`;



function EventLayout() {
    return (
        <MainContainer>
            <DynaContainer>
                <BodyContainer>
                    <EventMapLayout />
                </BodyContainer>
                <InfoContainer />
            </DynaContainer>
        </MainContainer>
    );
}

export default EventLayout;
