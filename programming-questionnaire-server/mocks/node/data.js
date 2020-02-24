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
      question: 'In Nodejs how node based web servers differ from traditional web servers? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Node based server uses a single threaded model and can serve much larger number of requests compared to any traditional server like Apache HTTP Server.',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Node based server process request much faster than traditional server.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'There is no much difference between the two.',
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
        }
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'Node.js',
      question: 'Which statement executes the code of sample.js file? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'nodejs sample.js',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'node sample.js',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'sample.js ',
          is_correct: false,
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
      title: 'Node.js',
      question: 'What are the key features of Node.js? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Real time Data intensive',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Highly scalable servers for Web Applications',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Builds fast and scalable network Applications',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'All of the above',
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
      question: 'How can we check the current version of NPM? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'npm --version ',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'npm --ver',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'npm help ',
          is_correct: false,
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
      title: 'Node.js',
      question: 'What is the advantage of using node.js? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'It provides an easy way to build scalable network programs',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Generally fast',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Great concurrency',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'All of these',
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
      question: 'Why a Node.JS code is pretty fast although being written in JavaScript? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Node.JS internally converts JavaScript code to Java based code and then execute the same',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Node.JS internally converts JavaScript code to C based code and then execute the same',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Being built on Google Chrome\'s V8 JavaScript Engine interpreted JiT to binnary code and optimized',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of the above ',
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
      question: 'What is REPL in Node.js? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Eval',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Print',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Loop',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'All of these',
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
      question: 'What should you do in your code to improve your application’s performance? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Use gzip compression',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Don’t use synchronous functions',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Do logging correctly',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Handle exceptions properly ',
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
      question: 'Is console a global object? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'null',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'false',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'true',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None',
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
      question: 'In Node.js APIs of Node.JS are which of the following? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Asynchronous',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Synchronous',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Both of the above',
          is_correct: false,
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
      title: 'Node.js',
      question: 'Which of the following class is used to create and consume custom events in Node.js? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'EventEmitter',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Events',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'NodeEvent',
          is_correct: false,
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
      title: 'Node.js',
      question: 'Which of the following template engines can be used with Node.js? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Jade',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Vash',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Handlebars',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'All of the above',
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
      question: 'Node.js supports which of the following platform? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Windows',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Macintosh',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Unix/Linux',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'All of the above',
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
      question: 'Which of following are a valid form of route path? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'strings',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'string patterns',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'regular expressions',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'All of above',
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
      question: 'Which of the following statements holds good with respect to Node? ',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Node being a single thread, and uses async function calls to maintain the concurrency',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Every API of Node js are asynchronous',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Node thread keeps an event loop and whenever any task get completed, it fires the corresponding event which signals the event listener function to get executed',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'All of these',
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
