import { Question } from '../../enterprise/entities/question';
import { QuestionRepository } from '../repositories/question_repository';

interface Request {
  slug: string;
}

interface Response {
  question: Question;
}

export class GetQuestionBySlugUseCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute({ slug }: Request): Promise<Response> {
    const question = await this.questionRepository.findBySlug(slug);

    if (!question) {
      throw new Error('Question not found');
    }

    return { question };
  }
}
