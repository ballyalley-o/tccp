import React from 'react'
import { Box, List, ListItemText, Typography, Divider } from '@mui/material'
import { SDrawer, SListItem } from 'theme/style'
import { Button } from 'component'

interface NavDrawerProps {
  open: boolean
  onClose: () => void
}

const NavDrawer = ({ open, onClose }: NavDrawerProps) => {
  return (
    <SDrawer anchor='left' open={open} onClose={onClose}>
      <Box role='presentation' onClick={onClose} onKeyDown={onClose} sx={{ width: 250, padding: '.5em .5em', mt: 7 }}>
        <List>
          <ListItemText
            primary={
              <Typography variant='body1' fontWeight='bold'>
                Bootcamp
              </Typography>
            }
            sx={{ pl: 0.5 }}
          />
          <SListItem>
            <ListItemText primary={<Typography variant='subtitle2'>Find a Bootcamp</Typography>} />
          </SListItem>
          <SListItem>
            <ListItemText primary={<Typography variant='subtitle2'>Find a Bootcamp by Course</Typography>} />
          </SListItem>
          <SListItem>
            <ListItemText primary={<Typography variant='subtitle2'>Find a Bootcamp by Location</Typography>} />
          </SListItem>
          <Divider sx={{ height: 2, paddingTop: 1 }} />
          <ListItemText
            primary={
              <Typography variant='body1' fontWeight='bold'>
                Course
              </Typography>
            }
            sx={{ pl: 0.5, pt: 1 }}
          />
          <SListItem>
            <ListItemText primary={<Typography variant='subtitle2'>Take a Course</Typography>} />
          </SListItem>
          <SListItem>
            <ListItemText primary={<Typography variant='subtitle2'>Find a Course</Typography>} />
          </SListItem>
          <Divider sx={{ height: 2, paddingTop: 1 }} />
          <ListItemText
            primary={
              <Typography variant='body1' fontWeight='bold'>
                Resources
              </Typography>
            }
            sx={{ pl: 0.5, pt: 1 }}
          />
          <SListItem>
            <ListItemText primary={<Typography variant='subtitle2'>Scholarship Programmes</Typography>} />
          </SListItem>
          <SListItem>
            <ListItemText primary={<Typography variant='subtitle2'>Application Process</Typography>} />
          </SListItem>

          <Divider sx={{ height: 2, paddingTop: 1 }} />
          <ListItemText
            primary={
              <Typography variant='body1' fontWeight='bold'>
                Still Confused?
              </Typography>
            }
            sx={{ mt: 2, pl: 0.5 }}
          />
          <SListItem>
            <ListItemText primary={<Typography variant='subtitle2'>Ask a question on our forum</Typography>} />
          </SListItem>
          <Box
            sx={{
              margin: '1em 0',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button variant='outlined' color='primary' size='small' sx={{ width: '100%', boxShadow: 'none' }}>
              <Typography variant='subtitle2'>Contact Us</Typography>
            </Button>
          </Box>
        </List>
      </Box>
    </SDrawer>
  )
}

export default NavDrawer
