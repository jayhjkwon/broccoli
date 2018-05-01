class InvitationService {
  async requestInvitation(name, email) {
    try {
      const response = await fetch(
        'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
        {
          method: 'post',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email })
        }
      )
      const json = await response.json()

      if (response.ok) {
        return json
      }

      throw json
    } catch (error) {
      throw error
    }
  }
}

export default new InvitationService()
