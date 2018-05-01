import React, { Component } from 'react'
import Button from '../shared/Button'
import styled from 'styled-components'
import Modal from '../shared/styled/Modal'
import ModalHeader from '../shared/styled/ModalHeader'
import ModalTitle from '../shared/styled/ModalTitle'
import ModalBody from '../shared/styled/ModalBody'
import ModalFooter from '../shared/styled/ModalFooter'

export default class SuccessRequest extends Component {
  componentWillUnmount() {
    this.props.resetSendInviteSuccess()
  }

  render() {
    return (
      <Modal show onHide={this.props.onClose}>
        <ModalHeader closeButton>
          <ModalTitle>All done!</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <BodyContent>
            <p>You will be one of the first to experience</p>
            <p>Broccoli &amp; Co. when we launch.</p>
          </BodyContent>
        </ModalBody>

        <ModalFooter>
          <Button onClick={this.props.onClose}>OK</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

const BodyContent = styled.div`
  text-align: center;
`
