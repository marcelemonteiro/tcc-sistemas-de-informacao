import { Component } from '@angular/core';
import { DefaultLayoutComponent } from "../../components/default-layout/default-layout.component";
import { SectionComponent } from "../../components/section/section.component";
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../../services/exam.service';
import { Exam } from '../../components/exam/exam.model';

@Component({
  selector: 'app-exam-page',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent],
  templateUrl: './exam-page.component.html',
  styleUrl: './exam-page.component.css'
})
export class ExamPageComponent {
  id: string | null;
  exam: Exam | null = null;

  constructor(private route: ActivatedRoute, private examService: ExamService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadExam();

  }

  loadExam() {
    if (this.id) {
      this.examService.getExam(this.id).subscribe({
        next: (examData) => {
          this.exam = examData;
        },
        error: (error) => {
          console.error("Avaliação não encontrada:", error);
        }
      });
    }
  }
}
