import { ServerPath } from 'route/path'
import { KEY } from 'constant'

export interface AssetLocation {
  _id: string
  photo?: string
  badge?: string
}

export function photoLocation({ _id, photo }: AssetLocation) {
  return photo === KEY.PHOTO_DEFAULT ? ServerPath.ORIGIN + `/upload/` + photo : ServerPath.ORIGIN + `/upload/${_id}/` + photo
}

export function badgeLocation({ _id, badge }: AssetLocation) {
  return badge === KEY.BADGE_DEFAULT ? ServerPath.ORIGIN + `/upload/badge/` + badge : ServerPath.ORIGIN + `/upload/badge/${_id}/` + badge
}
