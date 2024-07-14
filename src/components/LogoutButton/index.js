import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const LogoutButton = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button type="button" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
