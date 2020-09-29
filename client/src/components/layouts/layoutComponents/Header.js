import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SBAC from '../../subComponents/SBAC'
import { Row, Col } from 'antd'

const LoggedInOutView = (props) => {
  // console.log("Header");
  //   const { state } = useContext(globalContext);

  if (false) {
    return (
      <React.Fragment>
        <li className="nav-item">
          <Link to="/portfolio">portfolio</Link>
        </li>
        <li className="nav-item">
          {/* <Link to={`/${encodeURIComponent(state.user.username)}`}>
            {state.user.username}
            username
          </Link> */}
        </li>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/register">Register</Link>
        </li>
      </React.Fragment>
    )
  }
}

const Header = () => {
  const [search, setSearch] = useState('')
  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = (v, e) => {
    // do sth
    console.log(search)
  }

  return (
    <header className="App-header shadow">
      <Row
        style={{ width: '100%', padding: '0px 20px' }}
        justify="center"
        align="middle"
      >
        <Col xs={{ span: 6 }} md={{ span: 3 }}>
          <Link id="logo" to="/">
            Valley
          </Link>
        </Col>

        <Col xs={{ span: 18 }} md={{ span: 10 }}>
          <SBAC />
        </Col>

        <Col xs={{ span: 0 }} md={{ span: 11 }}>
          <nav style={{ justifyContent: 'flex-end' }}>
            <ul className="ruRow nav-items">
              <li className="nav-item">
                <Link to="/markets">Markets</Link>
              </li>

              <LoggedInOutView />
            </ul>
          </nav>
        </Col>
      </Row>
    </header>
  )
}

export default Header
