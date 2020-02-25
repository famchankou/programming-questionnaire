const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const faker = require('faker');
const { AnswerController } = require('../../../src/controllers');
const models = require('../../../src/db-models').default;

describe('AnswerController', function () {
  let status, json, res;

    beforeEach(() => {
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
    });

    it('getAll', async function () {
      const answerId = faker.random.uuid();
      const questionId = faker.random.uuid();

      const req = { params: { questionId: questionId } };
      const answerStubValue = {
        id: answerId,
        content: 'TestAnswer',
        isCorrect: true,
        questionId: faker.random.uuid(),
      };
      const answerStub = sinon.stub(models.Answer, 'findAll').returns([answerStubValue]);
      await AnswerController.getAll(req, res);

      expect(answerStub.calledOnce).to.be.true;
      expect(status.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(200);
      expect(json.calledOnce).to.be.true;

      const response = json.args[0][0];
      expect(response.length).to.equal(1);
      expect(response[0].id).to.equal(answerStubValue.id);
      expect(response[0].content).to.equal(answerStubValue.content);
      expect(response[0].questionId).to.equal(answerStubValue.questionId);
    });
});