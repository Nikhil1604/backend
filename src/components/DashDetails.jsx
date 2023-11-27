import React from 'react'
import { Typography,Grid, TableContainer, Paper, Table, TableHead, TableBody, TableCell } from '@mui/material'

const DashDetails = () => {
  return (
    <box>
        <Grid container direction='column' xs={10} gap={2} paddingLeft={5} >
            {/* Total users */}
            <Grid container direction='row' justifyContent='flex-start' p={3} xs={6} marginTop={5} sx={{bgcolor:'#fff3e0',borderRadius:'20px'}} >
                <Typography variant='h6'>Total Users</Typography>
                <TableContainer component={Paper}>
                <Table sx={{bgcolor:'#fff'}}>
                    <TableHead>
                        <TableCell>
                        Today
                        </TableCell>
                        <TableCell>
                        Past 7 Days
                        </TableCell>
                        <TableCell>
                        Past 1 Month
                        </TableCell>
                        <TableCell>
                        Total
                        </TableCell>
                    </TableHead>
                    <TableBody>
                        <TableCell>
                        05
                        </TableCell>
                        <TableCell>
                        50
                        </TableCell>
                        <TableCell>
                        50
                        </TableCell>
                        <TableCell>
                        50
                        </TableCell>
                    </TableBody>
                </Table>
                </TableContainer>

                
            </Grid>
            {/* Total service Provider */}
            <Grid container direction='row' justifyContent='flex-start' p={3} xs={6} sx={{bgcolor:'#fff3e0' ,borderRadius:'20px'}} >
                <Typography variant='h6'>Total Service Provider</Typography>
                <TableContainer component={Paper}>
                <Table sx={{bgcolor:'#fff'}}>
                    <TableHead>
                        <TableCell>
                        PhotoGraphy
                        </TableCell>
                        <TableCell>
                        VideoGraphy
                        </TableCell>
                        <TableCell>
                        Design
                        </TableCell>
                        <TableCell>
                        Printing
                        </TableCell>
                    </TableHead>
                    <TableBody>
                        <TableCell>
                        05
                        </TableCell>
                        <TableCell>
                        50
                        </TableCell>
                        <TableCell>
                        50
                        </TableCell>
                        <TableCell>
                        50
                        </TableCell>
                    </TableBody>
                </Table>
                </TableContainer>

                
            </Grid>
            {/* Total Business Earn */}
            <Grid container direction='row' justifyContent='flex-start' p={3} xs={6} sx={{bgcolor:'#fff3e0' ,borderRadius:'20px'}} >
                <Typography variant='h6'>Total Business Earn</Typography>
                <TableContainer component={Paper}>
                <Table sx={{bgcolor:'#fff'}}>
                    <TableHead>
                        <TableCell>
                        Today
                        </TableCell>
                        <TableCell>
                        Past 7 Days
                        </TableCell>
                        <TableCell>
                        Past 1 Month
                        </TableCell>
                        <TableCell>
                        Total
                        </TableCell>
                    </TableHead>
                    <TableBody>
                        <TableCell>
                        5000$
                        </TableCell>
                        <TableCell>
                        40000$
                        </TableCell>
                        <TableCell>
                        150000$
                        </TableCell>
                        <TableCell>
                        500000$
                        </TableCell>
                    </TableBody>
                </Table>
                </TableContainer>

                
            </Grid>
        </Grid>
    </box>
  )
}

export default DashDetails