import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder ,Validators} from '@angular/forms';
import { User } from './User';
//import { forbiddenFunction } from './username.validator'
import { forbiddenFunction } from './username.validator';
import { passwordValidator } from './password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

 /* public userName:Array<User>=new Array<User>();
  title = 'reactive';
  topics=['navi','navi naresh','navikavi','lucky'];
  constructor(private b:FormBuilder){}

  registrationForm=new FormGroup({
    uname:new FormControl(),
    pwd:new FormControl(),
    cpwd:new FormControl(),
    email:new FormControl(),
    mobile:new FormControl() ,
    address:new FormGroup({
        city:new FormControl(),
        street:new FormControl(),
        state:new FormControl()
    }),
})



registrationForm=this.b.group({
  uname:['' ,Validators.required],
  pwd:[''],
  cpwd:[''],
  email:[''],
  mobile:[0],
  address:this.b.group({

    city:[''],
    street:[''],
    state:['']
  }),

})

submitForm(){
  console.log(this.registrationForm.value);
}
loadAPI(){
 this.registrationForm.setValue({
  uname:"kavya",
 
    pwd:"Kavya@143",
    cpwd:"Kavya@143",
    email:"kavya@gmail.com",
    mobile:894567823 ,
    address:{
        city:"Hyd",
        street:"Sri nagar",
        state:"telanagna"
    }


 });

}
 load(){
  this.registrationForm.patchValue({
    uname:"navya",
    pwd:'Kavya',
    cpwd:"Kavyaaa"
  })
 
 
  }

 }*/
 constructor(
  private formBuilder: FormBuilder
) { }
addUserForm:any;
isFormSubmitted = false;

ngOnInit(): void {

  // Patterns
  const PAT_NAME = "^[a-zA-Z ]{2,20}$";
  const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";

  // Defining Form Controlls with initial value and validations for each form controll
  this.addUserForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(PAT_NAME) ,forbiddenFunction(/password/)]],
    email: ['', [Validators.required, Validators.pattern(PAT_EMAIL)]],
    address: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmpassword: ['', [Validators.required, Validators.minLength(8)]]
  } ,{ validator : passwordValidator});
}

// Submit User Form
submitUser() {

  // Set flag to true
  this.isFormSubmitted = true;

  // Return if form is invalid
  if (this.addUserForm.invalid) {
    return;
  }
  console.log('Submit', this.addUserForm.value);
}


}

