// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { AccountsService, Company, Document } from '../accounts.service';
// import { Router, ActivatedRoute } from '@angular/router';
// import { DxDataGridComponent, DxTextBoxModule, DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxNumberBoxModule, DxButtonModule, DxFormModule, DxFormComponent, DxPopupModule, DxTemplateModule, DxFileUploaderModule } from 'devextreme-angular';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//     selector: 'app-document',
//     templateUrl: './document.component.html'
// })
// export class DocumentComponent implements OnInit {
//     dataSource: Document[];
//     popupVisible = false;
//     addNewDocument: any;

//     constructor(private accountservice: AccountsService, private router: Router, private fb: FormBuilder) {
//         this.dataSource = this.accountservice.getVouchersDocumentList();

//         this.addNewDocument = {           
//             DocumentName: "",
//             DocumentFilePath: "",
//             DocumentDate: ""
//         };

//         this.createForm();
//     }
//     ngOnInit() {

//     }

//     addDocument() {
//         this.popupVisible = true;
//     }

//     cancelDeleteVoucher() {
//         this.popupVisible = false;
//     }
//     backToVouchers() {
//         this.router.navigate(['../vouchers']);
//     }
    
//     form: FormGroup;
//     loading: boolean = false;
//     @ViewChild('fileInput') fileInput: ElementRef;

//     createForm() {
//         this.form = this.fb.group({
//             name: ['', Validators.required],
//             avatar: null
//         });
//     }

//     onFileChange(event) {
//         debugger;
//         let reader = new FileReader();
//         if (event.target.files && event.target.files.length > 0) {
//             let file = event.target.files[0];
//             reader.readAsDataURL(file);
//             reader.onload = () => {
//                 this.form.get('avatar').setValue({
//                     filename: file.name,
//                     filetype: file.type,
//                     value: reader.result.split(',')[1]
//                 })
//             };
//         }
//     }

//     onSubmit() {
//         const formModel = this.form.value;
//         this.loading = true;
//         // In a real-world app you'd have a http request / service call here like
//         // this.http.post('apiUrl', formModel)
//         setTimeout(() => {
//             console.log(formModel);
//             alert('done!');
//             this.loading = false;
//         }, 1000);
//     }

//     clearFile() {
//         this.form.get('avatar').setValue(null);
//         this.fileInput.nativeElement.value = '';
//     }

//     imageURL: string;
//     imageData = {Image: ""} 
//       //Image Select
//   onImageSelect(event: any) {
//     //for dx-file-uploager path read
//     var file: File = event.value[0];    
//     var myReader: FileReader = new FileReader();
//     myReader.readAsDataURL(file);
//     myReader.onloadend = (e) => {
//       this.imageURL = myReader.result;
//       console.log('Path --> ', this.imageURL);
//     }
//   }

//   // MainLevelAccount Data
//   onFormSubmit(data: any) {    
//     this.addNewDocument.DocumentFilePath=this.imageURL;
//     console.log(data);

//   }

// }
