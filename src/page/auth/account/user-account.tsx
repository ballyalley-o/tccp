import { useState, useEffect, Fragment } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ICON_NAME, useIcon } from 'hook'
import { useForm } from 'react-hook-form'
import { useUpdateUserMutation } from 'store/slice'
import { CardMedia, Box, Typography, Grid, Divider, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { FormField, FormProvider } from 'component/form'
import { MotionLazyContainer } from 'component/motion'
// import { BootcampCard } from 'section/bootcamp'
import { DefaultAvatar } from 'component/avatar'
import { useAccountQuery } from 'store/slice'
import { SCard } from 'theme/style'
import { ASSET } from 'config'
import { KEY } from 'constant'

const UserAccount = () => {
  const [isEditState, setIsEditState]  = useState<boolean>(false)
  const { data: account, refetch }     = useAccountQuery({}) as any
  // const { bootcamp }                   = useGetBootcampQuery({ _id:   }) as any
  const [updateAccount]                = useUpdateUserMutation()
  const { Icon, iconSrc: editIconSrc } = useIcon(ICON_NAME.EDIT)
  const { iconSrc: downIconSrc }       = useIcon(ICON_NAME.CHEVRON_DOWN)
  const { iconSrc: saveSrc }           = useIcon(ICON_NAME.SAVE)
  const theme                          = useTheme()

  const date = new Date(account?.data?.createdAt)
  const year = date.getFullYear()
  const fullname = account?.data?.firstname + ' ' + account?.data?.lastname

  const accountSchema = Yup.object().shape({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    fullname: Yup.string(),
    location: Yup.string(),
    email: Yup.string().email(),
    password: Yup.string(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match')
  })

  const methods = useForm({
    resolver: yupResolver(accountSchema),
    defaultValues: {
      firstname: account?.data?.firstname || '',
      lastname: account?.data?.lastname || '',
      email: account?.data?.email || '',
      location: account?.data?.location || '',
      fullname,
      password: '',
      confirmPassword: ''
    }
  })

  const {
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = methods

  const onSubmit = async (data: any) => {
    try {
      if (account) {
        await updateAccount(data)
        refetch()
      }
    } catch (error: any) {
      setError('email', {
        type: 'manual',
        message: error.message
      })
    }
  }

  const handleEdit = () => {
    setIsEditState(!isEditState)
  }

  // refetch account data
  useEffect(() => {
    refetch()
  }, [refetch])

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
                lastName={account?.data?.lastname || ''}
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

              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <FormField
                  name={KEY.EMAIL}
                  submitting={isSubmitting}
                  sent={isSubmitSuccessful}
                  errors={errors}
                  label='Email'
                  placeholder={account?.data?.email}
                  autoComplete='email'
                  type='email'
                  disabled={!isEditState}
                  required
                  isAccount
                />
                <FormField
                  name={KEY.LOCATION}
                  submitting={isSubmitting}
                  sent={isSubmitSuccessful}
                  errors={errors}
                  label='Location'
                  placeholder={account?.data?.location}
                  autoComplete='location'
                  disabled={!isEditState}
                  required
                  isAccount
                />
                {isEditState ? (
                  <Fragment>
                    <FormField
                      name={KEY.FIRST_NAME}
                      submitting={isSubmitting}
                      sent={isSubmitSuccessful}
                      errors={errors}
                      label='First name'
                      placeholder={account?.data?.firstname}
                      autoComplete='firstname'
                      disabled={!isEditState}
                      required
                      isAccount
                    />
                    <FormField
                      name={KEY.LAST_NAME}
                      submitting={isSubmitting}
                      sent={isSubmitSuccessful}
                      errors={errors}
                      label='Last name'
                      placeholder={account?.data?.lastname}
                      autoComplete='lastname'
                      disabled={!isEditState}
                      required
                      isAccount
                    />
                    <Divider />
                    <FormField
                      name={KEY.PASSWORD}
                      submitting={isSubmitting}
                      sent={isSubmitSuccessful}
                      errors={errors}
                      label='Password'
                      placeholder='Password'
                      autoComplete='new-password'
                      disabled={!isEditState}
                      required
                      isAccount
                    />
                    <FormField
                      name={KEY.CONFIRM_PASSWORD}
                      submitting={isSubmitting}
                      sent={isSubmitSuccessful}
                      errors={errors}
                      label='Confirm password'
                      placeholder='Confirm password'
                      autoComplete='new-password'
                      disabled={!isEditState}
                      required
                      isAccount
                    />
                  </Fragment>
                ) : (
                  <FormField
                    name={KEY.FULL_NAME}
                    submitting={isSubmitting}
                    sent={isSubmitSuccessful}
                    errors={errors}
                    label='Full name'
                    placeholder={fullname}
                    autoComplete='fullname'
                    disabled={!isEditState}
                    required
                    isAccount
                  />
                )}
              </FormProvider>
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
                      <IconButton onClick={handleEdit}>
                        <Icon
                          icon={isEditState ? saveSrc : editIconSrc}
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
                      </IconButton>
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

                {/* <BootcampCard bootcamp={} /> */}
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
