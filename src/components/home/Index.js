import React, { Component } from 'react'
import Button from '../shared/Button'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionCreators } from '../../store/Invitation'
import InvitationRequest from './InvitationRequest'
import SuccessRequest from './SuccessRequest'

export class Index extends Component {
  state = {
    showInvitationModal: false
  }

  openInvitationModal = () => {
    this.setState({ showInvitationModal: true })
  }

  closeInvitationModal = () => {
    this.setState({ showInvitationModal: false })
  }

  closeSuccessModal = () => {
    this.props.resetSendInviteSuccess()
  }

  render() {
    return (
      <div className="content">
        <Title>A better way to enjoy every day.</Title>
        <SubTitle>Be the first to know when we launch.</SubTitle>
        <Button
          primary
          className="btn-request-invite"
          onClick={this.openInvitationModal}
        >
          Request an invite
        </Button>
        {this.state.showInvitationModal && (
          <InvitationRequest
            {...this.props}
            onClose={this.closeInvitationModal}
          />
        )}
        {this.props.sendInviteSuccess && (
          <SuccessRequest {...this.props} onClose={this.closeSuccessModal} />
        )}
      </div>
    )
  }
}

export default connect(
  state => state.invitation,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Index)

const Title = styled.h1`
  font-size: 3rem;
  margin: 3rem auto;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding: 0 15px;
  }
`

const SubTitle = styled.p`
  margin: 3rem auto;
  color: #333;
`
