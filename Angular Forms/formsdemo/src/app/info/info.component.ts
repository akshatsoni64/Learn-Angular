import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  showInfo: Boolean = false;

  name = null;
  email = null;
  mobile = null;

  info_form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    mobile: new FormControl(null, [Validators.required, Validators.min(1111111111)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    this.showInfo = this.info_form.valid;
    this.name = this.info_form.controls['name'].value;
    this.email = this.info_form.controls['email'].value;
    this.mobile = this.info_form.controls['mobile'].value;
    this.info_form.reset();
  }

}
