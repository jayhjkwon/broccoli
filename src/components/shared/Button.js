import React from 'react'
import styled from 'styled-components'
import { Glyphicon } from 'react-bootstrap'

const StyledButton = styled.button`
  background-color: ${props =>
    props.primary ? '#dd5347' : props.success ? '#28a745' : '#6c757d'}
  color: #fff;
  display: inline-block;
  font-size: ${props => (props.primary ? '1rem' : '0.9rem')};
  font-weight: 500;
  padding: ${props => (props.primary ? '1.5rem 3rem' : '0.8rem 2rem')}
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  width: auto;
  border-radius: ${props => (props.primary ? '0' : '4px')}
	${props => (props.marginRight ? `margin-right:${props.marginRight}` : '')}
	opacity: ${props => (props.disabled || props.isLoading ? '0.4' : '1')}

  :hover {
    cursor: ${props =>
      props.disabled || props.isLoading ? 'not-allowed' : 'pointer'}
  }

  :focus {
    outline: 0;
  }
`

export default props => {
  return (
    <StyledButton {...props} disabled={props.disabled || props.isLoading}>
      {props.isLoading ? props.loadingText || 'Loading...' : props.children}{' '}
      {props.disabled ? <Glyphicon glyph="ban-circle" /> : null}
      {!props.disabled && props.send ? <Glyphicon glyph="send" /> : null}
    </StyledButton>
  )
}
