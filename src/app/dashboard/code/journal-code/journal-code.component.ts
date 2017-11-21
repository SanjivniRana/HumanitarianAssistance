import { Component, OnInit } from '@angular/core';
import { CodeService, JournalCode } from '../code.service';

@Component({
  selector: 'app-journal-code',
  templateUrl: './journal-code.component.html',
  styleUrls: ['./journal-code.component.css']
})
export class JournalCodeComponent implements OnInit {

  dataSource: any;
  showFilterRow: boolean;
  data: any;

  //Edit / Delete POPUP
  popupVisibleEditJournalCode = false;
  popupVisibleDeleteJournalCode = false;
  popupAddJournalVisible = false;
  //Edit form
  journalCode: JournalCode[];
  // accountLevel: AccountLevelDropdowns[];

  constructor(private codeService: CodeService) {
    this.showFilterRow = true;

    //TODO: Edit popup  
    //NOTE: cahnge form data name
    this.journalCode = this.codeService.getJournalCodes();
    this.dataSource = {
      store: {
        type: 'array',
        key: 'ID',
        data: this.codeService.getJournalCodes()
      }


    }
    // this.accountLevel    
    this.data = {
      data: this.journalCode,
      key: "ID"
    };
  }


  ngOnInit() {
  }

  AddJournal() {
    this.popupAddJournalVisible = true;
  }

  completedValue(rowData) {
    return rowData.Status == "Completed";
  }

  editJournalCode() {
    this.popupVisibleEditJournalCode = true;
  }

  deleteJournalCode() {
    this.popupVisibleDeleteJournalCode = true;
  }
  cancelJournalCode() {
    this.popupAddJournalVisible = false;
  }


}
