import { Inject,Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private title: Title,@Inject(DOCUMENT) private doc) { }
  
  setPageTitle(title: string) {
    this.title.setTitle(title);
 }   

 getPageTitle() {
    return this.title.getTitle();
 }

 createCssURL(data) {
   
   data.forEach(value => {
     let link : HTMLLinkElement = this.doc.createElement('link');
     link.setAttribute('rel', value.rel);
     this.doc.head.appendChild(link);
     link.setAttribute('href', value.link);
   });
 
 }

 createScriptURL(data){
  data.forEach(value => {
  let script : HTMLScriptElement = this.doc.createElement('script');
  this.doc.body.appendChild(script);
  script.setAttribute('src', value.link);
  })
};
}
