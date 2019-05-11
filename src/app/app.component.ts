import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "my-angular-element",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  @Input()
  public username: String;

  ngOnInit() {
    console.log(this.username);
  }
}
