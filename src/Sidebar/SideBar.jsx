import { Box, Button, Grid, List, ListItem, ListItemButton, Typography } from '@mui/material'
import React from 'react'

const menuitems=[
    'Dash Board','User','Service Provider','Services','Banner','Notifications','Coupenss'
]
const businessitems=['Support','Privacy Policy','Turns & Condition','Subscriptions','Invoice']
const SideBar = () => {
  return (
    <>
        <Box>
            <Grid xs={2} container direction='column' justifyContent='center' alignItems='center' >
                {/* Menu items */}
                <Typography variant='h6'>Menu</Typography>
                <List>
                    {   menuitems.map((item,index)=>(
                            <ListItem key={index}>
                            <ListItemButton sx={{p:'0'}}>
                                <Button variant='contained' size='small' sx={{width:'100%'}}>{item}</Button>
                            </ListItemButton>
                            </ListItem>
                      ))}
                </List>
                    
                {/* Business Items */}
                <Typography variant='h6'>Business</Typography>
                <List>
                    {   businessitems.map((item,index)=>(
                            <ListItem key={index}>
                            <ListItemButton sx={{p:'0'}}>
                                <Button variant='contained' size='small' sx={{width:'100%'}}>{item}</Button>
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