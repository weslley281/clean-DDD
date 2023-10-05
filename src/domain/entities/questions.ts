import { randomUUID } from 'crypto';
import { Entity } from '../../core/entities/entity';

interface Props {
  title: string;
  content: string;
  authorId: string;
  slug: string;
}

export class Question extends Entity<Props> {}
