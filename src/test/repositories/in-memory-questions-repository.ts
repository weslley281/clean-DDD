import { QuestionRepository } from '@/domain/forum/aplication/repositories/question_repository';
import { Question } from '@/domain/forum/enterprise/entities/questions';

export class InMemoryQuestionRepository implements QuestionRepository {
  public items: Question[] = [];

  async create(question: Question): Promise<void> {
    this.items.push(question);
  }
}
