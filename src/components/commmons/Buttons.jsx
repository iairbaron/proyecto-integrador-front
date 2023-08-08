import { Button } from '@mui/material'

const Buttons = (props) => {
    

  return (
      <Button className={props.classNameButton} variant={props.variantButton} color={props.colorButton}>
          <p className={props.classNameText}>{props.text}</p>
      </Button>
  )
}

export default Buttons