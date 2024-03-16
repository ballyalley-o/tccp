/**
 * use Icon hook
 *
 * Custom hook for retrieving an icon based on the provided iconName.
 * The iconName can come from either ICON_LOC or ICON_WEB.
 *  - ICON_LOC is for icons that are saved locally which would use SvgColor component.
 *  - ICON_WEB is for icons that are from MDI which would use Iconify component.
 *
 *  @properties icon - The Icon component to render.
 *
 * @param {ICON_NAME[]} iconName - The name of the icon to retrieve.
 * @returns {Object} - An object containing the Icon component and the icon source.
 */
import { FC, useState, useEffect } from 'react'
import { ICON_LOC, ICON_WEB, ICON_LOC_NAME, ICON_WEB_NAME } from 'config'
import { SvgColor } from 'component/svg-color'
import { Iconify } from '../component/iconify'

export const ICON_NAME = {
  ...ICON_LOC_NAME,
  ...ICON_WEB_NAME,
}

type IconName = keyof typeof ICON_NAME & keyof typeof ICON_WEB_NAME

const useIcon = (iconName: keyof typeof ICON_NAME) => {
  const [iconSrc, setIconSrc] = useState<string | null>(null)
  const [Icon, setIcon] = useState<FC<any>>(() => Iconify)

  useEffect(() => {
    if (ICON_LOC[iconName as ICON_LOC_NAME]) {
      setIconSrc(ICON_LOC[iconName as ICON_LOC_NAME])
      setIcon(() => SvgColor)
    } else {
      setIconSrc(ICON_WEB[iconName as ICON_WEB_NAME])
      setIcon(() => Iconify)
    }
  }, [iconName])

  return { Icon, iconSrc }
}

export default useIcon
