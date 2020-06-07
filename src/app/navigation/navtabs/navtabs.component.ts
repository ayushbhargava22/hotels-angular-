import { HomeComponent } from './../../home/home.component';
import { Component, OnInit } from '@angular/core';
import { LinkService } from '../../../core/link.service';
import urlLink from '../../../website-link';


@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {
  urllink = urlLink;
  constructor(private linkService: LinkService) { }

  ngOnInit() {
    this.createCssLink();
    this.createScriptLink();
  }
  createCssLink() {
    this.linkService.createCssURL(this.urllink.css);
  } 

  createScriptLink(){
  this.linkService.createScriptURL(this.urllink.script);
  }
}
