import About from "../../components/Content/About/About";
import Contact from "../../components/Content/Contact/Contact";
import Experience from "../../components/Content/Experience/Experience";
import Home from "../../components/Content/Home/Home";
import NotFound from "../../components/Content/NotFound/NotFound";
import Playground from "../../components/Content/Playground/Playground";
import Skills from "../../components/Content/Skills/Skills";
import RouteModel from "../../models/Router/RouteModel";

export const routes: RouteModel[] = [
  new RouteModel("/", "header.link.home", Home, true, false),
  new RouteModel("/about", "header.link.about", About),
  new RouteModel("/experience", "header.link.experience", Experience),
  new RouteModel("/skills", "header.link.skills", Skills),
  new RouteModel("/contact", "header.link.contact", Contact),
  new RouteModel("/playground", "", Playground, false, false),
  new RouteModel("*", "header.link.notFound", NotFound, false, false),
];
