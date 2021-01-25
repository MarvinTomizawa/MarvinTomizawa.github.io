export default class RouteModel {
  constructor(
    path: string,
    description: string,
    component: any,
    exact: boolean = false,
    show: boolean = true
  ) {
    this.path = path;
    this.description = description;
    this.component = component;
    this.exact = exact;
    this.show = show;
  }

  path: string;
  description: string;
  component: any;
  exact: boolean;
  show: boolean;
}
