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
      title: 'HTML',
      question: 'HTML stands for?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Hyper Text Markup Language',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'High Text Markup Language',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Hyper Tabular Markup Language',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of these',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        }
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'HTML',
      question: 'Which of the following tag is used to mark a begining of paragraph ?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '<td>',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<br>',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<p>',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<tr>',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'HTML',
      question: 'From which tag descriptive list starts ?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '<ll>',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<dd>',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<dl>',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<ds>',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'HTML',
      question: 'Correct HTML tag for the largest heading is',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '<head>',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<h6>',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<heading>',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<h1>',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'HTML',
      question: 'The attribute of <form> tag',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Method',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Action',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Both A and B',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of these',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'HTML',
      question: 'Markup tags tell the web browser',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'How to organise the page',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'How to display the page',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'How to display message box on page',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of these',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'HTML',
      question: 'What are Empty elements and is it valid?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'No, there is no such terms as Empty Element',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Empty elements are element with no data',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'No, it is not valid to use Empty Element',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of these',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'HTML',
      question: 'Web pages starts with which ofthe following tag?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '<body>',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<title>',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<HTML>',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<form>',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'HTML',
      question: 'HTML is a subset of',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'SGMT',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'SGML',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'SGMD',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of these',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'HTML',
      question: '<dt> tag is designed to fit a single line of our web page but <dd> tag will accept a',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'line of text',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'full paragraph',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'word',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'request',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'HTML',
      question: 'Any part of the graphic that is not included in another hot zone is considered to be part of',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'rect',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'point',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'default',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'polygon',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'HTML',
      question: 'What i s the correct HTML for adding a background color?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '<background>yellow<background>',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<body color="yellow">',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<body bg color="yellow">',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<body bg="yellow">',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'HTML',
      question: 'The body tag usually used after',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Title tag',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'HEAD tag',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'EM tag',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'FORM tag',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'HTML',
      question: 'How can you make an e-mail link?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: '<mail href +"xxx@y.com">',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<a href ="mail to: xxx@y.com">',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: '<a href = "xxx@y.com">',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Both B and C',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'HTML',
      question: 'The web standard allows programmers on many different computer platforms to dispersed format and display the information server. These programs are called',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Web Browsers',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'HTML',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Internet Explorer',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of these',
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
