import models from '../db-models';

export default class ProgressService {

  /**
   * Updates progress record: adds new answer to the user progress
   * 
   * @param {*} progressId 
   * @param {*} payload 
   */
  static async updateCurrentUserProgress(progressId, payload) {
    const progress = await models.Progress.findByPk(`${progressId}`, {
      include: [{
        model: models.Answer,
        as: 'answers'
      }]
    });
    const answer = await models.Answer.findOne({
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
   * @param {*} userId 
   */
  static async getCombinedProgress(userId) {
    const progresses = await models.Progress.findAll({
      where: {
        userId: userId
      },
      include: [{
        model: models.Answer,
        as: 'answers'
      }]
    });

    const generateCombinedProgress = async (progress) => {
      const quest = await models.Questionnaire.findByPk(progress.questionnaireId, {
        include: [{
          model: models.Question,
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
