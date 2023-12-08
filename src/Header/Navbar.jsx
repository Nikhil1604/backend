import React from 'react'
import {AppBar, Box, Grid, IconButton, Toolbar, Typography} from '@mui/material'
import {Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  return (
    <Box>
        <AppBar sx={{bgcolor:'#fafafa'}} position='static'>
            <Toolbar>
            <Grid container alignItems='center'>
            <Grid xs={2}>
            <Typography variant='h4' component='div' color='text.primary' sx={{my:'0'}}>Coated Lens</Typography>
            </Grid>
            <Grid xs={5}>
            
                <IconButton >
                <MenuIcon  bgcolor='text.primary' sx={{fontSize:'40px'}} />  
                </IconButton>
            </Grid>
            
            <Grid xs={5} container  direction='row' justifyContent='flex-end'>
            <Button variant='contained' sx={{bgcolor:'#ff258d'}} doubleElivated >Logout</Button>
            </Grid>
            </Grid>

            </Toolbar>
        </AppBar>
        
    </Box>
  )
}

export default Navbar