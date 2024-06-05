import { ChangeEvent, useState } from 'react'

import { PersonalInformationForm } from '@/components/profile/personal-information-form/personal-information-form'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import Edit from '@/images/icons/Edit'
import Logout from '@/images/icons/Logout'
import clsx from 'clsx'

import s from './personal-information.module.scss'

type PersonalInformationProps = {
  editModeDefault?: boolean
  email: string
  img: string
  name: string
}

export const PersonalInformation = ({
  editModeDefault = false,
  email,
  img,
  name,
}: PersonalInformationProps) => {
  const [editMode, setEditMode] = useState<boolean>(editModeDefault)
  const [imageSrc, setImageSrc] = useState<string>(img)
  const [nickname, setNickname] = useState<string>(name)

  const onChangeInputFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onloadend = () => {
        setImageSrc(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Card className={s.PersonalInformation}>
      <Typography as={'h1'} className={s.Title} variant={'h1'}>
        Personal Information
      </Typography>
      <div className={s.Avatar}>
        <img alt={'avatar'} src={imageSrc} />
        {!editMode && (
          <button className={s.ButtonEdit}>
            <input
              accept={'image/png, image/jpeg'}
              className={s.ButtonEditInput}
              onChange={onChangeInputFile}
              type={'file'}
            />
            <Edit />
          </button>
        )}
      </div>
      {editMode ? (
        <PersonalInformationForm
          name={nickname}
          setEditMode={setEditMode}
          setNickname={setNickname}
        />
      ) : (
        <>
          <div className={s.Name}>
            <Typography as={'span'} variant={'h2'}>
              {nickname}
            </Typography>
            <button
              className={clsx(s.ButtonEdit, s.ButtonEditTransparent)}
              onClick={() => setEditMode(true)}
            >
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
        </>
      )}
    </Card>
  )
}
