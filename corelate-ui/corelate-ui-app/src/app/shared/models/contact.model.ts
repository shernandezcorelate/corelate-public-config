export class ContactForm {
  constructor(
    public name: number,
    public email: string,
    public subject: number,
    public message: string,
    public updatedBy: string,
    public updatedDate: Date
  ) {}
}

export class ContactInfo {
  constructor(
    public address: string,
    public contactDetails: ContactDetails[],
    public latitude: number,
    public longitude: number,
    public updatedBy: string,
    public updatedDate: Date
  ) {}
}

export class ContactDetails {
  constructor(
    public contactType: string,
    public contactDetails: string,
    public updatedBy: string,
    public updatedDate: Date
  ) {}
}
