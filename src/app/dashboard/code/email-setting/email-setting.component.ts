import { Component, OnInit } from '@angular/core';
import { EmailSetting } from '../../../Models/CodeModel';
import { EmailSettingData, EmailSettingTempData, CodeService } from '../code.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { AppSettingsService } from '../../../Services/App-settings.Service';
import { BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-email-setting',
  templateUrl: './email-setting.component.html',
  styleUrls: ['./email-setting.component.css']
})
export class EmailSettingComponent implements OnInit {
  showFilterRow: boolean;
  emailsettingdt : EmailSetting[];
  emailsettingdata : EmailSettingData;
  emailsettingtempdata: EmailSettingTempData[];
  popupVisible = false;  
  emailtypes: string[];

  constructor(private router: Router, private toastr: ToastrService,private fb: FormBuilder,private setting : AppSettingsService , private modalService: BsModalService, private codeservice: CodeService) 
  { 
      this.emailsettingdata = this.codeservice.getEmailSettingData();
      this.emailtypes = this.codeservice.getEmailTypes();
      this.emailsettingtempdata = this.codeservice.getEmailSetting();
      console.log(this.emailsettingdata);
      this.showFilterRow = true;
  }

  ngOnInit() {
  }

  showPopup() 
  { 
      this.emailsettingdata = this.codeservice.getEmailSettingData();
      this.popupVisible = true;
  }

  HidePopup() 
  {            
      this.popupVisible = false;
  }

}
