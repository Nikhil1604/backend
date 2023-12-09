import { Box, Button, Grid, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import AutoDeleteTwoToneIcon from '@mui/icons-material/AutoDeleteTwoTone';
import React from 'react'

const subsrib=[
    ['Monthely','Rs 1000'],
    ['Half Yearly','RS 5000'],
    ['Quartely','RS 2500'],
    ['Yearly','RS 10000']
]

const Subscription = () => {
  return (
    <Box>
        <Grid xs={12} container direction='column' paddingTop={2} paddingLeft={4}>
                <Grid xs={12} paddingY={1}>
                        <Typography variant='subtitle1'>Subsciption</Typography>
                </Grid>
            <Grid container direction='row' justifyContent='space-between'>
            <TextField placeholder="Search" size='small'
            sx={{bgcolor:'#faf0e6',border:'none'}}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),}}/>
                <Button variant='contained' size='small' sx={{bgcolor:'#FAF0E6',color:'#000',borderColor:'#000'}}>Add Subsciption</Button>
            </Grid>
            <Grid paddingTop={2}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead >
                                <TableCell sx={{textAlign:'center'}}>Subscription</TableCell>
                                <TableCell sx={{textAlign:'center'}}>Cost</TableCell>
                                <TableCell sx={{textAlign:'center'}}>Action</TableCell>
                            </TableHead >
                            <TableBody bgcolor='#faf0e6'>

                            { subsrib.map((innerArray,outerIndex)=>(

                                <TableRow key={outerIndex} sx={{textAlign:'center'}}>
                                    {
                                        innerArray.map((item,innerIndex)=>(
                                            <TableCell key={innerIndex} sx={{textAlign:'center'}}>{item}</TableCell>
                                        ))}
                                        <TableCell sx={{textAlign:'center'}}>
                                        <Button><EditNoteTwoToneIcon fontSize='large' sx={{color:'#15a112'}}/></Button>
                                        <Button><AutoDeleteTwoToneIcon fontSize='large' sx={{color:'#e31a1a'}}/></Button>
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

export default Subscription