
export default class Activity {
  private _activity: string;

  constructor(activity: string) {
    this._activity = activity;
  }

  get activity(): string {
    return this._activity;
  }

  set activity(value: string) {
    this._activity = value;
  }
}
