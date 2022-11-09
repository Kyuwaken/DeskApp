import { Component, Pipe } from '@angular/core';

@Pipe({
  name: "phone"
})
export class PhonePipe {
  transform(rawNumb: any): string {
    rawNumb = rawNumb.charAt(0) !== "0" ? "0" + rawNumb : "" + rawNumb;
    let newStr = "";
    let i = 0;
    for (; i < Math.floor(rawNumb.length / 2) - 1; i++) {
      newStr = newStr + rawNumb.substr(i * 2, 2) + "-";
    }
    return newStr + rawNumb.substr(i * 2)
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task 2 Vincentius Christian';
}
