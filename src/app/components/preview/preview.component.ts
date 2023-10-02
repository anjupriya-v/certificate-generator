import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit, OnChanges {
  certificate: any;
  @Input() learnerName: any = '';
  @Input() courseName: any = '';
  @Input() instructorName: any = '';
  @Input() completionDate: any = '';
  @Input() errors: any = {};
  validForm: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.certificate = document.getElementById('certificate-container');
  }
  ngOnChanges(changes: SimpleChanges) {
    this.validForm = Object.values(this.errors).includes(true) ? false : true;
  }
  downloadCertificate() {
    domtoimage.toJpeg(this.certificate, { quality: 0.95 }).then((dataUrl) => {
      var link = document.createElement('a');
      link.download = this.learnerName + '.jpeg';
      link.href = dataUrl;
      link.click();
    });
  }
}
