import React from 'react'
import { shallow, mount } from 'enzyme'
import InvitationRequest from './InvitationRequest'

it('should have the local states', () => {
  const wrapper = shallow(<InvitationRequest />)
  expect(wrapper.state()).toHaveProperty('fullName')
  expect(wrapper.state()).toHaveProperty('email')
  expect(wrapper.state()).toHaveProperty('confirmEmail')
})

it('send button should be enabled when all the fields are valid', async () => {
  const wrapper = shallow(<InvitationRequest />)
  await wrapper.setState({
    fullName: 'test',
    email: 'test@test.com',
    confirmEmail: 'test@test.com'
  })
  expect(wrapper.find('.btn-send-request').prop('disabled')).toEqual(false)
})

it('send button should be disabled when full name is empty', async () => {
  const wrapper = shallow(<InvitationRequest />)
  await wrapper.setState({
    fullName: '',
    email: 'test@test.com',
    confirmEmail: 'test@test.com'
  })
  expect(wrapper.find('.btn-send-request').prop('disabled')).toEqual(true)
})

it('send button should be disabled when email is empty', async () => {
  const wrapper = shallow(<InvitationRequest />)
  await wrapper.setState({
    fullName: 'test',
    email: '',
    confirmEmail: 'test@test.com'
  })
  expect(wrapper.find('.btn-send-request').prop('disabled')).toEqual(true)
})

it('send button should be disabled when confirm email is empty', async () => {
  const wrapper = shallow(<InvitationRequest />)
  await wrapper.setState({
    fullName: 'test',
    email: 'test@test.com',
    confirmEmail: ''
  })
  expect(wrapper.find('.btn-send-request').prop('disabled')).toEqual(true)
})

it('send button should be disabled when email and confirm email does not match', async () => {
  const wrapper = shallow(<InvitationRequest />)
  await wrapper.setState({
    fullName: 'test',
    email: 'test@test.com',
    confirmEmail: 'james@test.com'
  })
  expect(wrapper.find('.btn-send-request').prop('disabled')).toEqual(true)
})

it('send button should be disabled when email is not valid', async () => {
  const wrapper = shallow(<InvitationRequest />)
  await wrapper.setState({
    fullName: 'test',
    email: 'test@test',
    confirmEmail: 'test@test'
  })
  expect(wrapper.find('.btn-send-request').prop('disabled')).toEqual(true)
})

it('should reset local state when invitation sent successfully', async () => {
  const props = { sendInviteSuccess: false, onClose: jest.fn() }
  const wrapper = shallow(<InvitationRequest {...props} />)
  await wrapper.setProps({ sendInviteSuccess: true })
  expect(wrapper.state().fullName).toEqual('')
  expect(wrapper.state().email).toEqual('')
  expect(wrapper.state().confirmEmail).toEqual('')
})

it('should call onClose prop when invitation sent successfully', () => {
  const props = { sendInviteSuccess: false, onClose: jest.fn() }
  const wrapper = shallow(<InvitationRequest {...props} />)
  wrapper.setProps({ sendInviteSuccess: true })
  expect(props.onClose.mock.calls.length).toEqual(1)
})

it('should call resetErrorState prop when component unmount', () => {
  const props = { resetErrorState: jest.fn() }
  const wrapper = shallow(<InvitationRequest {...props} />)
  wrapper.unmount()
  expect(props.resetErrorState.mock.calls.length).toEqual(1)
})
