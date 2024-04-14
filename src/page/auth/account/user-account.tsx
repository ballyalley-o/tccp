import React, { useEffect } from 'react'
import { ICON_NAME, useIcon } from 'hook'
import { CardMedia, Box, Typography, TextField, Button, Avatar, Grid, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { MotionLazyContainer } from 'component/motion'
import { BootcampCard } from 'section/bootcamp'
import { DefaultAvatar } from 'component/avatar'
import { useAccountQuery } from 'store/slice'
import { SCard } from 'theme/style'
import { ASSET } from 'config'
import { mockBootcamp } from '_mock'

const UserAccount = () => {
  const theme = useTheme()
  const { data: account, isLoading, refetch, error } = useAccountQuery({}) as any
  const { Icon, iconSrc: editIconSrc } = useIcon(ICON_NAME.EDIT)
  const { iconSrc: downIconSrc } = useIcon(ICON_NAME.CHEVRON_DOWN)

  const date = new Date(account?.data?.createdAt)
  const year = date.getFullYear()
  const fullName = account?.data?.firstname + ' ' + account?.data?.lastname

  return (
    <MotionLazyContainer>
      <Box>
        <CardMedia component='img' alt='Contemplative Reptile' height='400' image={ASSET.WAVES_BG} title='Contemplative Reptile' />
      </Box>
      <Box
        sx={{
          margin: 10,
          px: 10,
          height: '100vh'
        }}>
        <Grid container flexDirection='row' spacing={2} sx={{ mt: 8, display: 'flex' }}>
          <Grid item sm={3}>
            <Box>
              <DefaultAvatar
                firstName={account?.data?.firstname}
                lastName={account?.data?.lastname}
                isLarge
                sx={{
                  width: 150,
                  height: 150
                }}
              />
            </Box>
            <Box flexGrow={1}>
              <Box py={2} pb={5}>
                <Typography variant='h5' fontWeight='bold' gutterBottom>
                  {account?.data?.username || '@ohnDoe'}
                </Typography>
                <Typography variant='subtitle2' gutterBottom>
                  {'member since ' + year}
                </Typography>
              </Box>

              <Box mb={2}>
                <Divider />
              </Box>
              <TextField
                variant='outlined'
                label='Full Name'
                value={fullName}
                style={{ marginTop: '1rem' }}
                fullWidth
                InputProps={{
                  sx: {
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    },
                    fontWeight: 'bold'
                  }
                }}
              />
              <TextField
                variant='outlined'
                label='Location'
                value={account?.data?.location}
                style={{ marginTop: '1rem' }}
                fullWidth
                InputProps={{
                  sx: {
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    },
                    fontWeight: 'bold'
                  }
                }}
              />
              <TextField
                variant='outlined'
                label='Email'
                value={account?.data?.email}
                style={{ marginTop: '1rem' }}
                fullWidth
                InputProps={{
                  sx: {
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    },
                    fontWeight: 'bold'
                  }
                }}
              />
            </Box>
          </Grid>
          <Grid item sm={9}>
            <SCard
              sx={{
                width: '100%',
                display: 'flex',
                bgcolor: 'transparent'
              }}>
              <Box flexGrow={1}>
                <Box pb={5}>
                  <Grid container>
                    <Grid item sm={12} display='flex' justifyContent='flex-end'>
                      <Typography variant='h3' fontWeight='bold' gutterBottom>
                        {account?.data?.firstname}
                      </Typography>
                    </Grid>
                    <Grid item sm={12} display='flex' justifyContent='flex-end'>
                      <Icon
                        icon={editIconSrc}
                        width={25}
                        sx={{
                          cursor: 'pointer',
                          color: theme.palette.common.white,
                          backgroundColor: theme.palette.primary.main,
                          padding: '0.5rem',
                          borderRadius: '.4rem',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)'
                          }
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Typography variant='body2' my={2}>
                  Current Bootcamp:
                </Typography>
                <Divider
                  sx={{
                    height: 2,
                    borderStyle: 'solid',
                    borderColor: 'secondary.main',
                    borderWidth: 5
                  }}
                />

                <BootcampCard bootcamp={mockBootcamp[0]} />
                <Grid container spacing={2}>
                  <Grid item lg={3}>
                    <Typography variant='h6' fontWeight='bold' gutterBottom>
                      Courses:
                    </Typography>
                    <Accordion sx={{ boxShadow: 'none' }}>
                      <AccordionSummary expandIcon={<Icon icon={downIconSrc} />} aria-controls='panel1a-content' id='panel1a-header'>
                        <Typography variant='overline'>Student Record: </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  <Grid item lg={9}>
                    {/* accordion */}
                    <Accordion sx={{ boxShadow: 'none' }}>
                      <AccordionSummary expandIcon={<Icon icon={downIconSrc} />} aria-controls='panel1a-content' id='panel1a-header'>
                        <Typography variant='overline'>Student Record</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                </Grid>
              </Box>
            </SCard>
          </Grid>
        </Grid>
      </Box>
    </MotionLazyContainer>
  )
}

export default UserAccount
