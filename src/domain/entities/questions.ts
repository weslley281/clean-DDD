import { randomUUID } from 'crypto';

interface Props {
  title: string;
  content: string;
  authorId: string;
}

export class Question {
  public id: string;
  public title: string;
  public content: string;
  public authorId: string;

  constructor(props: Props, id?: string) {
    this.id = id ?? randomUUID();
    this.title = props.title;
    this.content = props.content;
    this.authorId = props.authorId;
  }
}
