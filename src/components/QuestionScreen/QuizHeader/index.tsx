import Flex from '../../ui/Flex'
import { FC } from 'react'
import { addLeadingZero, formatTime } from '../../../utils/helpers'
import Counter from './Counter'

interface QuizHeaderProps {
  activeQuestion: number
  totalQuestions: number
  timer: number
}

const QuizHeader: FC<QuizHeaderProps> = ({
  activeQuestion,
  totalQuestions,
  timer,
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
        <Counter time={`${formatTime(timer)}`} />
      </Flex>
    </Flex>
  )
}

export default QuizHeader
