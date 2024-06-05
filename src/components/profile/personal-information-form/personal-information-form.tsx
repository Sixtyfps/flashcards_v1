import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { FormInput } from '@/components/ui/form/form-textField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './personal-information-form.module.scss'

type Props = {
  name: string
  setEditMode: (editMode: boolean) => void
  setNickname: (nickname: string) => void
}

export type ProfileValues = z.infer<typeof profileSchema>

const profileSchema = z.object({
  name: z.string().min(2),
})

export const PersonalInformationForm = ({ name, setEditMode, setNickname }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ProfileValues>({ resolver: zodResolver(profileSchema) })

  const onSubmit = handleSubmit(data => {
    setEditMode(false)
    setNickname(data.name)
  })

  return (
    <form className={s.Form} onSubmit={onSubmit}>
      <FormInput
        control={control}
        defaultValue={name}
        error={errors.name?.message}
        label={'Nickname'}
        name={'name'}
        placeholder={''}
      />
      <Button className={s.Button} fullWidth>
        Save Changes
      </Button>
    </form>
  )
}
