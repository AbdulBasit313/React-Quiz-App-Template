import { FC } from 'react'
import styled from 'styled-components'

import { Flex } from '../../../styles/Global'
import { addLeadingZero, formatTime } from '../../../utils/helpers'

import Counter from './Counter'

const ActiveQuestionNo = styled.span`
  font-size: clamp(40px, 5vw, 60px);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.themeColor};
`

const TotalQuestionNo = styled.span`
  font-size: clamp(20px, 5vw, 30px);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkerGray};
`

interface QuizHeaderProps {
  activeQuestion: number
  totalQuestions: number
  timer: number
}

const QuizHeader: FC<QuizHeaderProps> = ({ activeQuestion, totalQuestions, timer }) => {
  return (
    <Flex spaceBetween gap="6px">
      <div>
        <ActiveQuestionNo>{addLeadingZero(activeQuestion + 1)}</ActiveQuestionNo>
        <TotalQuestionNo>/{addLeadingZero(totalQuestions)}</TotalQuestionNo>
      </div>
      <Flex>
        <Counter time={`${formatTime(timer)}`} />
      </Flex>
    </Flex>
  )
}

export default QuizHeader
