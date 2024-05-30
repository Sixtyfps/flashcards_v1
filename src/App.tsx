import { BrowserRouter, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DropDownMenu } from '@/components/ui/dropDown'

export function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <BrowserRouter>
        <Button as={Link} to={'https://google.com'}>
          Hello
        </Button>
      </BrowserRouter>
      <DropDownMenu username={'Artsiom'} email={'youtomatch@gmail.com'} />
      <DropDownMenu miniMenu={'s'} />
    </div>
  )
}
