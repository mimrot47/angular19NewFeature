import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
 ngOnInit(): void {
   console.log("Componets is loading");
 }
 studendts =[
  {sr:1,name:'gokul',Subject:'Marathi',mark:39,address:'sangli'},
  {sr:1,name:'rajesh',Subject:'Hindi',mark:39,address:'sangli'},
  {sr:1,name:'sanke',Subject:'Science',mark:39,address:'Jalna'},
  {sr:1,name:'rutuja',Subject:'Marathi',mark:39,address:'sangli'}]
}
