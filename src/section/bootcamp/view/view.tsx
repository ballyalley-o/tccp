import { FC, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ICON_NAME, useIcon } from 'hook'
import { useGetBootcampQuery, useGetAllCourseByBootcampQuery } from 'store/slice'
import {
  Box,
  Grid,
  Typography,
  Container,
  CardMedia,
  Chip,
  CardContent,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import { BackButton } from 'component'
import { GSContainerGrid, SSpanBox } from 'theme/style'
import { MotionLazyContainer } from 'component/motion'
import { ICON_WEB_NAME } from 'config'
import { FLEX, KEY, LABEL, PLACEHOLDER, TYPOGRAPHY, COMPONENT, ARIA, VARIANT, SIZE } from 'constant'
import { badgeLocation, photoLocation } from 'util/asset-loc'
import CourseTable from './course-table'

interface BootcampViewSectionProps {
  bootcamp?: Bootcamp
}

const BootcampViewSection: FC<BootcampViewSectionProps> = () => {
  const { id } = useParams<{ id: string }>()
  const { data: bootcamp, error, isLoading } = useGetBootcampQuery(id)

  const {
    _id,
    name,
    description,
    badge,
    photo,
    location,
    careers,
    averageRating,
    user,
    duration,
    phone,
    website,
    slug,
    housing,
    jobAssistance,
    jobGuarantee
  } = bootcamp?.data || {}

  const courseQueryResult = useGetAllCourseByBootcampQuery(_id)

  const { data: course, error: courseError, isLoading: courseLoading } = courseQueryResult || { data: null, error: null, isLoading: false }

  const { Icon: PhoneIcon, iconSrc: phoneSrc } = useIcon(ICON_WEB_NAME.PHONE)
  const { Icon: RightIcon, iconSrc: rightSrc } = useIcon(ICON_WEB_NAME.CHEVRON_RIGHT)
  const { Icon: GlobeIcon, iconSrc: globeSrc } = useIcon(ICON_WEB_NAME.GLOBE)
  const { Icon, iconSrc: crossSrc } = useIcon(ICON_WEB_NAME.CLOSE_OUTLINE)
  const { iconSrc: checkSrc } = useIcon(ICON_WEB_NAME.CHECK_OUTLINE)

  return (
    <MotionLazyContainer>
      <Box
        sx={{
          height: '100vh'
        }}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <BackButton />
          </Grid>
        </Grid>
        <Container>
          <Grid container spacing={2} flexDirection='row'>
            <Grid item sm={9}>
              <Box marginBottom={2}>
                <Typography variant={TYPOGRAPHY.H4} color='common.black'>
                  {name}
                </Typography>
                <Typography variant={TYPOGRAPHY.BODY1}>{description}</Typography>
                {slug && (
                  <SSpanBox mt={2}>
                    <Typography variant={TYPOGRAPHY.CAPTION} color='common.black'>
                      Tags: &nbsp;
                    </Typography>
                    <SSpanBox>
                      <Typography variant={TYPOGRAPHY.CAPTION}>{slug || '5'}</Typography>
                    </SSpanBox>
                  </SSpanBox>
                )}
              </Box>
              <CardMedia
                component={COMPONENT.IMG}
                image={photoLocation({ _id, photo })}
                alt={bootcamp?.name}
                sx={{
                  height: { xs: '100vh', sm: 200, md: 200, lg: 250, xl: 300 },
                  objectFit: VARIANT.COVER,
                  borderRadius: 2
                }}
              />
              <Grid container flexDirection='column' spacing={2} p={1}>
                <Grid item xs={12} sm={3}>
                  <SSpanBox border='inherit'>
                    <Typography variant={TYPOGRAPHY.OVERLINE} color='common.black'>
                      Duration: &nbsp;
                    </Typography>
                    <Typography variant={TYPOGRAPHY.BODY1}>{duration}</Typography>
                  </SSpanBox>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <SSpanBox>
                    <Typography variant={TYPOGRAPHY.OVERLINE} color='common.black'>
                      Housing: &nbsp;
                    </Typography>
                    {housing ? <Icon icon={checkSrc} color='success.main' /> : <Icon icon={crossSrc} color='error.main' />}
                  </SSpanBox>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <SSpanBox>
                    <Typography variant={TYPOGRAPHY.OVERLINE} color='common.black'>
                      Job Assistance: &nbsp;
                    </Typography>
                    {jobAssistance ? <Icon icon={checkSrc} color='success.main' /> : <Icon icon={crossSrc} color='error.main' />}
                  </SSpanBox>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <SSpanBox>
                    <Typography variant={TYPOGRAPHY.OVERLINE} color='common.black'>
                      Job Guarantee: &nbsp;
                    </Typography>
                    {jobGuarantee ? <Icon icon={checkSrc} color='success.main' /> : <Icon icon={crossSrc} color='error.main' />}
                  </SSpanBox>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={3}>
              <SSpanBox>
                <CardMedia
                  component={KEY.IMAGE}
                  src={badgeLocation({ _id, badge })}
                  alt={ARIA.COMPANY_BADGE}
                  height={50}
                  sx={{ width: 70, height: 70, marginRight: 2, display: FLEX.FLEX, justifyContent: FLEX.FLEX_END, borderRadius: 2 }}
                />
                <Typography variant={TYPOGRAPHY.H5}>{user?.organization || 'TCCP'}</Typography>
              </SSpanBox>

              <Divider
                sx={{
                  marginY: 2
                }}
              />
              <Box gap={5}>
                <CardContent>
                  <Box my={2}>
                    <Typography variant={TYPOGRAPHY.H6} color='common.black'>
                      {LABEL.LOCATION}
                    </Typography>
                    <Typography variant={TYPOGRAPHY.BODY2}>
                      {location?.city}, {location?.state}
                    </Typography>
                  </Box>
                  <Box my={2}>
                    <Typography variant={TYPOGRAPHY.BODY1} color='common.black'>
                      {LABEL.CAREER}
                    </Typography>

                    {careers?.map((career: string, index: any) => (
                      // chip for each career
                      <Chip
                        key={index}
                        label={<Typography variant={TYPOGRAPHY.BODY2}>{career}</Typography>}
                        size={SIZE.SMALL}
                        sx={{
                          margin: 0.5
                        }}
                      />
                    )) || PLACEHOLDER.NO_CAREER}
                  </Box>
                  <Box my={2}>
                    <Typography variant={TYPOGRAPHY.H5} color='common.black'>
                      {LABEL.RATING}
                    </Typography>
                    <Typography variant={TYPOGRAPHY.BODY1}>{averageRating || '5'}</Typography>
                  </Box>

                  <Box
                    my={2}
                    sx={{
                      padding: 2,
                      border: '1px solid #D4D4D4',
                      borderRadius: 2
                    }}>
                    <Box mb={2}>
                      <Typography variant={TYPOGRAPHY.SUBTITLE1} color='common.black' sx={{ backgroundColor: 'comm' }}>
                        {LABEL.CONTACT}
                      </Typography>
                      <SSpanBox>
                        <PhoneIcon icon={phoneSrc} /> &nbsp; <Typography variant={TYPOGRAPHY.OVERLINE1}>{phone || '0'}</Typography>
                      </SSpanBox>
                    </Box>
                    <Box my={2}>
                      <Typography variant={TYPOGRAPHY.SUBTITLE1} color='common.black' sx={{ backgroundColor: 'comm' }}>
                        {LABEL.WEBSITE}
                      </Typography>
                      <SSpanBox sx={{ backgroundColor: 'grey.200', padding: 1 }}>
                        <GlobeIcon icon={globeSrc} color='common.black' height={20} />
                        &nbsp;
                        <Link
                          to={'#'}
                          style={{
                            textDecoration: 'none',
                            color: 'inherit'
                          }}>
                          <Typography variant='overline0' color='common.black' sx={{ backgroundColor: 'comm' }}>
                            {LABEL.VISIT_WEBSITE}
                          </Typography>
                        </Link>
                        <RightIcon icon={rightSrc} color='success' />
                      </SSpanBox>
                    </Box>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
            <Grid item sm={9}>
              <Box my={2}>
                <Typography variant={TYPOGRAPHY.H5} color='common.black'>
                  {LABEL.COURSE_COVERED}
                </Typography>
              </Box>
              {course?.data?.length > 0 ? (
                <CourseTable course={course?.data} />
              ) : (
                <Typography variant={TYPOGRAPHY.BODY1}>{PLACEHOLDER.NO_COURSE_AVAILABLE}</Typography>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MotionLazyContainer>
  )
}

export default BootcampViewSection
