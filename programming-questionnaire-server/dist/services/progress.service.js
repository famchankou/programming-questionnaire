"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dbModels = _interopRequireDefault(require("../db-models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProgressService {
  /**
   * Updates progress record: adds new answer to the user progress and set 
   * complete state when necessary
   * 
   * @param {String} progressId 
   * @param {Object} payload 
   */
  static async updateCurrentUserProgress(progressId, payload) {
    const progress = await _dbModels.default.Progress.findByPk(`${progressId}`, {
      include: [{
        model: _dbModels.default.Answer,
        as: 'answers'
      }]
    });
    const answer = await _dbModels.default.Answer.findOne({
      where: {
        id: payload.answerId
      }
    });
    progress.setAnswers([...progress.answers, answer]);
    progress.update({
      isComplete: payload.isComplete
    });
    return progress;
  }
  /**
   * Returns combined progress: Progress, Answered Questions, Correct Answers
   * 
   * @param {String} userId 
   */


  static async getCombinedProgress(userId) {
    const progresses = await _dbModels.default.Progress.findAll({
      where: {
        userId: userId
      },
      include: [{
        model: _dbModels.default.Answer,
        as: 'answers'
      }]
    });
    /**
     * Forms combined progerss for a certain user which includes data necessary for
     * forming the charts statistics
     * 
     * @param {Object} progress 
     */

    const generateCombinedProgress = async progress => {
      const quest = await _dbModels.default.Questionnaire.findByPk(progress.questionnaireId, {
        include: [{
          model: _dbModels.default.Question,
          as: 'questions'
        }]
      });
      const correctAnswers = [...progress.answers].filter(answer => answer.isCorrect);

      const filterQuestions = question => [...progress.answers].map(answer => answer.questionId).indexOf(question.id) !== -1;

      return {
        progressId: progress.id,
        userId: progress.userId,
        questionnaireTitle: quest.title,
        questionnaireId: progress.questionnaireId,
        correctAnswers: correctAnswers,
        answeredQuestions: [...quest.questions.filter(filterQuestions)],
        isComplete: progress.isComplete
      };
    };

    return Promise.all(progresses.map(progress => generateCombinedProgress(progress)));
  }

}

exports.default = ProgressService;
//# sourceMappingURL=progress.service.js.map