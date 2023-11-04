import { Question } from '../../enterprise/entities/questions';

export interface QuestionRepository {
  create(question: Question): Promise<void>;
}