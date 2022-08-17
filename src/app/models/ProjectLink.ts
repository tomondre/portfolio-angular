export default class ProjectLink {
  private _description: string;
  private _url: string;
  private _type: string;

  constructor(description: string, url: string, type: string) {
    this._description = description;
    this._url = url;
    this._type = type;
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

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
}
