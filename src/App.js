import React from 'react'
import { Route } from 'react-router'
import Layout from './components/shared/Layout'
import Home from './components/home/Index'
import styled from 'styled-components'

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default () => (
  <StyledAppContainer>
    <Layout>
      <Route exact path="/" component={Home} />
    </Layout>
  </StyledAppContainer>
)
