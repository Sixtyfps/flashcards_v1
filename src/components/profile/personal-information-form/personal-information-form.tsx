import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { FormInput } from '@/components/ui/form/form-textField'

import s from './personal-information-form.module.scss'

type Props = {
  name: string
  setEditMode: (editMode: boolean) => void
}

export const PersonalInformationForm = ({ name, setEditMode }: Props) => {
  const { control, handleSubmit } = useForm()

  const onSubmit = handleSubmit(data => {
    console.log(data)
    setEditMode(false)
  })

  return (
    <form className={s.Form} onSubmit={onSubmit}>
      <FormInput
        control={control}
        defaultValue={name}
        label={'Nickname'}
        name={'Nickname'}
        placeholder={''}
      />
      <Button className={s.Button} fullWidth>
        Save Changes
      </Button>
    </form>
  )
}
