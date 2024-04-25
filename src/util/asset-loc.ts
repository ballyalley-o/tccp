import { ServerPath } from 'route/path'
import { KEY } from 'constant'

export function photoLocation({ bootcamp }: UploadLocationProps) {
  return bootcamp?.photo === KEY.PHOTO_DEFAULT
    ? ServerPath.ORIGIN + `/upload/` + bootcamp?.photo
    : ServerPath.ORIGIN + `/upload/${bootcamp._id}/` + bootcamp?.photo
}

export function badgeLocation({ bootcamp }: UploadLocationProps) {
  return bootcamp?.badge === KEY.BADGE_DEFAULT
    ? ServerPath.ORIGIN + `/upload/badge/` + bootcamp?.badge
    : ServerPath.ORIGIN + `/upload/badge/${bootcamp._id}/` + bootcamp?.badge
}
