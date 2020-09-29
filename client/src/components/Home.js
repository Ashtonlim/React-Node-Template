import React, { useEffect } from 'react'
import Table from './subComponents/Table'
// import AreaChart from './subComponents/AreaChart'
import MainLayout from './layouts/MainLayout'

// const res = await fetch(`/users`, { method: 'GET' })
// const API = process.env.BASEAPI

const API = 'http://localhost:8000'

function Home() {
  useEffect(() => {
    const apiCall = async () => {
      const res = await fetch(`${API}/users`, { method: 'GET' })
      const data = await res.json()
      console.log(data)
    }
    // fetch(`/users`, { method: 'GET' })
    //   .then((res) => {
    //     console.log(res.json())
    //   })
    //   .catch((err) => console.log(err))
    apiCall()
  })
  return (
    <MainLayout>
      <section>
        {/* <AreaChart /> */}
        <Table />
      </section>
    </MainLayout>
  )
}

export default Home
