import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl , Validator, Validators } from '@angular/forms';
import { FormBuilder , FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  email: string =" ";
  password: string =" ";
  loginForm: FormGroup;
  loginError: string | null = null;
  
constructor(public route:Router,private fb:FormBuilder){
  this.loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]

  })
  this.email

}
  ngOnInit(): void {
  }

  onSubmit(){debugger;
    console.log('email:',this.email)
    console.log('Password:',this.password)
    if(this.loginForm){
      const { email,password }=this.loginForm.value;
      const storedUser = localStorage.getItem('angularlocal');
      
      if (storedUser){
        const users = JSON.parse(storedUser);
        const user = users.find((u: { email: any; password: any; }) => u.email === email && u.password === password);

        if (user) {
          this.loginError = null;
          console.log('Login Successful');
          this.route.navigate(['/webpage'])
        } else {
          this.loginError = 'Invalid Credentials';
        }
      } else {
        this.loginError = 'No users found';
      }
      }
    }
  }


