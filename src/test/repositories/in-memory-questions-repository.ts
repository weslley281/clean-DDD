import { QuestionsRepository } from '@/domain/forum/aplication/repositories/question_repository';
import { Question } from '@/domain/forum/enterprise/entities/questions';

export class InMemoryQuestionRepository implements QuestionsRepository {
  public items: Question[] = [];

  async create(question: Question): Promise<void> {
    this.items.push(question);
  }

  async findById(id: String): Promise<Question | null> {
    const question = this.items.find((item) => item.id.toString() == id);

    if (!question) {
      return null;
    }

    return question;
  }

  async findBySlug(slug: string): Promise<Question | null> {
    const question = this.items.find((item) => item.slug.value == slug);

    if (!question) {
      return null;
    }

    return question;
  }

  async delete(question: Question): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.id == question.id);

    this.items.splice(itemIndex, 1);
  }
}
