import { InMemoryAnswerRepository } from '@/test/repositories/in-memory-answers-repository';
import { AnswerQuestionUseCase } from './answer-questions';

let inMemoryAnswerRepository: InMemoryAnswerRepository;
let sut: AnswerQuestionUseCase;

describe('Create Answers', () => {
  beforeEach(() => {
    inMemoryAnswerRepository = new InMemoryAnswerRepository();
    sut = new AnswerQuestionUseCase(inMemoryAnswerRepository);
  });

  it('It should be able to create a answer', async () => {
    const { answer } = await sut.execute({
      instructorId: '1',
      questionId: '1',
      content: 'Conteudo da resposta...',
    });

    expect(answer.id).toBeTruthy();
    expect(inMemoryAnswerRepository.items[0].id).toEqual(answer.id);
  });
});
