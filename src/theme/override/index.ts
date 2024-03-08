import { Theme } from '@mui/material/styles'

import Fab from './fab'
import Card from './card'
import Chip from './chip'
import Tabs from './tab'
import Menu from './menu'
import Link from './link'
import Lists from './list'
import Table from './table'
import Alert from './alert'
import Badge from './badge'
import Paper from './paper'
import Input from './input'
import Radio from './radio'
import Drawer from './drawer'
import Dialog from './dialog'
import Rating from './rating'
import Slider from './slider'
import Button from './button'
import Switch from './switch'
import Select from './select'
import SvgIcon from './svg-icon'
import Tooltip from './tooltip'
import Popover from './popover'
import Stepper from './stepper'
import DataGrid from './data-grid'
import Skeleton from './skeleton'
import Backdrop from './backdrop'
import Progress from './progress'
import Timeline from './timeline'
import TreeView from './tree-view'
import Checkbox from './checkbox'
import Accordion from './accordion'
import Typography from './typography'
import Pagination from './pagination'
import Breadcrumbs from './breadcrumb'
import ButtonGroup from './button-group'
import Autocomplete from './autocomplete'
import ToggleButton from './toggle-button'
import ControlLabel from './control-label'
import LoadingButton from './loading-button'

function ComponentOverride(theme: Theme) {
  return Object.assign(
    Fab(theme),
    Tabs(theme),
    Chip(theme),
    Card(theme),
    Menu(theme),
    Link(theme),
    Input(theme),
    Radio(theme),
    Badge(theme),
    Lists(theme),
    Table(theme),
    Paper(theme),
    Alert(theme),
    Switch(theme),
    Select(theme),
    Button(theme),
    Rating(theme),
    Dialog(theme),
    Slider(theme),
    Drawer(theme),
    Stepper(theme),
    Tooltip(theme),
    Popover(theme),
    SvgIcon(theme),
    Checkbox(theme),
    DataGrid(theme),
    Skeleton(theme),
    Timeline(theme),
    TreeView(theme),
    Backdrop(theme),
    Progress(theme),
    Accordion(theme),
    Typography(theme),
    Pagination(theme),
    ButtonGroup(theme),
    Breadcrumbs(theme),
    Autocomplete(theme),
    ControlLabel(theme),
    ToggleButton(theme),
    LoadingButton(theme)
  )
}

export default ComponentOverride
