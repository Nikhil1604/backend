import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React from 'react'

const userdata1=[
    ['Tanmay Awate','T.awate@gmail.com','23-05-23','tannma@gmail.com','+91 1234567890','Photograpgy','IND','Pune','411001'],
    ['Tanmay Awate','T.awate@gmail.com','23-05-23','tannma@gmail.com','+91 1234567890','CinemoGraphy','IND','Pune','411001'],
    ['Tanmay Awate','T.awate@gmail.com','23-05-23','tannma@gmail.com','+91 1234567890','Photograpgy','IND','Pune','411001'],
    ['Tanmay Awate','T.awate@gmail.com','23-05-23','tannma@gmail.com','+91 1234567890','CinemoGraphy','IND','Pune','411001'],
    ['Tanmay Awate','T.awate@gmail.com','23-05-23','tannma@gmail.com','+91 1234567890','Photograpgy','IND','Pune','411001'],
    ['Tanmay Awate','T.awate@gmail.com','23-05-23','tannma@gmail.com','+91 1234567890','CinemoGraphy','IND','Pune','411001'],
    ['Tanmay Awate','T.awate@gmail.com','23-05-23','tannma@gmail.com','+91 1234567890','CinemoGraphy','IND','Pune','411001'],

]


const ServiceProvider = () => {
  return (
    <Box>
        <Grid xs={12} container direction='column' paddingTop={2}>
            <Grid xs={12} paddingY={1}>
                <Typography>Service Provider</Typography>
            </Grid>

            <Grid container direction='row'>

                <Grid xs={8} container direction='row' sx={{paddingTop:'5px'}} alignItems='baseline' justifyContent='center' >
                    <Grid xs={3}>
                    <Button variant='contained'  size='madium' sx={{width:'95%'}}>Active</Button>
                    </Grid>
                    <Grid xs={3}>
                    <Button variant='contained' size='madium' sx={{width:'95%'}}>Banned</Button>
                    </Grid>
                    <Grid xs={3}>
                    <Button variant='contained' size='madium' sx={{width:'95%'}}>Pending</Button>
                    </Grid>
                    <Grid xs={3}>
                    <Button variant='contained' size='madium' sx={{width:'95%'}}>Sign Up Only</Button>
                    </Grid>
                    
                </Grid>
                <Grid xs={4} justifyContent='center' alignItems='baseline'>
                    <TextField variant='outlined' label='Search' size='small' sx={{width:'90%'}}/>
                </Grid>
                
            </Grid>
            <Grid container direction='row'>
                <Grid xs={8} container direction='row'>
                        <Grid xs={3}>
                        <Button variant='contained' size='madium' sx={{width:'95%',marginTop:'5px'}}>Excel</Button>
                        </Grid>
                        <Grid xs={3}>
                        <Button variant='contained' size='madium' sx={{width:'95%',marginTop:'5px'}}>PDF</Button>
                        </Grid>
                        <Grid xs={3}>
                        <Button variant='contained' size='madium' sx={{width:'95%',marginTop:'5px'}}>Print</Button>
                        </Grid>
                </Grid>
            </Grid>
            {/* data */}
            <Grid>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>User Name</TableCell>
                                <TableCell>Date Register</TableCell>
                                <TableCell>Email id</TableCell>
                                <TableCell>Contact Number</TableCell>
                                <TableCell>Services</TableCell>
                                <TableCell>Country</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Pincode</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            { userdata1.map((innerArray,outerIndex)=>(

                                <TableRow key={outerIndex}>
                                    {
                                        innerArray.map((item,innerIndex)=>(
                                            <TableCell key={innerIndex}>{item}</TableCell>
                                        ))}
                                        <TableCell>
                                            <Button variant='contained' size='small'>View</Button>
                                        </TableCell>
                                
                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            

        </Grid>
    </Box>
  )
}

export default ServiceProvider