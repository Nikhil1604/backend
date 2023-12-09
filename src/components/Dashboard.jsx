import React from 'react'
import Navbar from '../Header/Navbar'
import SideBar from '../Sidebar/SideBar'
// import DashDetails from './DashDetails'
import { Grid } from '@mui/material'
// import Coupons from './Coupons'
// import Subscription from './Subscription'
// import Invoices from './Invoices'
import Notifications from './Notifications'
// import Conditions from './Conditions'
// import Policy from './Policy'
// import ServiceProviderView from './ServiceProviderView'
// import User from './User'
// import ServiceProvider from './ServiceProvider'

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <Grid container direction='row' justifyContent='center' xs={12}>
    <Grid xs={2} fullwidth>
    <SideBar/>
    </Grid>
    <Grid xs={10}>
    {/* <DashDetails/> */}
    {/* <User/> */}
    {/* <ServiceProvider /> */}
    {/* <ServiceProviderView /> */}
    {/* <Policy/> */}
    {/* <Conditions/> */}
    {/* <Coupons/> */}
    {/* <Subscription /> */}
    {/* <Invoices/> */}
    <Notifications />
    </Grid>
    </Grid>
    </>
  )
}

export default Dashboard