import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  padding: 20px;
  background-color: #1e2021;
  border-radius: 10px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ProfileName = styled.h2`
  font-size: 20px;
  margin: 10px 0;
  color: #d6f500;
`;

const ProfileDetails = styled.p`
  font-size: 14px;
  color: #666;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <ProfileImage src="https://via.placeholder.com/100" alt="Profile" />
      <ProfileName>Juan Dela Cruz</ProfileName>
      <ProfileDetails>test@requesttickets.digital</ProfileDetails>
      <ProfileDetails>Status: Active</ProfileDetails>
    </SidebarContainer>
  );
}

export default Sidebar;
