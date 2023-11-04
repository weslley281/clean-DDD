import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Question } from '../../enterprise/entities/questions';
import { QuestionRepository } from '../repositories/question_repository';

interface Request {
  authorId: string;
  title: string;
  content: string;
}

interface Response {
  question: Question;
}

export class CreateQuestionUseCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute({ authorId, title, content }: Request): Promise<Response> {
    const question = Question.create({
      authorId: new UniqueEntityID(authorId),
      title,
      content,
    });

    await this.questionRepository.create(question);

    return { question };
  }
}
