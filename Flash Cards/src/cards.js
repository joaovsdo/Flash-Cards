const cards = [
  { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
  { question: 'Who created React?', answer: 'React was created by Facebook.' },
  { question: 'What is JSX?', answer: 'JSX is a syntax extension that allows writing HTML inside JavaScript.' },
  { question: 'Which hook is used to manage state in functional components?', answer: 'useState.' },
  { question: 'Which hook is used for side effects?', answer: 'useEffect.' },
  { question: 'What is a component?', answer: 'A function or class that returns React elements and represents part of the UI.' },
  { question: 'How do you pass data to a child component?', answer: 'Using props.' },
  { question: 'What is lifting state up?', answer: 'Moving state to a parent component to share it between children.' },
  { question: 'Which hook allows access to persistent values between renders without causing re-render?', answer: 'useRef.' },
  { question: 'How do you render a list of elements in React?', answer: 'Using map() and assigning a unique key to each item.' },
  { question: 'What is the Virtual DOM?', answer: 'A lightweight representation of the real DOM used to optimize updates.' },
  { question: 'What happens when state changes?', answer: 'The component re-renders with the new values.' },
  { question: 'How do you avoid unnecessary re-renders?', answer: 'Using React.memo, useMemo, and useCallback.' },
  { question: 'What is the Context API?', answer: 'A way to share data between components without passing props manually.' },
  { question: 'Which hook is used to consume context?', answer: 'useContext.' },
  { question: 'How do you create reusable components?', answer: 'By separating logic and style, and using props for customization.' },
  { question: 'What is prop drilling?', answer: 'Passing props through multiple levels of components unnecessarily.' },
  { question: 'How do you handle forms in React?', answer: 'Using state to control inputs and onChange events.' },
  { question: 'Is React a library or a framework?', answer: 'It is a library.' },
  { question: 'What is React’s main advantage?', answer: 'Componentization, reactivity, and ease of maintenance.' },
];

export default cards