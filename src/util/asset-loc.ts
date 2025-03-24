import { ServerPath } from 'route/path'
import { KEY } from 'constant'

export interface AssetLocation {
  _id: string
  photo?: string
  badge?: string
}

export function photoLocation({ _id, photo }: AssetLocation) {
  return photo === KEY.PHOTO_DEFAULT ? ServerPath.ORIGIN + `/api/v1.1.0/upload/` + photo : ServerPath.ORIGIN + `/api/v1.1.0/upload/${_id}/` + photo
}

export function badgeLocation({ _id, badge }: AssetLocation) {
  return badge === KEY.BADGE_DEFAULT ? ServerPath.ORIGIN + `/api/v1.1.0/upload/badge/` + badge : ServerPath.ORIGIN + `/api/v1.1.0/upload/badge/${_id}/` + badge
}
