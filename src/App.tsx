import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'

const App: React.FC = () => {
  return (
    <div className="App">
      <Button>hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        hello
      </Button>
      <Button btnType={ButtonType.Default} size={ButtonSize.Small}>
        hello
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        hello
      </Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.Small}>
        hello
      </Button>
    </div>
  )
}

export default App
