import React from 'react'
import Navbar from '../Header/Navbar'
import SideBar from '../Sidebar/SideBar'
import DashDetails from './DashDetails'
import { Grid } from '@mui/material'

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <Grid container direction='row' xs={12}>
    <Grid xs={2}>
    <SideBar/>
    </Grid>
    <Grid xs={10}>
    <DashDetails/>
    </Grid>
    </Grid>
    </>
  )
}

export default Dashboard