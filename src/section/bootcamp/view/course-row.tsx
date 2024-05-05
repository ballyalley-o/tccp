import { Fragment, FC, useState } from 'react'
import { TableRow, TableCell, Box, IconButton, Typography } from '@mui/material'
import { STableRow, SCollapse } from 'section/bootcamp'
import { useIcon } from 'hook'
import { ICON_WEB_NAME } from 'config'
import { KEY, TYPOGRAPHY } from 'constant'
import { capitalize } from 'util/format'

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
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <SCollapse in={open} timeout={KEY.AUTO} unmountOnExit>
            <Box sx={{ margin: 1, paddingTop: 2, paddingBottom: 2 }}>
              <Typography variant={TYPOGRAPHY.BODY1}>{row?.description}</Typography>
            </Box>
          </SCollapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

export default CourseRow
