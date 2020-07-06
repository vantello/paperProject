import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // var mainMenu = document.getElementById("mainMenu");
    // if(this.router.url === '/menu-component'){
    //   mainMenu.style.display = "none";
    // }
  }

}
