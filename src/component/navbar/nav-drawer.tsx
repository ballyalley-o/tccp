import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Box, List, ListItemText, Typography, Divider } from '@mui/material'
import { SDrawer, SListItem } from 'theme/style'
import { Button } from 'component'

interface NavDrawerProps {
  open: boolean
  onClose: () => void
}

const NavDrawer = ({ open, onClose }: NavDrawerProps) => {
  return (
    <Fragment>
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
              <Link to='/find-bootcamp-by-course' style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={<Typography variant='subtitle2'>Find a Bootcamp</Typography>} />
              </Link>
            </SListItem>
            <SListItem>
              <Link to='/find-bootcamp-by-course' style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={<Typography variant='subtitle2'>Find a Bootcamp by Course</Typography>} />
              </Link>
            </SListItem>
            <SListItem>
              <Link to='/find-bootcamp-by-course' style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={<Typography variant='subtitle2'>Find a Bootcamp by Location</Typography>} />
              </Link>
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
              <Link to='/find-bootcamp-by-course' style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={<Typography variant='subtitle2'>Take a Course</Typography>} />
              </Link>
            </SListItem>
            <SListItem>
              <Link to='/course' style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={<Typography variant='subtitle2'>Find a Course</Typography>} />
              </Link>
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
              <Link to='/find-bootcamp-by-course' style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={<Typography variant='subtitle2'>Scholarship Programmes</Typography>} />
              </Link>
            </SListItem>
            <SListItem>
              <Link to='/application' style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={<Typography variant='subtitle2'>Application Process</Typography>} />
              </Link>
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
              <Link to='/find-bootcamp-by-course' style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={<Typography variant='subtitle2'>Ask a question on our forum</Typography>} />
              </Link>
            </SListItem>
            <Box
              sx={{
                margin: '1em 0',
                display: 'flex',
                justifyContent: 'center'
              }}>
              <Button variant='outlined' color='primary' size='small' sx={{ width: '100%', boxShadow: 'none' }}>
                <Typography variant='subtitle2'>Contact Us</Typography>
              </Button>
            </Box>
          </List>
        </Box>
      </SDrawer>
    </Fragment>
  )
}

export default NavDrawer
