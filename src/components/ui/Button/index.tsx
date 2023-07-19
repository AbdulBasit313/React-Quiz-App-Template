import { FC, ReactNode } from 'react'
import { ButtonStyle, IconLeft, IconRight } from './styled'

interface ButtonTypes {
  text: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  outline?: boolean
  disabled?: boolean
}

const Button: FC<ButtonTypes> = ({
  text,
  onClick,
  icon,
  iconPosition,
  outline,
  disabled,
}) => {
  return (
    <ButtonStyle onClick={onClick} outline={outline} disabled={disabled}>
      {icon && iconPosition === 'left' && <IconLeft>{icon}</IconLeft>}
      {text}
      {icon && iconPosition === 'right' && <IconRight>{icon}</IconRight>}
    </ButtonStyle>
  )
}

export default Button
