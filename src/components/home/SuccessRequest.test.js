import React from 'react'
import { shallow, mount } from 'enzyme'
import SuccessRequest from './SuccessRequest'

it('should call resetSendInviteSuccess prop when component unmount', () => {
  const props = { resetSendInviteSuccess: jest.fn() }
  const wrapper = shallow(<SuccessRequest {...props} />)
  wrapper.unmount()
  expect(props.resetSendInviteSuccess.mock.calls.length).toEqual(1)
})
