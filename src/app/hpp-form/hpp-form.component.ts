import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hpp-form',
  templateUrl: './hpp-form.component.html',
  styleUrls: ['./hpp-form.component.css']
})
export class HppFormComponent implements OnInit {

  productFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      product: ['', Validators.required],
      pricee:  ['', Validators.required]
    });  
  }

  submit() {
    // https://stackoverflow.com/questions/15847726/is-there-a-simple-way-to-use-button-to-navigate-page-as-a-link-does-in-angularjs
    // $location.path( '/new-page.html' );
    // location.href = '#/new-page.html';
    // 
    console.log(this.productFormGroup.value);
    // this.snackBar.open("Data Submitted to goCardless API Backend", "Close", {duration: 2000});
  }

}
