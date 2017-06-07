import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f')
  signUpForm : NgForm;
  defaultQuestion = 'pet';

  submitted = false;

  genders= ['male', 'female'];
  user = {
    username : '',
    email : '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData : {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret : 'pet',
    //   question: '',
    //   gender: 'male'
    // });
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form : NgForm) {
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted =true;
    console.log(this.signUpForm);
    this.user = {
      username : this.signUpForm.value.userData.username,
      email : this.signUpForm.value.userData.email,
      secretQuestion: this.signUpForm.value.secret,
      answer: this.signUpForm.value.question,
      gender: this.signUpForm.value.gender
    }

    this.signUpForm.reset();

  }

}
