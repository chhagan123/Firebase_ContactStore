import React from 'react'
import Sidenav from '../../components/Sidenav'
import TopNav from '../../components/TopNav'
import {Flex,Box} from  '@chakra-ui/react'
import DashboardLayout from '../../components/DashboardLayout'
import Portfollio from './Components/Portfollio'

const Dashboard = () => {
  return (
    <DashboardLayout title='Dashboard' mt='6'>
      <Portfollio/>

    </DashboardLayout>

     
     
    
  )
}

export default Dashboard
