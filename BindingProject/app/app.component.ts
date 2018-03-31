import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items=["Java",".Net","Sql","Python"];
  newItem="abc";
  pushItem=function(){
    if(this.newItem!=="")
    {
      this.items.push(this.newItem);
      this.newItem="";
    }
  }
  removeItems=function(index)
  {
      this.items.splice(index,1);
  }
  // obj={
  //   "id":1,
  //   "Name":"Jayasimha"
  // }
  // Lang=["Java","C#","Python"];
  // isTrue=false;
  // myName="jayasimha";
}
