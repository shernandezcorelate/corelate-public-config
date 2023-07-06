import { Group } from './group.model';

export class Principal {
  constructor(
    public accountNonExpired: boolean,
    public accountNonLocked: boolean,
    public authorities: any[],
    public createdBy: string,
    public createdDate: string,
    public credentialsNonExpired: boolean,
    public deleted: boolean,
    public enabled: boolean,
    public externalId: number,
    public groups: Group[],
    public id: number,
    public mailActivationCodeCreatedDate: boolean,
    public password: string,
    public updatedBy: string,
    public updatedDate: string,
    public username: string
  ) {}
}
