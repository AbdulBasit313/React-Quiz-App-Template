import cn from 'classnames'
import { FC } from 'react'

interface AnswerProps {
  index: number
  choice: string
  type: string
  selectedAnswer: string[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Answer: FC<AnswerProps> = ({ onChange, index, choice, type, selectedAnswer }) => {
  // Convert index to alphabet character to show ABCD before question
  const label = String.fromCharCode(65 + index)

  return (
    <div
      key={index}
      className={cn(
        'text-secondary-text mt-[clamp(13px,_calc(10px_+_6_*_((100vw_-_600px)_/_1320)),_16px)] cursor-pointer rounded-2xl border text-[clamp(18px,_4vw,_16px)] font-medium md:font-normal',
        selectedAnswer.includes(choice)
          ? 'text-theme-color bg-selected-answer transition-all duration-200 ease-in'
          : 'text-border bg-answer-bg'
      )}
    >
      <label className="flex cursor-pointer p-[14px] md:p-[18px]">
        <span>{label}.</span>
        <input
          name={choice}
          // radio is for checked one option and checkbox is for checked multiple options
          type={type === 'MAQs' ? 'checkbox' : 'radio'}
          checked={selectedAnswer.includes(choice)}
          onChange={onChange}
          className="invisible m-0"
        />
        {choice}
      </label>
    </div>
  )
}

export default Answer
