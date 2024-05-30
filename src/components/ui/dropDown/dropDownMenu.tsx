import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropDownMenu.module.scss'
import { Typography } from '@/components/ui/typography'
import { SingOutSvg } from '@/images/icons/dropDown/SingOutSvg'
import { ProfleSvg } from '@/images/icons/dropDown/ProfleSvg'
import { MoreVerticalOutline } from '@/images/icons/dropDown/MoreVerticalOutline'
import { LearnSvg } from '@/images/icons/dropDown/LearnSvg'
import { EditSvg } from '@/images/icons/dropDown/EditSvg'
import { DeleteSvg } from '@/images/icons/dropDown/DeleteSvg'

type DropDownMenuProps = {
  image?: string | null
  username?: string
  email?: string
  onProfileClick?: () => void
  onLogoutClick?: () => void
  miniMenu?: string
}

export const DropDownMenu = (props: DropDownMenuProps) => {
  const { image, username = 's', miniMenu, email, onProfileClick, onLogoutClick } = props

  const getInitials = (name: string): string => name.split(' ')[0][0].toUpperCase()

  const profileImage = image ? (
    <img src={image} alt="Profile" />
  ) : (
    <div className={s.imageIconName}>{getInitials(username)}</div>
  )
  return (
    <DropdownMenu.Root>
      {email && (
        <DropdownMenu.Trigger className={s.dropdownTrigger}>{profileImage}</DropdownMenu.Trigger>
      )}
      {miniMenu && (
        <DropdownMenu.Trigger className={s.dropdownTrigger}>
          <MoreVerticalOutline />
        </DropdownMenu.Trigger>
      )}

      <DropdownMenu.Content align="end" className={s.dropdownContent}>
        {email && (
          <>
            <DropdownMenu.Item className={s.dropdownItem}>
              {profileImage}
              <div>
                <Typography variant={'subtitle2'} style={{ fontSize: '14px' }}>
                  {username}
                </Typography>
                <Typography variant={'caption'} style={{ fontSize: '12px' }}>
                  {email}
                </Typography>
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Item className={s.divider} />

            <DropdownMenu.Item onClick={onProfileClick} className={s.dropdownItem}>
              <ProfleSvg />
              <Typography variant={'caption'}>Profile</Typography>
            </DropdownMenu.Item>
            <DropdownMenu.Item className={s.divider} />
            <DropdownMenu.Item onClick={onLogoutClick} className={s.dropdownItem}>
              <SingOutSvg />
              <Typography variant={'caption'}>Sign out</Typography>
            </DropdownMenu.Item>
          </>
        )}
        {miniMenu && (
          <>
            <DropdownMenu.Item onClick={onProfileClick} className={s.dropdownItem}>
              <LearnSvg />
              <Typography variant={'caption'}>Learn</Typography>
            </DropdownMenu.Item>
            <DropdownMenu.Item className={s.divider} />

            <DropdownMenu.Item onClick={onProfileClick} className={s.dropdownItem}>
              <EditSvg />
              <Typography variant={'caption'}>Edit</Typography>
            </DropdownMenu.Item>
            <DropdownMenu.Item className={s.divider} />
            <DropdownMenu.Item onClick={onLogoutClick} className={s.dropdownItem}>
              <DeleteSvg />
              <Typography variant={'caption'}>Delete</Typography>
            </DropdownMenu.Item>
          </>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
