import styled from 'styled-components'
import { Modal } from 'react-bootstrap'

export default styled(Modal)`
  .modal-dialog {
    @media (min-width: 768px) {
      margin: 0 !important;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) !important;
    }
  }
`
