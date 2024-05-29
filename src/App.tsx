import { BrowserRouter, Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { SliderApp } from '@/components/ui/slider/slider'

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Button as={Link} to={'https://google.com'}>
          Hello
        </Button>
      </BrowserRouter>
      <SliderApp />
    </div>
  )
}
