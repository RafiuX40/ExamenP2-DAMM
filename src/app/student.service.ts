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

  constructor() { }
}
