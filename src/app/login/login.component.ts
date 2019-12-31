import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { trigger, style, state, transition, animate, animation, keyframes } from '@angular/animations';
import { Router } from '@angular/router';
declare var $: any;
import { CaterpillarService, UserInfo } from '../core/caterpillar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  modelText: any;
  user: UserInfo;
  constructor(private fb: FormBuilder, private router: Router, private caterpillarService: CaterpillarService) { }
  login: FormGroup;
  ngOnInit() {

  }
  redirectRegister() {
    this.router.navigate(['./sign-up']);
  }


  register(register) {
    var obj = {
      emailId: register.value.user,
      password: register.value.password
     }
     this.caterpillarService.login(obj).subscribe(data => {
        this.user = data;
        if(this.user['success']==true){
          this.caterpillarService.updateUser(this.user);
          var token = this.user['token'];
          var organisation = this.user['userData']['organizationCategory'];
          var OTI = this.user['userData']['OTI'];
          var username = this.user['userData']['userName'];
          localStorage.setItem('Token', token);
          localStorage.setItem('organisation', organisation.toString());
          localStorage.setItem('oti', OTI.toString());
          localStorage.setItem('username', username.toString());
          // this.subjectUser.next(data);
          this.router.navigate(['/industries']);
        }else{
          this.modelText = "Wrong Credentials";
          $('#myModal').modal('show');
        }
        
     })
    // // if(this.userName =="Demo" && this.password =="Demo123"){

    // // }
    // // console.log(register.value)
    // this.modelText = '';
    // localStorage.removeItem("title");

    // if (register.value.user == "" || register.value.password == "") {
    //   this.modelText = "Please enter username or password";
    //   $('#myModal').modal('show');
    // }
    
    // else if ((register.value.user == "caterpillar" || register.value.user == "Caterpillar") && register.value.password == "caterpillar@2019") {
    //   this.router.navigate(['/industries']);
    //   localStorage.setItem('userid', '8');
    //   localStorage.setItem('username',register.value.user);
    // }

    // else {
    //   this.modelText = "Wrong Credentials";
    //   $('#myModal').modal('show');

    // }

  }

}
