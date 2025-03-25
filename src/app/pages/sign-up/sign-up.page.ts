import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCardTitle } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [RouterModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCardTitle]
})
export class SignUpPage implements OnInit {


  ngOnInit() {
  }
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService, 
    private alertController: AlertController,
    private router: Router) { }

  async onSubmit() {
    try{
      await this.authService.register(this.email, this.password);
      const alert = await this.alertController.create({
        header: 'Signup Success',
        message: 'Your account has been created succesfully!',
        buttons: ['Ok'],
      });
      await alert.present();
      this.router.navigate(['/login']);
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'An error ocurred during signup.',
        buttons: ['Ok'],
      });
      await alert.present();
    }

  }


  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }


  onSignUp() {
    this.router.navigateByUrl("login")
  }
}


