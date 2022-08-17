export default class Technology {
  private _technology: string;

  constructor(technology: string) {
    this._technology = technology;
  }

  get technology(): string {
    return this._technology;
  }

  set technology(value: string) {
    this._technology = value;
  }
}
