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
      <span className="text-theme-color ml-1 min-w-[55px] text-[16px] font-medium sm:text-[18px] md:ml-2 md:min-w-[60px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
        {time}
      </span>
    </Flex>
  )
}

export default Counter
