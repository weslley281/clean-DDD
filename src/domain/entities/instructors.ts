import { randomUUID } from 'crypto';
import { Entity } from '../../core/entities/entity';

interface Props {
  name: string;
}

export class Instructor extends Entity<Props> {}
