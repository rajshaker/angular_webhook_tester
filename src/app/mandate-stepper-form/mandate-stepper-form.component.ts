import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mandate-stepper-form',
  templateUrl: './mandate-stepper-form.component.html',
  styleUrls: ['./mandate-stepper-form.component.css']
})
export class MandateStepperFormComponent implements OnInit {

  customerFormGroup: FormGroup;
  bankFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  this.customerFormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName:  ['', Validators.required],
    email:     ['', Validators.required]
  });

  this.bankFormGroup = this.fb.group({
    accountName:   ['', Validators.required],
    sortCode:      ['', Validators.required],
    accountNumber: ['', Validators.required],
    dualSignatureAccounts: ''
  });  
}

  submit(): void {
    console.log(this.customerFormGroup.value);
    console.log(this.bankFormGroup.value);
    this.snackBar.open("Data Submitted to goCardless API Backend", "Close", {duration: 2000});
  }
}
