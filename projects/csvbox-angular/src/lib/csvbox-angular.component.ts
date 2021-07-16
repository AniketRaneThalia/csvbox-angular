import { Component, OnInit, ViewChild, ElementRef, ɵCodegenComponentFactoryResolver, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'lib-csvbox-angular',
  template: `
    <div>
      <button (click)="openModal()">Hello</button>
      <div #holder class="holder">
      <iframe #iframe class="iframe" src="https://staging.csvbox.io/embed/WFvwX7nMLJ8isMw0Ph560DB3CWTsJC"></iframe>
      </div>
    </div>
  `,
  styleUrls:['./csvbox-angular.component.css'],
})

export class CsvboxAngularComponent implements OnInit, AfterViewInit {

  isModalShown = false;

  @ViewChild('holder') holder: any;
  @ViewChild('iframe') iframe: any;
  @Input() onImport: Function;
  @Input() user: Object;

  constructor() {

  }

  ngAfterViewInit(): void {

    window.addEventListener("message", (event) => {
      if (event.data === "mainModalHidden") {
          this.holder.nativeElement.style.display = 'none';
          this.holder.nativeElement.querySelector('iframe').src = this.holder.nativeElement.querySelector('iframe').src;
          this.isModalShown = false;
      }
      if(event.data === "uploadSuccessful") {
        this.onImport(true);
      }
      if(event.data === "uploadFailed") {
        this.onImport(false);
      }
      if(typeof event.data == "object") {
          if(event.data.type && event.data.type == "data-push-status") {
              if(event.data.data.import_status = "success"){
                this.onImport(true, event.data.data);
              }else {
                this.onImport(false, event.data.data);
              }

          }
      }
    }, false);

    let iframe = this.iframe.nativeElement;
    let user = this.user;

    iframe.onload = function () {
      if(user) {
        iframe.contentWindow.postMessage({
          "customer" : user
        }, "*");
      }
    }

  }

  ngOnInit(): void {

  }

  openModal(): void {
    if(!this.isModalShown) {
      this.isModalShown = true;
      console.log(this.iframe.nativeElement);
      this.iframe.nativeElement.contentWindow.postMessage('openModal', '*');
      this.holder.nativeElement.style.display = 'block';
    }
  }

}
