import {PLATFORM} from 'aurelia-pal';
  
  export class App {
    router: any;

    configureRouter(config, router){
      config.title = 'Contacts';
      config.map([
        { route: '',              moduleId: PLATFORM.moduleName('no-selection'),   title: 'Select' },
        { route: 'contacts/:id',  moduleId: PLATFORM.moduleName('contact-detail'), name:'contacts' }
      ]);
  
      this.router = router;
    }
  }
 