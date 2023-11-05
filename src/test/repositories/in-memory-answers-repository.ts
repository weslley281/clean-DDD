import { AnswersRepository } from '@/domain/forum/aplication/repositories/answers-repository';
import { Answer } from '@/domain/forum/enterprise/entities/answer';

export class InMemoryAnswerRepository implements AnswersRepository {
  public items: Answer[] = [];

  async create(answer: Answer): Promise<void> {
    this.items.push(answer);
  }
}
