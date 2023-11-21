import { AnswersRepository } from '../repositories/answers-repository';

interface Request {
  authorId: string;
  answerId: string;
}

interface Response {}

export class DeleteAnswerUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({ answerId, authorId }: Request): Promise<Response> {
    const answer = await this.answerRepository.findById(answerId);

    if (!answer) {
      throw new Error('Answer not found.');
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error('Not allowed.');
    }

    await this.answerRepository.delete(answer);

    return {};
  }
}
