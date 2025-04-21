import { ReactNode } from 'react'
import Angular from '../assets/icons/angular.svg?react'
import CSS from '../assets/icons/css-3.svg?react'
import Django from '../assets/icons/dj.svg?react'
import Gatsby from '../assets/icons/gatsby.svg?react'
import JavaScript from '../assets/icons/javascript.svg?react'
import Kotlin from '../assets/icons/kotlin.svg?react'
import Laravel from '../assets/icons/laravel.svg?react'
import Python from '../assets/icons/python.svg?react'
import ReactIcon from '../assets/icons/react.svg?react'
import BulbIcon from '../assets/icons/bulb.svg?react'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'React',
    icon: <ReactIcon />,
  },
  {
    title: 'JavaScript',
    icon: <JavaScript />,
  },
  {
    title: 'Python',
    icon: <Python />,
  },
  {
    title: 'General Knowledge',
    icon: <BulbIcon />,
  },
  {
    title: 'Gatsby',
    icon: <Gatsby />,
    disabled: true,
  },
  {
    title: 'Angular',
    icon: <Angular />,
    disabled: true,
  },
  {
    title: 'Django',
    icon: <Django />,
    disabled: true,
  },
  {
    title: 'CSS',
    icon: <CSS />,
    disabled: true,
  },
  {
    title: 'Kotlin',
    icon: <Kotlin />,
    disabled: true,
  },
  {
    title: 'Laravel',
    icon: <Laravel />,
    disabled: true,
  },
]
