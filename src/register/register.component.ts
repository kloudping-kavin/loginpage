import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  text:string=" ";
  name:string="";
  email:string=" ";
  password:string=" ";
  contactno:string=" ";


  onSubmit(){
    console.log('Registration form submitted')
    console.log('text:',this.text)
    console.log('email:',this.email)
    console.log('password',this.password)
    console.log('contactno',this.contactno)
    alert('Form submitted successfully!');
    
  }
  value:any={
    name :' ',
    password :'',
    email:'',
    contactno:''

  }


  onRegister(){
    debugger;
    const isLocalData = localStorage.getItem("angularlocal")
    if(isLocalData != null){
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.value);
      localStorage.setItem("angularlocal",JSON.stringify(localArray))
    } else{

      const localArray = []
      localArray.push(this.value);
      localStorage.setItem("angularlocal",JSON.stringify(localArray))

      alert('Registeration successful')

    }
    
    }
}


