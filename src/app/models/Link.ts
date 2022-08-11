export default class Link {
  private _description: string;
  private _url: string;

  constructor(description: string, url: string) {
    this._description = description;
    this._url = url;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
