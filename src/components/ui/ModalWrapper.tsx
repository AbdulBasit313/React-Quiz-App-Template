import { FC, JSX } from 'react'
import Button from './Button'

interface ModalWrapperProps {
  title: string
  subtitle: string
  icon: JSX.Element
  buttonTitle: string
  onClick: () => void
}

const ModalWrapper: FC<ModalWrapperProps> = ({
  title,
  subtitle,
  icon,
  buttonTitle,
  onClick,
}) => {
  return (
    <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-[rgba(0,_0,_0,_0.5)] p-4">
      <div className="bg-card-bg flex w-[600px] flex-col items-center rounded-[10px] px-6 py-12">
        {icon}
        <h6 className="text-theme-color mt-7 mb-5 text-[clamp(24px,_4vw,_32px)] font-bold">
          {title}
        </h6>
        <p className="text-primary-text mb-[clamp(18px,_calc(18px_+_28_*_((100vw_-_600px)_/_1320)),_48px)] text-center text-2xl text-[clamp(18px,_4vw,_24px)] leading-[1.3] font-medium">
          {subtitle}
        </p>
        <Button text={buttonTitle} onClick={onClick} bold big />
      </div>
    </div>
  )
}

export default ModalWrapper
