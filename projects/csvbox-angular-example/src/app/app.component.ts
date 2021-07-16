import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <lib-csvbox-angular [onImport]="boundCallback" [user]="{ user_id: 'default567' }"></lib-csvbox-angular>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'csvbox-angular-example';

  public boundCallback: Function;

  public ngOnInit(){
    this.boundCallback = this.callback.bind(this);
  }

  public callback(result, data){
    if(result) {
      console.log("Sheet uploaded successfully");
      console.log(data.row_success + " rows uploaded");
    }else{
      console.log("There was some problem uploading the sheet");
    }
  }

}
