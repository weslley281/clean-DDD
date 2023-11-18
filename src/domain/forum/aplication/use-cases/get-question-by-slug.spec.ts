import { InMemoryQuestionRepository } from '@/test/repositories/in-memory-questions-repository';
import { GetQuestionBySlugUseCase } from './get-question-by-slug';
import { makeQuestion } from '@/test/factories/make-question';
import { Slug } from '../../enterprise/entities/value-objects/slug';

let inMemoryQuestionRepository: InMemoryQuestionRepository;
let sut: GetQuestionBySlugUseCase;

describe('Get Question by slug', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository();
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionRepository);
  });

  it('It should be to get a question by slug', async () => {
    const newQuestion = makeQuestion({
      slug: Slug.create('Exemple-Question'),
    });

    console.log(newQuestion);

    inMemoryQuestionRepository.create(newQuestion);

    const { question } = await sut.execute({
      slug: 'Exemple-Question',
    });

    expect(question.id).toBeTruthy();
    expect(inMemoryQuestionRepository.items[0].id).toEqual(question.id);
  });
});
