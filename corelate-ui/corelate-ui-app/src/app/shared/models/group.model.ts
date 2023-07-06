import { Permission } from './permission.model';

export class Group {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public permissions: Permission[],
    public updatedBy: string,
    public updatedDate: Date
  ) {}
}
