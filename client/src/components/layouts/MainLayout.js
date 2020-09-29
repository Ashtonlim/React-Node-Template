import React, { Fragment } from 'react'
import { Row, Col } from 'antd'

import Header from './layoutComponents/Header'
import MobileNavbar from './layoutComponents/MobileNavbar'
// import CompanyInfo from "./components/companyInfoPage/CompanyInfo";

const MainLayout = ({ children }) => (
  <>
    <Header />
    <Row justify="center">
      <Col xs={{ span: 20 }}>
        <main>
          <Fragment>{children}</Fragment>
        </main>
      </Col>

      <Col xs={{ span: 24 }} md={{ span: 0 }}>
        <MobileNavbar />
      </Col>
    </Row>
  </>
)

export default MainLayout
