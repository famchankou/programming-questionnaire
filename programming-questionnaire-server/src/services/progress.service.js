import models from '../db-models';

export default class ProgressService {

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

      return {
        progressId: progress.id,
        userId: progress.userId,
        questionnaireTitle: quest.title,
        questionnaireId: progress.questionnaireId,
        correctAnswers: [...progress.answers].filter(answer => answer.isCorrect),
        answeredQuestions: [...quest.questions],
        isComplete: progress.isComplete
      };
    };

    return Promise.all(progresses.map(progress => generateCombinedProgress(progress)));
  }
}
