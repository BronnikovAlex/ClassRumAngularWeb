export class Users{

  private users_id:any;
  private username:any;
  private passsword:any;
  private surname:any;
  private patronymic:any;
  private DOB:any;

  private _role_id:any;
  private _group_id:any;

  constructor(users_id:any,username:any , password : any , surname: any , patronymic:any , DOB: any , _role_id:any, _group_id:any) {

    this.users_id = users_id;
    this.username = username;
    this.passsword = password;
    this.surname = surname;
    this.patronymic = patronymic;
    this.DOB = DOB;
    this._role_id = _role_id;
    this._group_id = _group_id;


  }


}
