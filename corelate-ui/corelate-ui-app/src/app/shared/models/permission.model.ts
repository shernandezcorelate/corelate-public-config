export class PermissionGroup {
  constructor(
    public id: number,
    public module: string,
    public description: string,
    public permissions: Permission[],
    public updatedBy: string,
    public updatedDate: Date
  ) {}
}

export class Permission {
  constructor(
    public id: number,
    public module: string,
    public action: string,
  ) {}
}
