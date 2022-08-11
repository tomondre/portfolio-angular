import Location from "./Location";
import Link from "./Link";
import Responsibility from "./Responsibility";

export default class WorkExperience {
  private _position: string;
  private _company: string;
  private _employmentType: string;
  private _isCurrent: boolean;
  private _startDate: Date;
  private _endDate: Date;
  private _location: Location;
  private _responsibilities: Responsibility[];
  private _links: Link[];

  constructor(position: string, company: string, employmentType: string, isCurrent: boolean, startDate: Date, endDate: Date, location: Location, responsibilities: Responsibility[], links: Link[]) {
    this._position = position;
    this._company = company;
    this._employmentType = employmentType;
    this._isCurrent = isCurrent;
    this._startDate = startDate;
    this._endDate = endDate;
    this._location = location;
    this._responsibilities = responsibilities;
    this._links = links;
  }

  get position(): string {
    return this._position;
  }

  set position(value: string) {
    this._position = value;
  }

  get company(): string {
    return this._company;
  }

  set company(value: string) {
    this._company = value;
  }

  get employmentType(): string {
    return this._employmentType;
  }

  set employmentType(value: string) {
    this._employmentType = value;
  }

  get isCurrent(): boolean {
    return this._isCurrent;
  }

  set isCurrent(value: boolean) {
    this._isCurrent = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get location(): Location {
    return this._location;
  }

  set location(value: Location) {
    this._location = value;
  }

  get responsibilities(): Responsibility[] {
    return this._responsibilities;
  }

  set responsibilities(value: Responsibility[]) {
    this._responsibilities = value;
  }

  get links(): Link[] {
    return this._links;
  }

  set links(value: Link[]) {
    this._links = value;
  }
}
