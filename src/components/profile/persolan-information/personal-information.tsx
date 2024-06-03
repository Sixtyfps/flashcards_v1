import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import Edit from '@/images/icons/Edit'
import Logout from '@/images/icons/Logout'
import clsx from 'clsx'

import s from './personal-information.module.scss'

type PersonalInformationProps = {
  email: string
  img: string
  name: string
}
export const PersonalInformation = ({ email, img, name }: PersonalInformationProps) => {
  return (
    <Card className={s.PersonalInformation}>
      <Typography as={'h1'} className={s.Title} variant={'h1'}>
        Personal Information
      </Typography>
      <div className={s.Avatar}>
        <img alt={'avatar'} src={img} />
        <button className={s.ButtonEdit}>
          <Edit />
        </button>
      </div>
      <div className={s.Name}>
        <Typography as={'span'} variant={'h2'}>
          {name}
        </Typography>
        <button className={clsx(s.ButtonEdit, s.ButtonEditTransparent)}>
          <Edit />
        </button>
      </div>
      <Typography as={'div'} className={s.Email} variant={'body2'}>
        {email}
      </Typography>
      <Button variant={'secondary'}>
        <Logout />
        <Typography as={'span'} variant={'subtitle2'}>
          Logout
        </Typography>
      </Button>
    </Card>
  )
}
