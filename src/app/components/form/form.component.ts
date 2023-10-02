import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() learnerName = new EventEmitter<string>();
  @Output() courseName = new EventEmitter<string>();
  @Output() instructorName = new EventEmitter<string>();
  @Output() completionDate = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  getLearnerName(value: Event) {
    console.log((value.target as HTMLInputElement).value);
    this.learnerName.emit((value.target as HTMLInputElement).value);
  }
  getCourseName(value: Event) {
    console.log((value.target as HTMLInputElement).value);
    this.courseName.emit((value.target as HTMLInputElement).value);
  }
  getInstructorName(value: Event) {
    console.log((value.target as HTMLInputElement).value);
    this.instructorName.emit((value.target as HTMLInputElement).value);
  }
  getCompletionDate(value: any) {
    console.log(value);
    var dateString =
      new Date(value).getDate() +
      '/' +
      (new Date(value).getMonth() + 1) +
      '/' +
      new Date(value).getFullYear();
    this.completionDate.emit(dateString);
  }
}
