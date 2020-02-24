const { v4: uuidv4 } = require('uuid');

const settleQuestionAndAnswers = (questionId, answerObject) => {
  answerObject.id = questionId;
  answerObject.__answers__.forEach(answer => answer.question_id = questionId);
  return answerObject;
}

const generateItems = () => {
  return [
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'What is the worst case run-time complexity of binary search algorithm?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Ο(n2)',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Ο(nlog n)',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Ο(n3)',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Ο(n)',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        }
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'A circular linked list can be used for ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Stack',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Queue',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Both Stack & Queue',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Neither Stack or Queue',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'The following formular is of: left_subtree (keys)  ≤  node (key)  ≤  right_subtree (keys)',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Bianry Tree',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Complete Binary Tree',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Binary Search Tree',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'All of the above',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'Maximum degree of any vertex in a simple graph of vertices n is',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '2n - 1',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'n',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'n + 1',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'n - 1',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'What about recursion is true in comparison with iteration?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'very expensive in terms of memory.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'low performance.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'every recursive program can be written with iteration too.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'all of the above are true!',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'How many swaps are required to sort the given array using bubble sort - { 2, 5, 1, 3, 4}',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '4',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '5',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '6',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '7',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'Which of the following uses memoization?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Greedy approach',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Divide and conquer approach',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Dynamic programming approach',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of the above!',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'Which of the following algorithm cannot be desiged without recursion?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Tower of Hanoi',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Fibonacci Series',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Tree Traversal',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of the above',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'Shell sort uses',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'insertion sort',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'merge sort',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'selection sort',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'quick sort',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'Which of the following algorithm does not divide the list?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'linear search',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'binary search',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'merge sort',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'quick sort',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'A binary search tree whose left subtree and right subtree differ in hight by at most 1 unit is called?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Lemma tree',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Redblack tree',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'AVL tree',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of the above',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'The number of comparisons done by sequential search is',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '(N/2) + 1',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '(N + 1)/2',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '(N - 1)/2',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '(N - 2)/2',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'Which of the following data structure store the homogeneous data elements?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Lists',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Pointers',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Recrods',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Arrays',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'Linear arrays are also called',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'One-dimensional array',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Vertical array',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Horizontal array',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'All of the above',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Algorithms',
      question: 'A ......... does not keep track of address of every element in the list.',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Stack',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Queue',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'String',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Linear array',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    })
  ];
};

const items = generateItems();
const setQuestionnaireId = questionnaireId => {
  items.forEach(item => item.questionnaire_id = questionnaireId);
};

module.exports = {
  setQuestionnaireId: setQuestionnaireId,
  items: items
};
