import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'certificate-generator';
  learnerName: any;
  courseName: any;
  instructorName: any;
  completionDate: any;
  learnerNameError: boolean = true;
  errors: any;
  getLearnerName(learnerName: any) {
    this.learnerName = learnerName;
  }
  getCourseName(courseName: any) {
    this.courseName = courseName;
  }
  getInstructorName(instructorName: any) {
    this.instructorName = instructorName;
  }
  getCompletionDate(completionDate: any) {
    this.completionDate = completionDate;
  }
  getErrors(errors: any) {
    this.errors = errors;
  }
}
