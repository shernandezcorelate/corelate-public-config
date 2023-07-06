import { Group } from './group.model';
import { Permission } from './permission.model';

export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public mobileNumber: string,
    public name: {
      familyName: string,
      givenName: string,
      middleName: string,
      suffix?: string,
      prefix?: string,
      degree?: string
    },
    public address: {
      address: string,
      address2?: string,
      province: string,
      city: string,
      country: string,
      countryName: string,
      zipCode?: string
    },
    public groups: Group[],
    public permissions: Permission[],
    public updatedBy: string,
    public updatedDate: Date
  ) {}
}
