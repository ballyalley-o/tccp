import { Fragment, FC, useState } from 'react'
import { TableRow, TableCell, Box, IconButton, Typography, CardMedia, Divider, Grid } from '@mui/material'
import { Button } from 'component'
import { STableRow, SCollapse } from 'section/bootcamp'
import { useIcon } from 'hook'
import { ICON_WEB_NAME } from 'config'
import { BUTTON_VARIANT, COMPONENT, KEY, LABEL, TYPOGRAPHY } from 'constant'
import { capitalize } from 'util/format'
import { SCollapseGrid } from 'section/bootcamp'

interface CourseRowProps {
  row: any
}

const CourseRow: FC<CourseRowProps> = ({ row }) => {
  const [open, setOpen] = useState(false)

  const { Icon: WebIcon, iconSrc: checkSrc } = useIcon(ICON_WEB_NAME.CHECK_OUTLINE)
  const { Icon, iconSrc: crossSrc } = useIcon(ICON_WEB_NAME.CLOSE_OUTLINE)
  const { Icon: ExpandIcon, iconSrc: expandSrc } = useIcon(ICON_WEB_NAME.PLUS)
  const { Icon: RetractIcon, iconSrc: retractSrc } = useIcon(ICON_WEB_NAME.RETRACT)
  return (
    <Fragment>
      <STableRow>
        <TableCell sx={{ fontWeight: 'bold' }}>{row?.title}</TableCell>
        <TableCell>{row?.duration} weeks</TableCell>
        <TableCell align={KEY.CENTER}>${row?.tuition}</TableCell>
        <TableCell align={KEY.CENTER}>{capitalize(row?.minimumSkill)}</TableCell>
        <TableCell align={KEY.CENTER}>
          {row?.scholarshipAvailable ? <WebIcon icon={checkSrc} color='success.main' /> : <Icon icon={crossSrc} color='error.main' />}
        </TableCell>
        <TableCell align={KEY.CENTER}>
          <Box>
            <IconButton onClick={() => setOpen(!open)}>{open ? <RetractIcon icon={retractSrc} /> : <ExpandIcon icon={expandSrc} />}</IconButton>
          </Box>
        </TableCell>
      </STableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <SCollapse in={open} timeout={KEY.AUTO} unmountOnExit>
            <CollapseTable row={row} />
          </SCollapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

export default CourseRow

const CollapseTable: FC<CourseRowProps> = ({ row }) => {
  return (
    <SCollapseGrid container flexDirection='column' flex={1}>
      <Grid item sm={8}>
        <Box sx={{ borderRight: 1, borderColor: 'grey.300' }}>
          <Typography variant={TYPOGRAPHY.OVERLINE}>{LABEL.DESCRIPTION}</Typography>
          <Typography variant={TYPOGRAPHY.BODY1}>{row?.description}</Typography>
        </Box>
      </Grid>
      <Grid item sm={3}>
        <Button variant={BUTTON_VARIANT.CONTAINED} color='inherit' fullWidth sx={{ marginTop: 1 }}>
          {LABEL.APPLY_FOR_COURSE}
        </Button>
      </Grid>
    </SCollapseGrid>
  )
}
