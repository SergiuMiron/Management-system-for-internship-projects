export class ProjectModel {

  constructor(
    public id?: number,
    public name?: string,
    public startDate?: Date,
    public endDate?: Date,
    public technologyStack?: string,
    public idSdm?: number
  ) {}
}
