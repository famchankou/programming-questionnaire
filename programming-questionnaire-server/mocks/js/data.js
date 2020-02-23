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
      title: 'JavaScript',
      question: 'Which of the following is correct about features of JavaScript?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'JavaScript is a lightweight, interpreted programming language.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'JavaScript is designed for creating network-centric applications.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'JavaScript is complementary to and integrated with Java.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'All of the above.',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        }
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'JavaScript',
      question: 'Which of the following is a valid type of function JavaScript supports?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'named function',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'anonymous function',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Both of the above.',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of the above.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'JavaScript',
      question: 'Which of the following type of variable is visible only within a function where it is defined?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'global variable',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'local variable',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Both of the above.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of the above.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'JavaScript',
      question: 'Which built-in method returns the string representation of the number\'s value?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'toValue()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'toNumber()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'toString()',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: ' None of the above.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'JavaScript',
      question: 'Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'charAt()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'concat()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'indexOf()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'charCodeAt()',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'JavaScript',
      question: 'Which of the following function of String object is used to find a match between a regular expression and a string, and to replace the matched substring with a new substring?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'concat()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'match()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'replace()',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'search()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'JavaScript',
      question: 'Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'anchor()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'big()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'blink()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'bold()',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'JavaScript',
      question: 'Which of the following function of String object causes a string to be displayed in fixed-pitch font as if it were in a <tt> tag?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'fixed()',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'big()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'blink()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'bold()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'JavaScript',
      question: 'Which of the following function of Array object calls a function for each element in the array?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'concat()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'every()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'filter()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'forEach()',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'JavaScript',
      question: 'Which of the following function of Array object extracts a section of an array and returns a new array?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'reverse()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'shift()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'slice()',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'some()',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'JavaScript',
      question: 'Which of the following is not a reserved word in JavaScript?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'interface',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'throws',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'program',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'short',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'JavaScript',
      question: 'Why so JavaScript and Java have similar name?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'JavaScript is a stripped-down version of Java.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'JavaScript\'s syntax is loosely based on Java\'s.',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'They both originated on the island of Java.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of the above.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'JavaScript',
      question: 'When a user views a page containing a JavaScript program, which machine actually executes the script?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'The User\'s machine running a Web browser.',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'The Web server.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'A central machine deep within Netscape\'s corporate offices.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of the above.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'JavaScript',
      question: 'Which types of image maps can be used with JavaScript?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'Server-side image maps.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: ' Client-side image maps.',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'Server-side image maps and Client-side image maps.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'None of the above.',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
      ]
    }),
    settleQuestionAndAnswers(uuidv4(), {
      id: null,
      questionnaire_id: null,
      title: 'JavaScript',
      question: 'Which is the correct way to write a JavaScript array?',
      updatedAt: new Date(),
      createdAt: new Date(),
      __answers__: [
        {
          id: uuidv4(),
          question_id: null,
          content: 'var txt = new Array(1:"tim", 2:"kim", 3:"jim")',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'var txt = new Array: 1=("tim") 2=("kim") 3=("jim")',
          is_correct: false,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'var txt = new Array("tim", "kim", "jim")',
          is_correct: true,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          id: uuidv4(),
          question_id: null,
          content: 'var txt = new Array= "tim", "kim", "jim"',
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
