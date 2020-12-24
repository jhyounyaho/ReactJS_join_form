import React from 'react';
import styled from 'styled-components';
import JoinForm from '../JoinForm/JoinForm';

const JoinTemplateBlock = styled.div`
  width: 512px;
  padding: 32px;
  position: relative; 
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto; 
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

function JoinTemplate() {
  return (
    <JoinTemplateBlock>
      <JoinForm />
    </JoinTemplateBlock>
  )
}

export default JoinTemplate;