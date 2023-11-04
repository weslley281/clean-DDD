import { Question } from '../../enterprise/entities/questions';
import { QuestionRepository } from '../repositories/question_repository';
import { AnswerQuestionUseCase } from './answer-questions';
import { CreateQuestionUseCase } from './create-question';

const fakeQuestionRepository: QuestionRepository = {
  create: async (question: Question) => {},
};

test('create an questionr', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository);

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Nova Pergunta',
    content: 'Conteudo',
  });

  expect(question.id).toBeTruthy();
});
