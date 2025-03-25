import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, updateDoc, deleteDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Student {
  id?: string;
  nombre: string;
  apellido: string;
  matricula: string;
  email: string;
  damm: number;
  oca: number;
  mate: number;
  pmp: number;
  m3d: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firestore: Firestore) {}

  addStudent(student: Student) {
    return addDoc(collection(this.firestore, 'students'), student);
  }

  getStudents(): Observable<Student[]> {
    return collectionData(collection(this.firestore, 'students'), { idField: 'id' }) as Observable<Student[]>;
  }

  updateStudent(id: string, student: Student) {
    const studentDoc = doc(this.firestore, 'students', id);
    return updateDoc(studentDoc, {student});
  }

  deleteStudent(id: string) {
    const studentDoc = doc(this.firestore, 'students', id);
    return deleteDoc(studentDoc);
  }

}
