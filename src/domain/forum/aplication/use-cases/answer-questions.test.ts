import { Answer } from '../../enterprise/entities/answer';
import { AnswersRepository } from '../repositories/answers-repository';
import { AnswerQuestionUseCase } from './answer-questions';

const fakeAnswerRepository: AnswersRepository = {
  create: async (answer: Answer) => {},
};

test('create an answer', async () => {
  const AnswerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);

  const answer = await AnswerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova Resposta',
  });

  expect(answer.content).toEqual('Nova Resposta');
});
