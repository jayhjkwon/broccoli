import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import Button from '../shared/Button'
import FieldGroup from '../shared/FieldGroup'
import { validateEmail } from '../../services/Validations'
import Modal from '../shared/styled/Modal'
import ModalHeader from '../shared/styled/ModalHeader'
import ModalTitle from '../shared/styled/ModalTitle'
import ModalBody from '../shared/styled/ModalBody'
import ModalFooter from '../shared/styled/ModalFooter'

export default class InvitationRequest extends Component {
  state = {
    fullName: '',
    email: '',
    confirmEmail: ''
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sendInviteSuccess) {
      this.setState(
        { fullName: '', email: '', confirmEmail: '' },
        this.enableSubmit
      )
      this.props.onClose()
    }
  }

  componentWillUnmount() {
    this.props.resetErrorState()
  }

  enableSubmit = () => {
    return !!(
      this.state.fullName &&
      this.state.fullName.trim().length >= 3 &&
      validateEmail(this.state.email) &&
      validateEmail(this.state.confirmEmail) &&
      this.state.email === this.state.confirmEmail
    )
  }

  handleInputChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState(
      {
        [name]: value
      },
      () => this.enableSubmit()
    )
  }

  submit = () => {
    this.props.requestInvitation(this.state.fullName, this.state.email)
  }

  render() {
    return (
      <Modal show onHide={this.props.onClose}>
        <ModalHeader closeButton>
          <ModalTitle>Request an invite</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <FieldGroup
            id="fullName"
            name="fullName"
            type="text"
            value={this.state.fullName}
            label="Full name"
            placeholder="Enter full name"
            required
            onChange={this.handleInputChange}
            minLength={3}
          />

          <FieldGroup
            id="email"
            name="email"
            type="text"
            value={this.state.email}
            label="Email"
            placeholder="Enter email"
            required
            onChange={this.handleInputChange}
          />

          <FieldGroup
            id="confirmEmail"
            name="confirmEmail"
            type="text"
            value={this.state.confirmEmail}
            label="Confirm email"
            placeholder="Enter confirm email"
            required
            onChange={this.handleInputChange}
          />

          {this.props.error && (
            <Alert bsStyle="danger">
              <strong>Oh snap!</strong>{' '}
              {this.props.error.errorMessage
                ? this.props.error.errorMessage
                : 'Sorry, error occurred while sending a request'}
            </Alert>
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            success
            disabled={!this.enableSubmit()}
            onClick={this.submit}
            className="btn-send-request"
            send
            isLoading={this.props.isLoading}
            loadingText="Sending, please wait..."
          >
            Send
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}
