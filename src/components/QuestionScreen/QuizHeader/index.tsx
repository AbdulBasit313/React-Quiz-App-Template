import Flex from '../../ui/Flex'
import { FC } from 'react'
import { addLeadingZero, formatTime } from '../../../utils/helpers'
import Counter from './Counter'

interface QuizHeaderProps {
  activeQuestion: number
  totalQuestions: number
  timer: number
  skipped?: boolean
}

const QuizHeader: FC<QuizHeaderProps> = ({
  activeQuestion,
  totalQuestions,
  timer,
  skipped,
}) => {
  return (
    <Flex spaceBetween gap="6px">
      <div>
        <span className="text-theme-color text-[clamp(40px,_5vw,_60px)] font-medium">
          {addLeadingZero(activeQuestion + 1)}
        </span>
        <span className="text-darker-grey text-[clamp(20px,_5vw,_30px)] font-medium">
          /{addLeadingZero(totalQuestions)}
        </span>
      </div>
      <Flex>
        {skipped && (
          <span className="text-info-text bg-info-bg mt-3 inline-block rounded-2xl px-4 py-3 text-center text-[clamp(12px,_4vw,_16px)] font-bold md:px-5 md:py-4">
            Skipped Question
          </span>
        )}
        <Counter time={`${formatTime(timer)}`} />
      </Flex>
    </Flex>
  )
}

export default QuizHeader
