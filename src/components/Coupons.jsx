import { Box, Button, Grid, Typography } from '@mui/material'
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import AutoDeleteTwoToneIcon from '@mui/icons-material/AutoDeleteTwoTone';
import React from 'react'

const Coupons = () => {
  return (
    <Box>
        <Grid xs={12} direction='column' paddingTop={2} paddingLeft={4} gap={0.5}>
            <Grid >
                <Typography variant='h6'>Coupons</Typography>
            </Grid>
            <Grid container direction='row' justifyContent='flex-end' paddingRight={4}>
                <Button variant='contained' size='small' sx={{bgcolor:'#faf0e6',color:'#212121',textTransform:'none'}}>Create Coupons</Button>
            </Grid>
            <Grid container direction='column' justifyContent='center' bgcolor='#faf0e6' marginTop={2}
             paddingY={3} paddingLeft={5} paddingRight={5} width='98%'>
                <Typography variant='h6'>Diwali20</Typography>
                <Typography variant='body1' paddingTop={2}>Desciption:-</Typography>
                <Grid xs={12} container direction='row' justifyContent='space-between' paddingTop={5}>
                    <Typography width='70%'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas beatae provident iusto recusandae quisquam labore tenetur accusamus praesentium exercitationem, cupiditate soluta fugit aliquam aut officia quibusdam numquam ab nesciunt. Neque odit repudiandae numquam cupiditate eos nulla quibusdam ab ea qui dolorum enim, nisi minus consequuntur voluptas quas corrupti distinctio.</Typography>
                    <Grid >
                        <Button><EditNoteTwoToneIcon fontSize='large' sx={{color:'#15a112'}}/></Button>
                        <Button><AutoDeleteTwoToneIcon fontSize='large' sx={{color:'#e31a1a'}}/></Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction='column' justifyContent='center' bgcolor='#faf0e6' marginTop={2}
             paddingY={3} paddingLeft={5} paddingRight={5} width='98%'>
                <Typography variant='h6'>Diwali20</Typography>
                <Typography variant='body1' paddingTop={2}>Desciption:-</Typography>
                <Grid xs={12} container direction='row' justifyContent='space-between' paddingTop={5}>
                    <Typography width='70%'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas beatae provident iusto recusandae quisquam labore tenetur accusamus praesentium exercitationem, cupiditate soluta fugit aliquam aut officia quibusdam numquam ab nesciunt. Neque odit repudiandae numquam cupiditate eos nulla quibusdam ab ea qui dolorum enim, nisi minus consequuntur voluptas quas corrupti distinctio.</Typography>
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

export default Coupons