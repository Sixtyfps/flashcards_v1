import s from '@/components/ui/dropDown/dropDownMenu.module.scss'
import { DropDownItem } from '@/components/ui/dropDown/dropDownItem'
import { Typography } from '@/components/ui/typography'
import { DropDownSeparator } from '@/components/ui/dropDown/dropDownSeparator'
import { ProfleSvg } from '@/images/icons/dropDown/ProfleSvg'
import { SingOutSvg } from '@/images/icons/dropDown/SingOutSvg'
import { DropDownMenu } from '@/components/ui/dropDown/dropDownMenu'

type Props = {
  photo: string
  photoDesc: string
  email: string
  name: string
}

export const UserDropdown = ({ name, photoDesc, email, photo }: Props) => {
  const getInitials = (name: string): string => name.split(' ')[0][0].toUpperCase()

  const profileImage = photo ? (
    <img src={photo} alt={photoDesc} className={s.imageIconName} />
  ) : (
    <p className={s.imageIconName}>{getInitials(name)}</p>
  )

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <DropDownMenu trigger={profileImage}>
        <DropDownItem className={s.dropdownItemHeader}>
          {profileImage}
          <div>
            <Typography variant={'subtitle2'} style={{ fontSize: '14px' }}>
              {email}
            </Typography>
            <Typography variant={'caption'} style={{ fontSize: '12px' }}>
              {name}
            </Typography>
          </div>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <a href={'https://google.com'} style={{ textDecoration: 'none' }}>
            <ProfleSvg />
            <Typography variant={'caption'}>Profile</Typography>
          </a>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem>
          <SingOutSvg />
          <Typography variant={'caption'}>Sign out</Typography>
        </DropDownItem>
      </DropDownMenu>
    </div>
  )
}
