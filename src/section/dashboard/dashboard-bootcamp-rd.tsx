import { ElementType, useEffect, useState } from 'react'
import { m } from 'framer-motion'
import { Box, Grid, Divider, Tab, Tabs, Skeleton } from '@mui/material'
import { SScrollGrid, GSBox, GSDividerBox, GSRundownContainer } from 'theme/style'
import { useGetAllBootcampQuery } from 'store/slice'
import { Button, Typography } from 'component'
import { BUTTON, LABEL, KEY, COLOR, COMPONENT, BUTTON_VARIANT, SIZE, VARIANT, FLEX, ARIA, TYPOGRAPHY, FONTWEIGHT } from 'constant'
import { CATEGORY } from 'config'
import BootcampTile from './dashboard-bootcamp-tile'
import { AuthPath } from 'route/path'

function DashboardBootcampRundown() {
  const [skValue, setSkValue] = useState([0, 1, 2, 3, 4, 5])
  const [value, setValue] = useState(0)
  const { data, error, isLoading } = useGetAllBootcampQuery()

  useEffect(() => {
    if (data) {
      window.scrollTo(0, 0)
    }
  }, [])

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue)
  }

  return (
    <Box
      component={COMPONENT.SECTION}
      sx={{
        display: KEY.CENTER
      }}>
      <GSRundownContainer>
        <Grid container sx={{ mb: 5 }}>
          <Grid item alignItems={FLEX.FLEX_START} my={1}>
            <Typography variant={TYPOGRAPHY.H3} marked={KEY.LEFT} fontWeight={FONTWEIGHT.MEDIUM}>
              {LABEL.NEW_BOOTCAMPS}
            </Typography>
          </Grid>
          <GSDividerBox>
            <Divider orientation={KEY.HORIZONTAL} flexItem />
          </GSDividerBox>
          <Tabs value={value} onChange={handleChange} aria-label={ARIA.TABS}>
            {Object.values(CATEGORY).map((category: string, index: number) => (
              <Tab key={index} label={category} />
            ))}
          </Tabs>
        </Grid>

        <m.div>
          <SScrollGrid container flexDirection={FLEX.FLEX_ROW} spacing={2}>
            {!isLoading ? (
              data?.data?.map((bootcamp: any, index: number) => (
                <Grid key={index} item xs={12} md={4} lg={3}>
                  <BootcampTile bootcamp={bootcamp} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12} md={4} lg={3}>
                {skValue.map((value, index) => (
                  <Skeleton key={index} variant={VARIANT.RECTANGULAR} width={300} height={300} />
                ))}
              </Grid>
            )}
          </SScrollGrid>
          <GSBox />
        </m.div>
        <Box sx={{ display: FLEX.FLEX, justifyContent: KEY.CENTER }}>
          <Button
            color={COLOR.SECONDARY}
            size={SIZE.SMALL}
            variant={BUTTON_VARIANT.CONTAINED}
            component={COMPONENT.A as ElementType}
            href={AuthPath.REGISTER}
            sx={{ mt: 8 }}>
            {BUTTON.START_APPLICATION}
          </Button>
        </Box>
      </GSRundownContainer>
    </Box>
  )
}

export default DashboardBootcampRundown
