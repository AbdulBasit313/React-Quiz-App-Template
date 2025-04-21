import Flex from '../../ui/Flex'
import { FC } from 'react'
import { addLeadingZero, formatTime } from '../../../utils/helpers'
import Counter from './Counter'

interface QuizHeaderProps {
  activeQuestion: number
  totalQuestions: number
  timer: number
}

const QuizHeader: FC<QuizHeaderProps> = ({ activeQuestion, totalQuestions, timer }) => {
  return (
    <Flex spaceBetween gap="6px">
      <div>
        <span className="text-theme-color text-[40px] font-medium sm:text-[45px] md:text-[50px] lg:text-[55px] xl:text-[60px]">
          {addLeadingZero(activeQuestion + 1)}
        </span>
        <span className="text-darker-grey text-[20px] font-medium sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px]">
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
