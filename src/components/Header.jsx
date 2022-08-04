import React from "react";
import styled from "styled-components";


const Header = () => {
  return (
    <StContainer>
      <div>My Todo List</div>
      <div>React</div>
    </StContainer>
    
  );
};

const StContainer = styled.div`
  border: 1px solid #f25b5b;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;

export default Header;