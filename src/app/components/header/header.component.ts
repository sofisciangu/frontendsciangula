import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() clickModal = new EventEmitter<boolean>();

  loginSwitch: boolean;  


  constructor () {


  }

  ngOnInit() {
    
  }


  openModal() {
    this.loginSwitch = true;
    this.clickModal.emit();
  }

};

