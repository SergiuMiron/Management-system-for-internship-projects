export class ProjectModel {

  constructor(
    public id?: string,
    public name?: string,
    public startDate?: Date,
    public endDate?: Date,
    public technologyStack?: string,
    public idSdm?: number
  ) {}
}
