import { expect, test } from 'vitest';
import { AnswerQuestionsUseCase } from './answer-questions';

test('creat an answer', () => {
  const answerQuestion = new AnswerQuestionsUseCase();

  const answer = answerQuestion.execute({
    content: 'Nova resposta',
    questionId: '1',
    instructorId: '2',
  });

  expect(answer.content).toEqual('Nova resposta');
});
