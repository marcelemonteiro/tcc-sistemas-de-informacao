import { Injectable } from '@angular/core';

import { mockSubjects } from '../mock-data';
import { Subject } from '../components/subject/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  mockSubjects: Subject[] = mockSubjects;

  constructor() { }

  getSubject(id: number): Subject | undefined {
    const subject = mockSubjects.find((subject) => subject.id === id);
    return subject;
  }
}
