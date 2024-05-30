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

  return (
    <>
      {email && (
        <WorkMenu
          image={image}
          email={email}
          username={username}
          onProfileClick={onProfileClick}
          onLogoutClick={onLogoutClick}
        />
      )}
      {miniMenu && <MiniMenu miniMenu={''} />}
    </>
  )
}

export const WorkMenu = (props: DropDownMenuProps) => {
  const { image, username = 's', email, onProfileClick, onLogoutClick } = props
  const getInitials = (name: string): string => name.split(' ')[0][0].toUpperCase()

  const profileImage = image ? (
    <img src={image} className={s.imageIconName} />
  ) : (
    <p className={s.imageIconName}>{getInitials(username)}</p>
  )
  return (
    <DropdownMenu.Root>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <DropdownMenu.Trigger className={s.dropdownTrigger}>{profileImage}</DropdownMenu.Trigger>
        <DropdownMenu.Content align="end" className={s.dropdownContent}>
          <DropdownMenu.Item className={s.dropdownItemHeader}>
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
        </DropdownMenu.Content>
      </div>
    </DropdownMenu.Root>
  )
}
export const MiniMenu = (props: DropDownMenuProps) => {
  const { onProfileClick, onLogoutClick } = props
  return (
    <DropdownMenu.Root>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <DropdownMenu.Trigger className={s.dropdownTrigger}>
          <MoreVerticalOutline />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end" className={s.dropdownContent}>
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
        </DropdownMenu.Content>
      </div>
    </DropdownMenu.Root>
  )
}
