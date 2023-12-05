import { Box, Button, Grid, IconButton, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
const userdata=[
    ['Tanmay Awate','T.awate@gmail.com','23-05-23','tannma@gmail.com','+91 1234567890','IND','Pune','411001'],
    ['Tanmay Awate','T.awate@gmail.com','23-05-23','tannma@gmail.com','+91 1234567890','IND','Pune','411001'],
    ['Tanmay Awate','T.awate@gmail.com','23-05-23','tannma@gmail.com','+91 1234567890','IND','Pune','411001'],
    ['Tanmay Awate','T.awate@gmail.com','23-05-23','tannma@gmail.com','+91 1234567890','IND','Pune','411001'],
    

]

const User = () => {
  return (
    <Box>
        <Grid xs={12} direction='column' paddingTop={1} paddingLeft={5} sx={{bgcolor:'lightgreen'}}>
           {/* First part */}
            <Grid xs={12}>
                <Typography variant='h5'>Users</Typography>
            </Grid>
            {/* Second Part */}
            <Grid xs={12} container paddingY={2} direction='row' justifyContent='flex-start' alignItems='center'>
                <Grid xs={2}>
                    <Button variant='contained' size='madium'>Excel</Button>
                </Grid>
                <Grid xs={2}>
                    <Button variant='contained' size='madium'>PDF</Button>
                </Grid>
                <Grid xs={2}>
                    <Button variant='contained' size='madium'>Print</Button>
                </Grid>
                
                <Grid  xs={6} container direction='column' alignItems='center' justifyContent='flex-end'>
                    <TextField variant='outlined' size='small' label='Search' sx={{width:'80%'}}
                    inputProps={{
                        startAdornment:(
                            <InputAdornment position='end'>
                                <IconButton>
                                <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    />
                </Grid>
                    
            </Grid>

            {/* Third Part tabel data */}
            <Grid xs={12}>
                <TableContainer component={Paper}>
                    <Table justifyContent='center' alignItems='center'>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontWeight:'550'}}>Name</TableCell>
                                <TableCell sx={{fontWeight:'550'}}>UserName</TableCell>
                                <TableCell sx={{fontWeight:'550'}}>Date Register</TableCell>
                                <TableCell sx={{fontWeight:'550'}}>Email Id</TableCell>
                                <TableCell sx={{fontWeight:'550'}}>Contact No</TableCell>
                                <TableCell sx={{fontWeight:'550'}}>Country</TableCell>
                                <TableCell sx={{fontWeight:'550'}}>City</TableCell>
                                <TableCell sx={{fontWeight:'550'}}>Pincode</TableCell>
                                <TableCell sx={{fontWeight:'550'}}>Action</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody bgcolor='lightcyan'>
                            { userdata.map((innerArray,outerindex) => (
                                <TableRow key={outerindex}>
                                    { innerArray.map((item,innerIndex) => (
                                        <TableCell key={innerIndex}>{item}</TableCell>
                                    ))}
                                    <TableCell>
                                    <Grid container direction='column' gap={1}>
                                    <Button variant='contained' color='error' size='small'>Block</Button>
                                    <Button variant='contained' color='success' size='small'>Unblock</Button>
                                    </Grid>
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

export default User