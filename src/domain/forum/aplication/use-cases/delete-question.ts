import { QuestionsRepository } from '../repositories/question_repository';

interface Request {
  authorId: string;
  questionId: string;
}

interface Response {}

export class DeleteQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({ questionId, authorId }: Request): Promise<Response> {
    const question = await this.questionsRepository.findById(questionId);

    if (!question) {
      throw new Error('Question not found.');
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed.');
    }

    await this.questionsRepository.delete(question);

    return {};
  }
}
