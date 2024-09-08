const quesArr = [
    {
      question: "Which is the largest animal in the world?",
      answer: [
        { text: "Shark", correct: false },
        { text: "Blue-Whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Girraffe", correct: false },
      ],
    },
    {
      question: "Which is the smallest continent in the world?",
      answer: [
        { text: "Africa", correct: false },
        { text: "Austrilia", correct: true },
        { text: "America", correct: false },
        { text: "Asia", correct: false },
      ],
    },
    {
      question: "Which is the largest Desert in the world?",
      answer: [
        { text: "Gobi", correct: false },
        { text: "Shara", correct: false },
        { text: "Kalahari", correct: false },
        { text: "Antartica", correct: true },
      ],
    },
    {
      question: "Which is the smallest country in the world?",
      answer: [
        { text: "vetican City", correct: true },
        { text: "Nepal", correct: false },
        { text: "Bhutan", correct: false },
        { text: "Pakistan", correct: false },
      ],
    },
  ];


  <ul className="text-lg font-medium text-blue-800 flex flex-col gap-3 ">
  <li className="border border-blue-500 rounded-lg p-2 hover:bg-black  hover:text-white ">
    Africa
  </li>
  <li className="border border-blue-500 rounded-lg p-2 hover:bg-black  hover:text-white ">
    Australia
  </li>
  <li className="border border-blue-500 rounded-lg p-2 hover:bg-black  hover:text-white ">
    America
  </li>
  <li className="border border-blue-500 rounded-lg p-2 hover:bg-black  hover:text-white ">
    Europe
  </li>
</ul>