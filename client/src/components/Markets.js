import React from 'react'
import MainLayout from './layouts/MainLayout'
import { Table } from 'antd'

const data = [
  {
    key: '1',
    name: 'ASHton Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '30%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '20%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]

function Markerts() {
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra)
  }
  return (
    <MainLayout>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </MainLayout>
  )
}

export default Markerts
