import { SuperInputText } from '@/components/ui/input/input'

export function App() {
  return (
    <div>
      Hello
      <SuperInputText type={'password'} />
      <SuperInputText type={'text'} label={'dasdad'} error={''} />
      <SuperInputText type={'text'} onResetClick={() => {}} value={'d'} />
    </div>
  )
}
