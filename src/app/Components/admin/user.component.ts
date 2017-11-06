import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalModule, BsModalComponent } from 'ng2-bs3-modal';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  
})
export class UserComponent implements OnInit {

  constructor() { }

  display: boolean = false;        
  ngOnInit() {
    
  }

  @ViewChild('myModal')
  modal: BsModalComponent;

  close() {
      this.modal.close();
  }
  
  open() {
      this.modal.open();
  }
  
}
