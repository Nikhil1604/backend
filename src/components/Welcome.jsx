import React from 'react'
import Typography from '@mui/material/Typography'
import Grid  from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box, CssBaseline } from '@mui/material'




const Welcome = () => {

    return (
    <Grid container spacing={1} xs={{height:'100vh'}}> 
        <CssBaseline/>
        <Grid display='flex' direction='column' justifyContent='center' justifyItems='center' minHeight='100vh' xs={6} sx={{bgcolor:'#ffebee'}}>    
        <Typography variant="h1" align='center' xs={{height:'100vh'}}>
        Coated Lens
        </Typography>
        </Grid>


        <Grid xs={6} display='flex' justifyContent='center' alignItems='center' minHeight='100vh' sx={{bgcolor:'#757575'}}>
        <Box textAlign='center' borderRadius={5} sx={{width:'600px', height:'600px', bgcolor:'#fafafa'}}>
        <Typography variant='h3'>Welcome Admin</Typography>
        <TextField variant='outlined' label="Username" sx={{width:'450px',py:2}} gutterBottom></TextField>
        <TextField varient='outlined' label="Password" sx={{width:'450px',py:2}} gutterBottom></TextField>
        <Typography variant='body1' sx={{width:'450px',py:2}} gutterBottom>Reset Password</Typography>
        <Button variant="contained" sx={{width:'450px',py:2,backgroundColor:'#e91e63',borderRadius:'30px'}} gutterBottom>Sign Up</Button>
        </Box>
        </Grid>
    </Grid>
  )
}

export default Welcome