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
        <h6 className="text-theme-color mt-7 mb-5 text-[24px] font-bold sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px]">
          {title}
        </h6>
        <p className="text-primary-text mb-[18px] text-center text-2xl text-[18px] leading-[1.3] font-medium sm:mb-[22px] sm:text-[20px] md:mb-[30px] md:text-[22px] lg:mb-[38px] lg:text-[24px] xl:mb-[48px]">
          {subtitle}
        </p>
        <Button text={buttonTitle} onClick={onClick} bold big />
      </div>
    </div>
  )
}

export default ModalWrapper
