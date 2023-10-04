import { expect, test } from 'vitest';
import { AnswerQuestionsUseCase } from './answer-questions';
import { AnswerRepository } from '../repositories/answers-repository';
import { Answer } from '../entities/answer';

const fakeAnswerRepository: AnswerRepository = {
  create: async function (answer: Answer): Promise<void> {
    return;
  },
};

test('creat an answer', async () => {
  const answerQuestion = new AnswerQuestionsUseCase(fakeAnswerRepository);

  const answer = await answerQuestion.execute({
    content: 'Nova resposta',
    questionId: '1',
    instructorId: '2',
  });

  expect(answer.content).toEqual('Nova resposta');
});
