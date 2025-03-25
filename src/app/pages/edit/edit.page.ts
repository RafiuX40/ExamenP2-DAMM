import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService} from '../../services/student.service';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrl: './edit.page.scss',
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class EditStudentPage implements OnInit {
  studentForm!: FormGroup;
  studentId!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.studentId = this.route.snapshot.paramMap.get('id')!;

    this.studentForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      matricula: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      damm: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      oca: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      mate: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      pmp: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      m3d: ['', [Validators.required, Validators.min(0), Validators.max(10)]]
    });

    this.studentService.getStudents().subscribe(students => {
      const student = students.find(s => s.id === this.studentId);
      if (student) {
        this.studentForm.patchValue(student);
      }
    });
  }

  async onSubmit() {
    if (this.studentForm.valid) {
      await this.studentService.updateStudent(this.studentId, this.studentForm.value);
      const alert = await this.alertCtrl.create({
        header: 'Éxito',
        message: 'Registro actualizado correctamente',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigate(['/home']);
    }
  }
} 