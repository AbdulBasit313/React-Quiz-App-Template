import Flex from '../../../ui/Flex'
import { TimerIcon } from '../../../../config/icons'
import { FC } from 'react'

interface CounterProps {
  time: string
}

const Counter: FC<CounterProps> = ({ time }) => {
  return (
    <Flex center>
      <TimerIcon />
      <span className="text-theme-color ml-1 min-w-[55px] text-[clamp(16px,_5vw,_24px)] font-medium md:ml-2 md:min-w-[60px]">
        {time}
      </span>
    </Flex>
  )
}

export default Counter
