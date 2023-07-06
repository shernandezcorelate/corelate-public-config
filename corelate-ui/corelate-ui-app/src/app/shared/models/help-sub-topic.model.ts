export class HelpSubTopic {
  constructor(
    public title: string,
    public content: string,
    public mainTopic: string,
    public published: boolean,
    public topicId: number,
    public updatedBy: string,
    public updatedDate: Date
  ) {}
}
