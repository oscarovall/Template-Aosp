import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class PageFormValidationComponent implements OnInit {
  basicForm: FormGroup;
  labelForm: FormGroup;
  messagesForm: FormGroup;
  loadingBasicForm: boolean;
  loadingLabelForm: boolean;
  loadingMessagesForm: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.loadingBasicForm = false;
    this.loadingLabelForm = false;
    this.loadingMessagesForm = false;
  }

  ngOnInit() {
    this.initBasicForm();
    this.initLabelForm();
    this.initMessagesForm();
  }

  initBasicForm() {
    this.basicForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  initLabelForm() {
    this.labelForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  initMessagesForm() {
    this.messagesForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  sendBasicForm(valid: boolean) {
    if (valid) {
      this.loadingBasicForm = true;

      setTimeout(() => {
        this.loadingBasicForm = false;
        this.basicForm.reset();
      }, 1000);
    }
  }

  sendLabelForm(valid: boolean) {
    if (valid) {
      this.loadingLabelForm = true;

      setTimeout(() => {
        this.loadingLabelForm = false;
        this.labelForm.reset();
      }, 1000);
    }
  }

  sendMessagesForm(valid: boolean) {
    if (valid) {
      this.loadingMessagesForm = true;

      setTimeout(() => {
        this.loadingMessagesForm = false;
        this.messagesForm.reset();
      }, 1000);
    }
  }

  resetMessagesForm() {
    this.messagesForm.reset();
    this.loadingMessagesForm = false;
  }
}
