export class Appointment {

  constructor(
    public appointmentId: number,
    public title: string,
    public startDate: Date,
    public endDate: Date,
    public identifier: string,
    public description: string,
    public due: boolean,
    public priority: boolean,
    public channelType: string,
    public leadId: number,
    public workflowId: number,
    public creationDate: Date,
  ) {}
}
