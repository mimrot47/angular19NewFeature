import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { resource } from '@angular/core';
import { promises } from 'dns';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  private url:string = "https://jsonplaceholder.typicode.com/users";
  userData:any;

 constructor(private Http:HttpClient){
 }

 ngOnInit(): void {
  // this.getData();
   
 }
 
 trxuserData = rxResource({
  loader:()=>this.Http.get<any>(this.url)
})

userdata = resource({
  loader:()=>fetch(this.url).then(res=>res.json()as Promise<any>)
})
//  getData(){}

 
  // return this.Http.get<any>(this.url).subscribe((res:any)=>{
  //   this.userData = res;
  // });

}
