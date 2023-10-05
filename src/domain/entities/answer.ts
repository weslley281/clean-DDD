import { randomUUID } from 'crypto';
import { Entity } from '../../core/entities/entity';

interface Props {
  content: string;
  authorId: string;
  questionId: string;
}

export class Answer extends Entity<Props> {
  get content() {
    return this.props.content;
  }
}
