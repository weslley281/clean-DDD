import { InMemoryQuestionRepository } from '@/test/repositories/in-memory-questions-repository';
import { CreateQuestionUseCase } from './create-question';
import { GetQuestionBySlugUseCase } from './get-question-by-slug';
import { Question } from '../../enterprise/entities/questions';
import { Slug } from '../../enterprise/entities/value-objects/slug';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

let inMemoryQuestionRepository: InMemoryQuestionRepository;
let sut: GetQuestionBySlugUseCase;

describe('Get Question by slug', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository();
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionRepository);
  });

  it('It should be to get a question by slug', async () => {
    const newQuestion = Question.create({
      title: 'Exempla Question',
      slug: Slug.create('example-question'),
      authorId: new UniqueEntityID(),
      content: 'Exemple Content',
    });

    inMemoryQuestionRepository.create(newQuestion);

    const { question } = await sut.execute({
      slug: 'example-question',
    });

    expect(question.id).toBeTruthy();
    expect(inMemoryQuestionRepository.items[0].id).toEqual(question.id);
  });
});
