import { FC, Fragment, useState } from 'react'
import { Table, TableBody, TableCell, TableHead } from '@mui/material'
import { SRoot, STableContainer, STableHeader } from 'section/bootcamp'
import { ARIA, KEY, LABEL } from 'constant'
import CourseRow from './course-row'

interface CourseTableProps {
  course: any
}

const CourseTable: FC<CourseTableProps> = ({ course }) => {
  return (
    <SRoot>
      <STableContainer>
        <Table aria-label={ARIA.COURSE_TABLE}>
          <TableHead>
            <STableHeader>
              <TableCell>{LABEL.TITLE}</TableCell>
              <TableCell>{LABEL.DURATION}</TableCell>
              <TableCell align={KEY.CENTER}>{LABEL.COST}</TableCell>
              <TableCell align={KEY.CENTER}>{LABEL.SKILL_REQUIRED}</TableCell>
              <TableCell align={KEY.CENTER}>{LABEL.SCHOLARSHIP}</TableCell>
              <TableCell align={KEY.CENTER}></TableCell>
            </STableHeader>
          </TableHead>
          <TableBody>
            {course?.map((row: any, index: any) => (
              <CourseRow key={index} row={row} />
            ))}
          </TableBody>
        </Table>
      </STableContainer>
    </SRoot>
  )
}

export default CourseTable
