export class Export {
  _id: number;
  _name: string;
  _full_date: string;
  _action_user: string;
  _premises_id: number;

  constructor(id, name, fullDate, actionUser, premisesId) {
    this._id = id;
    this._name = name;
    this._full_date = fullDate;
    this._action_user = actionUser;
    this._premises_id = premisesId;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get full_date() {
    return this._full_date;
  }

  set full_date(fullDate) {
    this._full_date = fullDate;
  }

  get action_user() {
    return this._action_user;
  }

  set action_user(actionUser) {
    this._action_user = actionUser;
  }

  get premises_id() {
    return this._premises_id;
  }

  set premises_id(premisesId) {
    this._premises_id = premisesId;
  }
}


