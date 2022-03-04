import { Component, ViewChild } from '@angular/core';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import Tribute from 'tributejs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-richtexteditor';
  @ViewChild('exampleRTE')
  public rteObject ! : RichTextEditorComponent;

  public showCardView(args: any): void {
    if(args.requestType === 'Links') {
      const embedCardElement: HTMLElement = document.createElement('blockquote');
      embedCardElement.setAttribute('class', 'embedly-card');
      embedCardElement.appendChild(args.elements[0].parentElement);
      embedCardElement.appendChild(document.createElement('p'));
      args.range.insertNode(embedCardElement);
    }
    
  }

  public onCreate(): void {
    let employeeNameList : Tribute<{key: string; value: string;}> = new Tribute({
     values : [
      { key: 'Phil Heartman', value: 'pheartman' },
      { key: 'Gordon Ramsey', value: 'gramsey' },
      { key: 'Jordan Humphreys', value: 'jhumphreys' },
      { key: 'Howard Johnson', value: 'hjohnson' }
     ]

    })
    employeeNameList.attach(this.rteObject.inputElement);
  }
  
}
