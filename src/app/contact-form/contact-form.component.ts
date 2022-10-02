import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegularExpressionConstants } from '@shared/constants/RegularExpressionConstants';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  requestQuoteForm: FormGroup;
  personalQuoteForm: FormGroup;

  countriesList = [
    {id: 0, name: 'Germany'},
    {id: 1, name: 'Pakistan'}
  ];

  personalQuoteTypesList = [
    {id: 0, name: 'Customs support'},
    {id: 1, name: 'Misc support'}
  ];

  constructor(
    private fb: FormBuilder,
    private _regularExpressionConstants: RegularExpressionConstants
    ) { }

  ngOnInit() {
    this.createRequestForm();
  }

  createRequestForm(){
    this.requestQuoteForm = this.fb.group({
      customerType: ["",[]],
      choiceOfService: ["0",[]],
      firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern(this._regularExpressionConstants.Name)]],
      lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern(this._regularExpressionConstants.Name)]],
      company: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern(this._regularExpressionConstants.Name)]],
      email: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern(this._regularExpressionConstants.Email)]],
      phone: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern(this._regularExpressionConstants.Numeric)]],
      country: ['',[]],
    });

    this.personalQuoteForm = this.fb.group({
      quoteType: ['',[]]
    });
  }

  submitRequestQuoteForm(){
    console.log(this.requestQuoteForm.getRawValue());
  }

  submitPersonalQuoteForm(){

  }

}
