export class FeedbackModel {

  constructor(
    public id?: string,
    public description?: string,
    public rating?: number,
    public idIntern?: string,
    public idMentor?: string
  ) {}
}
