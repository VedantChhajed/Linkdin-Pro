import { QuizQuestion } from '../types';

const reactQuestions: QuizQuestion[] = [
  {
    text: 'What is the correct way to update state in a React functional component?',
    answers: [
      'this.state.count = this.state.count + 1',
      'setState({ count: state.count + 1 })',
      'setCount(count + 1)',
      'this.setCount(this.count + 1)'
    ],
    correctAnswerIndex: 2
  },
  {
    text: 'What hook would you use to perform side effects in a functional component?',
    answers: [
      'useEffect()',
      'useState()',
      'useReducer()',
      'useContext()'
    ],
    correctAnswerIndex: 0
  },
  {
    text: 'What is the purpose of React.memo?',
    answers: [
      'To create a memoized version of a function',
      'To prevent a component from re-rendering if props haven\'t changed',
      'To remember the previous state of a component',
      'To create a reference to a DOM element'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'In React, what is the virtual DOM?',
    answers: [
      'A special browser feature for React applications',
      'A copy of the real DOM that React uses for diffing',
      'A type of component that doesn\'t render visible elements',
      'A performance optimization technique unique to class components'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'Which of the following is NOT a React Hook?',
    answers: [
      'useEffect',
      'useState',
      'useHistory',
      'useLifecycle'
    ],
    correctAnswerIndex: 3
  }
];

const javascriptQuestions: QuizQuestion[] = [
  {
    text: 'What will the following code output? console.log(typeof [])',
    answers: [
      '"array"',
      '"object"',
      '"undefined"',
      '"function"'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'Which of the following is NOT a primitive type in JavaScript?',
    answers: [
      'String',
      'Number',
      'Object',
      'Boolean'
    ],
    correctAnswerIndex: 2
  },
  {
    text: 'What does the "===" operator do in JavaScript?',
    answers: [
      'Checks for equality with type conversion',
      'Checks for equality without type conversion',
      'Assigns a value to a variable',
      'Checks if a variable exists'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'What is closure in JavaScript?',
    answers: [
      'A way to hide private variables',
      'A function having access to the parent scope, even after the parent function has closed',
      'A method to close browser windows',
      'A technique to prevent memory leaks'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'Which method would you use to add an element to the end of an array?',
    answers: [
      'shift()',
      'push()',
      'unshift()',
      'concat()'
    ],
    correctAnswerIndex: 1
  }
];

const typescriptQuestions: QuizQuestion[] = [
  {
    text: 'What is the main benefit of using TypeScript over JavaScript?',
    answers: [
      'It runs faster in browsers',
      'It provides static type checking',
      'It has more built-in functions',
      'It uses less memory'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'Which of the following is a valid TypeScript interface declaration?',
    answers: [
      'interface Person { name: string; age: number; }',
      'type Person = { name: string; age: number; }',
      'class Person { name: string; age: number; }',
      'All of the above'
    ],
    correctAnswerIndex: 0
  },
  {
    text: 'What is the purpose of the "any" type in TypeScript?',
    answers: [
      'To represent a type that can be anything',
      'To define a generic type parameter',
      'To create a type union',
      'To exclude a property from a type'
    ],
    correctAnswerIndex: 0
  },
  {
    text: 'What does the "readonly" modifier do in TypeScript?',
    answers: [
      'Makes a class unable to be extended',
      'Prevents a property from being modified after initialization',
      'Makes a method return a constant value',
      'Prevents a variable from being garbage collected'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'What is a TypeScript enum used for?',
    answers: [
      'To define a set of named constants',
      'To create an iterable object',
      'To define a custom error type',
      'To extend a class with additional properties'
    ],
    correctAnswerIndex: 0
  }
];

const nodejsQuestions: QuizQuestion[] = [
  {
    text: 'What is Node.js?',
    answers: [
      'A front-end JavaScript framework',
      'A back-end JavaScript runtime environment',
      'A database management system',
      'A programming language'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'Which of the following is NOT a core module in Node.js?',
    answers: [
      'fs',
      'http',
      'path',
      'express'
    ],
    correctAnswerIndex: 3
  },
  {
    text: 'What does the "npm" stand for?',
    answers: [
      'Node Package Manager',
      'Node Programming Method',
      'New Package Manager',
      'Node Process Management'
    ],
    correctAnswerIndex: 0
  },
  {
    text: 'Which Node.js module is used to create a web server?',
    answers: [
      'url',
      'http',
      'server',
      'web'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'What is the event loop in Node.js?',
    answers: [
      'A UI component for handling user events',
      'A mechanism that handles asynchronous callbacks and keeps Node.js running',
      'A special type of loop used in JavaScript arrays',
      'A library for creating event-driven architectures'
    ],
    correctAnswerIndex: 1
  }
];

const cssQuestions: QuizQuestion[] = [
  {
    text: 'What does CSS stand for?',
    answers: [
      'Computer Style Sheets',
      'Creative Style Sheets',
      'Cascading Style Sheets',
      'Colorful Style Sheets'
    ],
    correctAnswerIndex: 2
  },
  {
    text: 'Which CSS property is used to change the text color of an element?',
    answers: [
      'text-color',
      'color',
      'font-color',
      'text-style'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'What is the correct CSS syntax for making all paragraph elements bold?',
    answers: [
      'p {font-weight: bold;}',
      'p {text-weight: bold;}',
      'p {text-style: bold;}',
      '<p style="font-weight: bold;">'
    ],
    correctAnswerIndex: 0
  },
  {
    text: 'Which CSS property is used to control the space between elements?',
    answers: [
      'spacing',
      'margin',
      'padding',
      'border'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'What is the purpose of CSS flexbox?',
    answers: [
      'To create flexible grid layouts',
      'To add animations to elements',
      'To create one-dimensional layouts',
      'To style forms and input elements'
    ],
    correctAnswerIndex: 2
  }
];

const mongodbQuestions: QuizQuestion[] = [
  {
    text: 'What type of database is MongoDB?',
    answers: [
      'Relational database',
      'Document-oriented NoSQL database',
      'Graph database',
      'Key-value store'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'In MongoDB, what is a collection?',
    answers: [
      'A group of related databases',
      'A group of related documents',
      'A JavaScript function that aggregates data',
      'A single record in the database'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'Which of the following is NOT a valid data type in MongoDB?',
    answers: [
      'String',
      'Object',
      'Array',
      'Varchar'
    ],
    correctAnswerIndex: 3
  },
  {
    text: 'What is the MongoDB equivalent of a JOIN in SQL?',
    answers: [
      'merge()',
      '$lookup',
      'connect()',
      'MongoDB does not support joins'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'Which of these is a valid way to query MongoDB?',
    answers: [
      'db.collection.SELECT({name: "John"})',
      'db.collection.WHERE({name: "John"})',
      'db.collection.find({name: "John"})',
      'db.collection.query({name: "John"})'
    ],
    correctAnswerIndex: 2
  }
];

const questionsBySkill: Record<string, QuizQuestion[]> = {
  'React': reactQuestions,
  'JavaScript': javascriptQuestions,
  'TypeScript': typescriptQuestions,
  'Node.js': nodejsQuestions,
  'CSS': cssQuestions,
  'MongoDB': mongodbQuestions
};

// Default questions in case skill doesn't have specific questions
const defaultQuestions: QuizQuestion[] = [
  {
    text: 'What is the primary purpose of version control systems like Git?',
    answers: [
      'To make code run faster',
      'To track changes in source code over time',
      'To automatically fix bugs in code',
      'To deploy applications to production'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'Which of the following is NOT a common software development methodology?',
    answers: [
      'Agile',
      'Waterfall',
      'Cascade',
      'Scrum'
    ],
    correctAnswerIndex: 2
  },
  {
    text: 'What does API stand for?',
    answers: [
      'Application Programming Interface',
      'Automated Program Integration',
      'Application Process Integration',
      'Advanced Programming Implementation'
    ],
    correctAnswerIndex: 0
  },
  {
    text: 'Which data structure uses LIFO (Last In, First Out) principle?',
    answers: [
      'Queue',
      'Stack',
      'Linked List',
      'Tree'
    ],
    correctAnswerIndex: 1
  },
  {
    text: 'What is the time complexity of binary search?',
    answers: [
      'O(n)',
      'O(n²)',
      'O(log n)',
      'O(1)'
    ],
    correctAnswerIndex: 2
  }
];

export const getQuizQuestions = (skillName: string): QuizQuestion[] => {
  return questionsBySkill[skillName] || defaultQuestions;
};