import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import fetchMock from 'fetch-mock'
import {
  actionCreators,
  reducer,
  initialState,
  requestSendInvite,
  successSendInvite,
  failSendInvite,
  resetSendInviteSuccess,
  resetErrorState
} from './Invitation'

describe('actionCreators', () => {
  const mockedDispatch = payload => payload
  const mockedGetState = jest.fn()

  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should have the properties', () => {
    expect(actionCreators).toHaveProperty('requestInvitation')
    expect(actionCreators).toHaveProperty('resetSendInviteSuccess')
    expect(actionCreators).toHaveProperty('resetErrorState')
  })

  it('requestInvitation action creator should create successSendInvite type action', async () => {
    fetchMock.post(
      'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
      'true'
    )

    const action = await actionCreators.requestInvitation()(
      mockedDispatch,
      mockedGetState
    )

    expect(action.type).toEqual(successSendInvite)
  })

  it('requestInvitation action creator should create failSendInvite type action when error occurred', async () => {
    fetchMock.mock(
      'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
      400
    )

    const action = await actionCreators.requestInvitation()(
      mockedDispatch,
      mockedGetState
    )

    expect(action.type).toEqual(failSendInvite)
  })

  it('resetSendInviteSuccess action creator should create resetSendInviteSuccess type action', async () => {
    const action = await actionCreators.resetSendInviteSuccess()(
      mockedDispatch,
      mockedGetState
    )

    expect(action.type).toEqual(resetSendInviteSuccess)
  })

  it('resetErrorState action creator should create resetErrorState type action', async () => {
    const action = await actionCreators.resetErrorState()(
      mockedDispatch,
      mockedGetState
    )

    expect(action.type).toEqual(resetErrorState)
  })
})

describe('reducer', () => {
  it('should return initial state', () => {
    const state = reducer(undefined, {})
    expect(state).toEqual({
      isLoading: false,
      error: null,
      sendInviteSuccess: false
    })
  })

  it('should handle requestSendInvite action type', () => {
    const state = reducer(undefined, {
      type: requestSendInvite
    })
    expect(state.isLoading).toEqual(true)
  })

  it('should handle successSendInvite action type', () => {
    const state = reducer(undefined, {
      type: successSendInvite
    })
    expect(state.isLoading).toEqual(false)
    expect(state.sendInviteSuccess).toEqual(true)
  })

  it('should handle resetSendInviteSuccess action type', () => {
    const state = reducer(undefined, {
      type: resetSendInviteSuccess
    })
    expect(state.sendInviteSuccess).toEqual(false)
  })

  it('should handle failSendInvite action type', () => {
    const state = reducer(undefined, {
      type: failSendInvite,
      error: { errorMessage: 'error occurred' }
    })
    expect(state.isLoading).toEqual(false)
    expect(state.error.errorMessage).toEqual('error occurred')
  })

  it('should handle resetErrorState action type', () => {
    const state = reducer(undefined, {
      type: resetErrorState
    })
    expect(state.isLoading).toEqual(false)
    expect(state.error).toBeNull()
  })
})
