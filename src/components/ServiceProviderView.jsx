import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const ServiceProviderView = () => {
  return (
    <Box>
        <Grid xs={12} container direction='column'>
            {/* Heading */}
            <Grid xs={12} paddingY={1} paddingLeft={5}>
                <Typography> Service Provider View</Typography>
            </Grid>
            {/* Buttons */}
            <Grid xs={12} container direction='row' paddingY={1} paddingLeft={5}>
                <Grid xs={2}>
                    <Button variant='contained' size='madium' sx={{width:'95%',bgcolor:'#ff258d',color:'#212121'}}>Excel</Button>
                </Grid>
                <Grid xs={2}>
                    <Button variant='contained' size='madium' sx={{width:'95%',bgcolor:'#ff258d',color:'#212121'}}>PDF</Button>
                </Grid>
                <Grid xs={2}>
                    <Button variant='contained' size='madium' sx={{width:'95%',bgcolor:'#ff258d',color:'#212121'}}>Print</Button>
                </Grid>
            </Grid>

            <Grid xs={12} container direction='row' paddingY={2}>

                <Grid xs={9} container direction='column'>
                    <Grid container direction='row'>
                        <Grid xs={3} container alignItems='center' direction='row' paddingLeft={5}>
                            <Typography>Tanmay Awate</Typography>
                            <Button variant='contained' color='success' sx={{marginLeft:'20px', borderRadius:'25',bgcolor:'#3cc03c'}} size='small'>Active</Button>
                        </Grid>

                        <Grid xs={9} container direction='column' paddingRight={10} justifyContent='center' alignItems='flex-end' gap={0.5}>
                            <Button sx={{width:'25%',color:'#b3b3b3'}} size='small'>UnBanned Profile</Button>
                            <Button variant='contained' sx={{width:'25%',bgcolor:'#ff0000',color:'#212121'}} size='small'>Bann Profile</Button>
                        </Grid>
                    </Grid>
                    </Grid>

                    {/* Profile detials */}
                    <Grid xs={9} container direction='column'marginY={1} paddingY={2} bgcolor='#faf0e6'>
                        <Grid container direction='row' justifyContent='space-between' paddingLeft={5}>
                            <Grid xs={3}>
                                <Typography>Total customer contact</Typography>
                                <Typography>75</Typography>
                            </Grid>
                            <Grid xs={3}>
                                <Typography>Total Services</Typography>
                                <Typography>4</Typography>
                            </Grid>
                            <Grid xs={3}>
                                <Typography> Customer Rating</Typography>
                                <Typography>4.5</Typography>
                            </Grid>
                            <Grid xs={3}>
                                <Typography>Membership Till Details</Typography>
                                <Typography>25/12/2023</Typography>
                            </Grid>

                        </Grid>

                        <Grid container direction='row' paddingTop={2} paddingLeft={5}>
                            <Grid xs={12}>
                                <Typography >Service Categories</Typography>
                            </Grid>
                            <Grid xs={12}>
                                <Grid xs={9} container direction='row' paddingTop={2} justifyContent='space-beteen'>
                                    <Grid xs={3}>
                                    <Button variant='contained'  size='small' sx={{width:'95%',bgcolor:'#ff258d',color:'#212121'}}>PhotoGrapgy</Button>
                                    </Grid>

                                    <Grid xs={3}>
                                    <Button variant='contained' size='small' sx={{width:'95%',bgcolor:'#ff258d',color:'#212121'}}>VideoGrapgy</Button>
                                    </Grid>

                                    <Grid xs={3}>
                                    <Button variant='contained' size='small' sx={{width:'95%',bgcolor:'#ff258d',color:'#212121'}}>Gesign</Button>
                                    </Grid>

                                    <Grid xs={3}>
                                    <Button variant='contained' size='small' sx={{width:'95%',bgcolor:'#ff258d',color:'#212121'}}>Print</Button>
                                    </Grid>

                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* owners Details */}
                    <Grid xs={9} container direction='row' paddingTop={2}>
                        <Grid xs={4} paddingLeft={5}>
                            <Typography>Owners Details</Typography>


                        </Grid>

                        <Grid xs={4} container justifyContent={'center'} direction='column' >
                                <TextField variant='standard'  label='Contact' size='small'sx={{width:'75%'}}/>
                                <TextField variant='standard' label='Enter Your Name' size='small' sx={{width:'75%'}}/>
                                <TextField variant='standard' label='Email Id' size='small'sx={{width:'75%'}}/>
                                <TextField variant='standard' label='Date of Birth' size='small' sx={{width:'75%'}}/>
                                <TextField variant='standard' label='Gender' size='small' sx={{width:'75%'}}/>
                                <TextField variant='standard' label='Address' size='small'sx={{width:'75%'}}/>
                        </Grid>

                        <Grid xs={4} container direction='column' justifyContent='center' alignItems='flex-start' paddingLeft={2}>
                            <Typography>Bio</Typography>
                            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam, quaerat cupiditate, quo dolore itaque illum eveniet, pariatur quidem aliquam dolor? </Typography>
                            <Typography>Portfolio</Typography>
                        </Grid>

                    </Grid>

                

            </Grid>

        </Grid>

    </Box>
  )
}

export default ServiceProviderView


// https://www.figma.com/file/1JPM637EZkNezdFQI4xL6w/Event-Management-App?type=design&node-id=146-1170&mode=design