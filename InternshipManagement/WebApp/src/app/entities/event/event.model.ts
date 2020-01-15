export class EventModel {
  constructor(
    public id?: string,
    public title?: string,
    public description?: string,
    public startDate?: Date,
    public endDate?: Date,
    public department?: string
  ) {}
}
