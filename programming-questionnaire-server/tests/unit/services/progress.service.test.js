const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const faker = require('faker');
const { ProgressService } = require('../../../src/services');
const models = require('../../../src/db-models').default;

describe('ProgressService', function () {
  describe('updateCurrentUserProgress', function () {
    it('should update current user progress', async function () {
      const progressId = faker.random.uuid();
      const answerId = faker.random.uuid();
      const paylod = {
        isComplete: true,
        answerId: answerId
      }
      const updateStub = (payloadStub) => {
        progressStubValue.isComplete = payloadStub.isComplete;
      }
      const setAnswersStub = (answer) => {
        progressStubValue.answers.push(...answer);
      }

      const progressStubValue = {
        answers: [],
        setAnswers: setAnswersStub,
        update: updateStub,
        id: progressId,
        userId: faker.random.uuid(),
        isComplete: false
      };
      const answerStubValue = {
        id: answerId,
        content: 'TestAnswer',
        isCorrect: true,
        questionId: faker.random.uuid(),
      };

      const progressStub = sinon.stub(models.Progress, 'findByPk').returns(progressStubValue);
      const answerStub = sinon.stub(models.Answer, 'findOne').returns(answerStubValue);
      const updatedProgress = await ProgressService.updateCurrentUserProgress(progressId, paylod);


      expect(progressStub.calledOnce).to.be.true;
      expect(answerStub.calledOnce).to.be.true;
      expect(updatedProgress.id).to.equal(progressId);
      expect(updatedProgress.isComplete).to.be.true;
      expect(updatedProgress.answers.length).to.equal(1);
      expect(updatedProgress.answers[0].id).to.equal(answerId);
      expect(updatedProgress.answers[0].content).to.equal(answerStubValue.content);
      expect(updatedProgress.answers[0].isCorrect).to.equal(answerStubValue.isCorrect);
      expect(updatedProgress.answers[0].questionId).to.equal(answerStubValue.questionId);
    });
  });
});