import Location from "./Location";
import Technology from "./Technology";
import ProjectLink from "./ProjectLink";

export default class Project {
  private _name: string;
  private _description: string;
  private _status: string;
  private _category: string;
  private _startDate: Date;
  private _endDate: Date;
  private _location: Location;
  private _client: string;
  private _technologies: Technology[];
  private _links: ProjectLink[];

  constructor(name: string, description: string, status: string, category: string, startDate: Date, endDate: Date, location: Location, client: string, technologies: Technology[], links: ProjectLink[]) {
    this._name = name;
    this._description = description;
    this._status = status;
    this._category = category;
    this._startDate = new Date(startDate);
    this._endDate = new Date(endDate);
    this._location = location;
    this._client = client;
    this._technologies = technologies;
    this._links = links;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
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

  get client(): string {
    return this._client;
  }

  set client(value: string) {
    this._client = value;
  }

  get technologies(): Technology[] {
    return this._technologies;
  }

  set technologies(value: Technology[]) {
    this._technologies = value;
  }

  get links(): ProjectLink[] {
    return this._links;
  }

  set links(value: ProjectLink[]) {
    this._links = value;
  }
}
