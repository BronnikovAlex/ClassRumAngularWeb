export class Working_plan{

  private working_plan_id:any;
  private plan_title:any;
  private plan_description:any;
  private way_of_file:any;

  private _user_id:any;

  constructor(working_plan_id:any,plan_title:any , plan_description:any , way_of_file:any, _user_id:any ) {

    this.working_plan_id = working_plan_id;
    this.plan_title = plan_title;
    this.plan_description = plan_description;
    this.way_of_file = way_of_file;
    this._user_id = _user_id;

  }


}
