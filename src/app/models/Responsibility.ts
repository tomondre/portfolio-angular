
export default class Responsibility {
  private _responsibility: string;

  constructor(responsibility: string) {
    this._responsibility = responsibility;
  }

  get responsibility(): string {
    return this._responsibility;
  }

  set responsibility(value: string) {
    this._responsibility = value;
  }
}
