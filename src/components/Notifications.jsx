import { Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import AutoDeleteTwoToneIcon from '@mui/icons-material/AutoDeleteTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const Notifications = () => {
  return (
    <Box>
    <Grid xs={12} container direction='column' paddingTop={1} paddingLeft={5}>
            <Grid xs={12} paddingY={1}>
                <Typography variant='h6'>Notifications</Typography>
            </Grid>
            <Grid container direction='row' paddingTop={2} >
                    <Grid xs={2}>
                    <Button variant='contained'  size='small' sx={{width:'95%',bgcolor:'#ff258d',color:'#000'}}>Notify User</Button>
                    </Grid>
                    <Grid xs={3}>
                    <Button variant='contained' size='small' sx={{width:'95%',bgcolor:'#ff258d',color:'#000'}}>Notify Service Provider</Button>
                    </Grid>
                
            </Grid>

            <Grid container direction='row' paddingTop={1} >
                    <Grid xs={2}>
                        <Button variant='contained'  size='small' sx={{width:'95%',bgcolor:'#ff258d',color:'#000'}}>Excel</Button>
                    </Grid>
                    <Grid xs={2}>
                        <Button variant='contained' size='small' sx={{width:'95%',bgcolor:'#ff258d',color:'#000'}}>Pdf</Button>
                    </Grid>
                    <Grid xs={2}>
                        <Button variant='contained' size='small' sx={{width:'95%',bgcolor:'#ff258d',color:'#000'}}>Print</Button>
                    </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='flex-end' paddingRight={4}>
            <TextField placeholder="Search" size='small'
            sx={{bgcolor:'#faf0e6',borderColor:'inherit'}}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),}}/>
            </Grid>

            <Typography variant='h6'>Notifications</Typography>

            <Grid container direction='column' justifyContent='center' bgcolor='#faf0e6' marginTop={2}
             paddingY={3} paddingLeft={5} paddingRight={5} width='98%'>
                <Typography variant='h6'>Lorum Ispum</Typography>
                
                <Grid xs={12} container direction='row' justifyContent='space-between' paddingTop={1}>
                    <Typography width='70%'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas beatae provident iusto recusandae quisquam labore tenetur accusamus praesentium exercitationem, cupiditate soluta fugit aliquam aut officia quibusdam numquam ab nesciunt. </Typography>
                    <Grid >
                        <Button><EditNoteTwoToneIcon fontSize='large' sx={{color:'#15a112'}}/></Button>
                        <Button><AutoDeleteTwoToneIcon fontSize='large' sx={{color:'#e31a1a'}}/></Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction='column' justifyContent='center' bgcolor='#faf0e6' marginTop={2}
             paddingY={3} paddingLeft={5} paddingRight={5} width='98%'>
                <Typography variant='h6'>Lorum Ispum</Typography>
                
                <Grid xs={12} container direction='row' justifyContent='space-between' paddingTop={1}>
                    <Typography width='70%'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas beatae provident iusto recusandae quisquam labore tenetur accusamus praesentium exercitationem, cupiditate soluta fugit aliquam aut officia quibusdam numquam ab nesciunt.</Typography>
                    <Grid >
                        <Button><EditNoteTwoToneIcon fontSize='large' sx={{color:'#15a112'}}/></Button>
                        <Button><AutoDeleteTwoToneIcon fontSize='large' sx={{color:'#e31a1a'}}/></Button>
                    </Grid>
                </Grid>
            </Grid>
            

    </Grid>
        
    </Box>
  )
}

export default Notifications