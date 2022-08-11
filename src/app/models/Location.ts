
export default class Location {
  private _city: string;
  private _country: string;

  constructor(city: string, country: string) {
    this._city = city;
    this._country = country;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }
}
