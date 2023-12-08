import { Box, Button, Grid, List, ListItem, ListItemButton, Typography } from '@mui/material'
import React from 'react'

const menuitems=[
    'Dash Board','User','Service Provider','Services','Banner','Notifications','Coupenss'
]
const businessitems=['Support','Privacy Policy','Terms & Condition','Subscriptions','Invoice']
const SideBar = () => {
  return (
    <>
        <Box sx={{bgcolor:'#d9d9d9'}} height='100%'>
            <Grid xs={2} container direction='column' justifyContent='center' alignItems='center' sx={{p:'10px'}} >
                {/* Menu items */}
                <Typography variant='body1' sx={{paddingTop:'10px'}}>Menu</Typography>
                <List>
                    {   menuitems.map((item,index)=>(
                            <ListItem key={index}>
                            <ListItemButton sx={{p:'0'}}>
                                <Button variant='contained' size='small' fontSize='20px' sx={{whiteSpace:'nowrap',textTransform:'none',color:'#212121',bgcolor:'#fafafa',fontSize:'12px',fontWeight:'550'}} fullWidth>{item}</Button>
                            </ListItemButton>
                            </ListItem>
                      ))}
                </List>
                    
                {/* Business Items */}
                <Typography variant='body1'>Business</Typography>
                <List>
                    {   businessitems.map((item,index)=>(
                            <ListItem key={index}>
                            <ListItemButton sx={{p:'0'}}>
                                <Button variant='contained'fontSize='20px'  size='small' sx={{textTransform:'none',whiteSpace:'nowrap',width:'100%',color:'#212121',bgcolor:'#fafafa',fontSize:'12px',fontWeight:'550'}}>{item}</Button>
                            </ListItemButton>
                            </ListItem>
                      ))}
                </List>


            </Grid>
        </Box>
    </>
  )
}

export default SideBar