export class Notes{

  private notes_id:any;
  private note_text:any;
  private note_date:any;

  private _user_id:any;
  private _notes_type_id:any;

  constructor(notes_id:any,note_text:any, note_date:any, _user_id:any, _notes_type_id:any) {

    this.notes_id = notes_id;
    this.note_text = note_text;
    this.note_date = note_date;
    this._user_id = _user_id;
    this._notes_type_id = _notes_type_id;

  }

}
