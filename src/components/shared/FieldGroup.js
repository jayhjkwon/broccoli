import React from 'react'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap'
import styled from 'styled-components'

export default props => {
  return (
    <FormGroup controlId={props.id}>
      {props.label && (
        <Label>
          {props.label}{' '}
          {props.required ? <RequiredSymbol>*</RequiredSymbol> : null}
        </Label>
      )}
      <StyledFormControl {...props} />
      {props.help && <HelpBlock>{props.help}</HelpBlock>}
    </FormGroup>
  )
}

const Label = styled(ControlLabel)`
  font-weight: 400;
  font-size: 0.8rem;
`

const RequiredSymbol = styled.span`
  color: #dd5347;
  font-size: 1rem;
  position: relative;
  top: 5px;
`

const StyledFormControl = styled(FormControl)`
  padding: 26px 12px !important;
  font-size: 1.2rem !important;
`
