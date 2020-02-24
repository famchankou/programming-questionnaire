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
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        }
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: '',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '',
          is_correct: false,
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
