import React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <HeaderContainer>
      <Title>BROCCOLI &amp; CO.</Title>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 0 0 0 20%;

  @media (max-width: 768px) {
    padding: 0;
    text-align: center;
  }
`

const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 200;
  padding: 0.9rem;
  letter-spacing: 2px;
`
