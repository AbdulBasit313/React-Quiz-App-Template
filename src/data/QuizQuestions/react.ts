// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const react: Topic = {
  topic: 'React',
  level: 'Intermediate',
  totalQuestions: 6,
  totalScore: 45,
  totalTime: 180,
  questions: [
    {
      question: 'What is JSX in React?',
      choices: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
        'A state management library for React applications',
        'A build tool for bundling React applications',
        'A testing framework for React components',
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 10,
    },
    {
      question: 'React components must always return a single JSX element.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: 'What is the purpose of React components?',
      choices: [
        'To handle HTTP requests and fetch data from APIs',
        'To manage the state of a React application',
        'To define the structure and appearance of the user interface',
        'To handle user interactions and events',
      ],
      type: 'MCQs',
      correctAnswers: ['To define the structure and appearance of the user interface'],
      score: 10,
    },
    {
      question:
        'In React, props are used to pass data from parent components to child components.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: 'In React, what is the purpose of keys in lists?',
      choices: [
        'To provide a unique identifier for each item in the list',
        'To control the order of items in the list',
        'To enable sorting and filtering of the list',
        'To handle user interactions within the list',
      ],
      type: 'MCQs',
      correctAnswers: ['To provide a unique identifier for each item in the list'],
      score: 10,
    },
    {
      question: 'React uses a virtual DOM to optimize rendering performance.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
  ],
}
