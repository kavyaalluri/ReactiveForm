//password confirm password cross field check

import { AbstractControl } from "@angular/forms";

export function passwordValidator(control:AbstractControl):{ [key:string] :boolean} |null{
    const password=control.get('password');
    const confirmpassword=control.get('confirmpassword');
return password && confirmpassword && (password.value !== confirmpassword.value) ? {'misMatch' :true} :null ;
}