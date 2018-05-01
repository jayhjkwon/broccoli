import React from 'react'
import { shallow, mount } from 'enzyme'
import { Index } from './Index'
import InvitationRequest from './InvitationRequest'
import SuccessRequest from './SuccessRequest'

it('should render request an invite button', () => {
  const wrapper = shallow(<Index />)
  expect(wrapper.find('.btn-request-invite').exists()).toEqual(true)
})

it('should update local state when request an invite button clicked', async () => {
  const wrapper = shallow(<Index />)
  await wrapper.find('.btn-request-invite').simulate('click')
  expect(wrapper.instance().state.showInvitationModal).toEqual(true)
})

it('should open invitation request modal when showInvitationModal state is true ', async () => {
  const wrapper = shallow(<Index />)
  await wrapper.setState({ showInvitationModal: true })
  expect(wrapper.find(InvitationRequest).exists()).toEqual(true)
})

it('should close invitation request modal when showInvitationModal state is false ', async () => {
  const wrapper = shallow(<Index />)
  await wrapper.setState({ showInvitationModal: false })
  expect(wrapper.find(InvitationRequest).exists()).toEqual(false)
})

it('should open success request modal when sendInviteSuccess props is true ', () => {
  const wrapper = shallow(<Index sendInviteSuccess={true} />)
  expect(wrapper.find(SuccessRequest).exists()).toEqual(true)
})

it('should close success request modal when sendInviteSuccess props is false ', () => {
  const wrapper = shallow(<Index sendInviteSuccess={false} />)
  expect(wrapper.find(SuccessRequest).exists()).toEqual(false)
})
