import { HelpSubTopic } from './help-sub-topic.model';

export class HelpTopic {
  constructor(
    public id: number,
    public topic: string,
    public published: boolean,
    public subTopics: HelpSubTopic[],
    public updatedBy: string,
    public updatedDate: Date
  ) {}
}
