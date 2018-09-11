import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = 'Erwan Herledan';
  tabs: any[] = [
    {label: 'Présentation', link: '#about'},
    {label: 'Compétences', link: '#skills'},
    {label: 'Expériences professionnelles', link: '#professionnal'},
    {label: 'Formations', link: '#education'},
    {label: 'Contact', link: '#contact-form'}
  ];

  icons: any[] = [
    {class: 'fa fa-github fa-2x', link: 'https://github.com/eherledan', title: 'Github'},
    {class: 'fa fa-linkedin fa-2x', link: '', title: 'Linkedin'},
    {class: 'fa fa-file fa-2x', link: '', title: 'Curriculum vitæ en PDF'}
  ];

  navbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
