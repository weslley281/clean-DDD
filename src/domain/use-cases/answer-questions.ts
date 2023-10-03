import { Answer } from '../entities/answer';

interface Request {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionsUseCase {
  execute({ instructorId, questionId, content }: Request) {
    const answer = new Answer({ content, authorId: instructorId, questionId });

    return answer;
  }
}
