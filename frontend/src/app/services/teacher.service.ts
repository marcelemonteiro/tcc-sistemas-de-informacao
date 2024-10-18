import { Injectable } from '@angular/core';

import { mockTeachers } from '../mock-data';

export interface Teacher {
  id: number;
  name: string;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  mockTeachers: Teacher[] = mockTeachers;

  constructor() { }

  getTeacher(id: number): Teacher | undefined {
    const teacher = mockTeachers.find((teacher) => teacher.id === id);
    return teacher;
  }
}
