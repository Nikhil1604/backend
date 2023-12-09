import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const inv=[
    ['1','Verdishnu Technology','01/05/20223','01/06/2023',' Rs 5000/-'],
    ['1','Verdishnu Technology','01/05/20223','01/06/2023',' Rs 5000/-'],
    ['1','Verdishnu Technology','01/05/20223','01/06/2023',' Rs 5000/-'],
    ['1','Verdishnu Technology','01/05/20223','01/06/2023',' Rs 5000/-'],
    ['1','Verdishnu Technology','01/05/20223','01/06/2023',' Rs 5000/-'],
    ['1','Verdishnu Technology','01/05/20223','01/06/2023',' Rs 5000/-'],
    ['1','Verdishnu Technology','01/05/20223','01/06/2023',' Rs 5000/-'],
]

const Invoices = () => {
  return (
    <Box>
        <Grid xs={12} container direction='column' paddingTop={2} paddingLeft={4}>
            <Grid xs={12} paddingY={1}>
                    <Typography variant='h6'>Invoices</Typography>
            </Grid>
            <Grid paddingTop={5}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableCell>Id</TableCell>
                            <TableCell>Serviec Provider</TableCell>
                            <TableCell>Subscrption Date</TableCell>
                            <TableCell>End Date</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Action</TableCell>
                        </TableHead>
                        <TableBody sx={{bgcolor:'#faf0e6'}}>
                        { inv.map((innerArray,outerIndex)=>(

                            <TableRow key={outerIndex}>
                                {
                                    innerArray.map((item,innerIndex)=>(
                                        <TableCell key={innerIndex}>{item}</TableCell>
                                    ))}
                                    <TableCell>
                                        <Button variant='contained' size='small' sx={{bgcolor:'#ff258d'}}>View</Button>
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

export default Invoices