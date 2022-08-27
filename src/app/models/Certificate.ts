export default class Certificate {
  private _name: string;
  private _organization: string;
  private _description: string;
  private _issuedDate: Date;
  private _expiryDate: Date;
  private _credentialId: string;
  private _url: string;

  constructor(name: string, organization: string, description: string, issuedDate: Date, expiryDate: Date, credentialId: string, url: string) {
    this._name = name;
    this._organization = organization;
    this._description = description;
    this._issuedDate = issuedDate;
    this._expiryDate = expiryDate;
    this._credentialId = credentialId;
    this._url = url;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get organization(): string {
    return this._organization;
  }

  set organization(value: string) {
    this._organization = value;
  }

  get issuedDate(): Date {
    return this._issuedDate;
  }

  set issuedDate(value: Date) {
    this._issuedDate = value;
  }

  get expiryDate(): Date {
    return this._expiryDate;
  }

  set expiryDate(value: Date) {
    this._expiryDate = value;
  }

  get credentialId(): string {
    return this._credentialId;
  }

  set credentialId(value: string) {
    this._credentialId = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
