import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ViewChild('dateOfCompletion', { static: false })
  public dateOfCompletion!: ElementRef;
  @Output() learnerName = new EventEmitter<string>();
  @Output() courseName = new EventEmitter<string>();
  @Output() instructorName = new EventEmitter<string>();
  @Output() completionDate = new EventEmitter<string>();
  @Output() errors = new EventEmitter<Object>();

  form!: FormGroup;
  emptyForm: boolean = true;
  isError: any = {
    learnerName: true,
    courseName: true,
    instructorName: true,
    completionDate: true,
  };
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      learnerName: ['', Validators.required],
      courseName: ['', Validators.required],
      instructorName: ['', Validators.required],
      completionDate: ['', Validators.required],
    });
    this.errors.emit(this.isError);
  }
  isFormEmpty() {
    this.emptyForm =
      this.form.controls['learnerName'].value == '' &&
      this.form.controls['courseName'].value == '' &&
      this.form.controls['instructorName'].value == '' &&
      this.form.controls['completionDate'].value == ''
        ? true
        : false;
  }
  clearForm() {
    this.form.reset();
    this.dateOfCompletion.nativeElement.value = '';
    this.learnerName.emit('');
    this.courseName.emit('');
    this.instructorName.emit('');
    this.completionDate.emit('');
    this.isError = {
      learnerName: true,
      courseName: true,
      instructorName: true,
      completionDate: true,
    };
    this.errors.emit(this.isError);
  }
  getLearnerName(value: Event) {
    this.form.controls['learnerName'].setValue(
      (value.target as HTMLInputElement).value
    );
    this.isError.learnerName =
      this.form.controls['learnerName'].errors &&
      this.form.controls['learnerName'].errors['required']
        ? true
        : false;
    this.isFormEmpty();
    this.learnerName.emit((value.target as HTMLInputElement).value);
    this.errors.emit(this.isError);
  }
  getCourseName(value: Event) {
    this.form.controls['courseName'].setValue(
      (value.target as HTMLInputElement).value
    );
    this.isError.courseName =
      this.form.controls['courseName'].errors &&
      this.form.controls['courseName'].errors['required']
        ? true
        : false;
    this.isFormEmpty();
    this.courseName.emit((value.target as HTMLInputElement).value);
    this.errors.emit(this.isError);
  }
  getInstructorName(value: Event) {
    this.form.controls['instructorName'].setValue(
      (value.target as HTMLInputElement).value
    );
    this.isError.instructorName =
      this.form.controls['instructorName'].errors &&
      this.form.controls['instructorName'].errors['required']
        ? true
        : false;
    this.isFormEmpty();
    this.instructorName.emit((value.target as HTMLInputElement).value);
    this.errors.emit(this.isError);
  }
  getCompletionDate(date: any) {
    var dateString =
      new Date(date.value).getDate() +
      '/' +
      (new Date(date.value).getMonth() + 1) +
      '/' +
      new Date(date.value).getFullYear();
    this.form.controls['completionDate'].setValue(dateString);
    this.isError.completionDate =
      this.form.controls['completionDate'].errors &&
      this.form.controls['completionDate'].errors['required']
        ? true
        : false;
    this.isFormEmpty();
    this.completionDate.emit(date != null ? dateString : '');
    this.errors.emit(this.isError);
  }
}
