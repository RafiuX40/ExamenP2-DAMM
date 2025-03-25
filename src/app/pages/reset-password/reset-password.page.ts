import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule],
})
export class ResetPasswordPage {
  email: string = '';

  constructor(private firebaseService: AuthService) {}

  async resetPassword() {
    try {
      const message = await this.firebaseService.resetPassword(this.email);
      alert(message);
    } catch (error) {
      alert('Error: ' + (error instanceof Error ? error.message : 'An unknown error occurred'));
    }
  }
}
