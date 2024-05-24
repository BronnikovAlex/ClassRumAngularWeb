export class Comment_teacher {

  private comment_teacher_id:any;
  private teacher_comment:any;

  private _homework_id:any;

  constructor(comment_teacher_id:any,teacher_comment:any, _homework_id:any) {
    this.comment_teacher_id = comment_teacher_id;
    this.teacher_comment = teacher_comment;
    this._homework_id = _homework_id;
  }


}
