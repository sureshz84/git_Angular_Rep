import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component,ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';
  constructor(
    private vcr : ViewContainerRef,
    private cfr : ComponentFactoryResolver
  ){}
  async loadAdmin()
  {
    this.vcr.clear();
    const {ListComponent} = await import ('./admin/list/list.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(ListComponent)
    )

  }
  async loadUser()
  {
    this.vcr.clear();
    const {LoginComponent} = await import ('./admin/login/login.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(LoginComponent)
    )

  }
}
