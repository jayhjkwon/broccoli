import invitationService from '../services/InvitationService'

export const requestSendInvite = 'REQUEST_SEND_INVITE'
export const successSendInvite = 'SUCCESS_SEND_INVITE'
export const failSendInvite = 'FAIL_SEND_INVITE'
export const resetSendInviteSuccess = 'RESET_SEND_INVITE_SUCCESS'
export const resetErrorState = 'RESET_ERROR_STATE'

export const initialState = {
  isLoading: false,
  error: null,
  sendInviteSuccess: false
}

export const actionCreators = {
  requestInvitation: (name, email) => async dispatch => {
    dispatch({ type: requestSendInvite })

    try {
      const response = await invitationService.requestInvitation(name, email)
      return dispatch({ type: successSendInvite, ...response })
    } catch (error) {
      return dispatch({ type: failSendInvite, error })
    }
  },

  resetSendInviteSuccess: () => dispatch => {
    return dispatch({ type: resetSendInviteSuccess })
  },

  resetErrorState: () => dispatch => {
    return dispatch({ type: resetErrorState })
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case requestSendInvite: {
      return {
        ...state,
        isLoading: true
      }
    }

    case successSendInvite: {
      return {
        ...state,
        isLoading: false,
        sendInviteSuccess: true
      }
    }

    case resetSendInviteSuccess: {
      return {
        ...state,
        sendInviteSuccess: false
      }
    }

    case failSendInvite: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }

    case resetErrorState: {
      return {
        ...state,
        error: null
      }
    }

    default:
      return state
  }
}
