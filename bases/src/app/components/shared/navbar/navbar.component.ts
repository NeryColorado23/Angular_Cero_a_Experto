import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  //se usar routerlink para poder usarlo en el html
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class Navbar {

}
