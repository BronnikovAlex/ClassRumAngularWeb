export class Homework{

  private homework_id:any;
  private deadline_date:any;
  private homework_description:any;
  private way_homework:any
  private status_homework:any;

  private _plan_id:any;

  constructor(homework_id:any,
              deadline_date: any ,
              homework_description: any ,
              way_homework : any,
              status_homework : any,
              _plan_id:any
              ) {
    this.homework_id = homework_id;
    this.deadline_date = deadline_date;
    this.homework_description = homework_description;
    this.way_homework = way_homework;
    this.status_homework = status_homework;
    this._plan_id = _plan_id;

  }

}
