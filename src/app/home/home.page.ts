

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonText, IonCardTitle, IonCard, IonCardContent, IonCardHeader, IonLabel, IonItem } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterModule, IonContent, IonLabel, IonHeader, IonCardTitle, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonInput, IonText, IonCard, IonCardContent, IonCardHeader, IonItem, IonCardTitle]
})
export class HomePage {
  constructor(private router: Router, private authService: AuthService, private alertController: AlertController) {}

  ideaPrompt: string = '';
  generatedIdea: string = '';

  async logout() {
    try{
      await this.authService.logOut();
      const alert = await this.alertController.create({
        header: 'signout Success',
        message: 'You had logout succesfully!',
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
  onEdit(){
    this.router.navigateByUrl("edit")
  }
}
