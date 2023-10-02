import { Component, Input, OnInit } from '@angular/core';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  node: any;
  @Input() learnerName: any = '';
  @Input() courseName: any = '';
  @Input() instructorName: any = '';
  @Input() completionDate: any = '';
  constructor() {}

  ngOnInit(): void {
    this.node = document.getElementById('certificate-container');
  }
  downloadCertificate() {
    domtoimage.toJpeg(this.node, { quality: 0.95 }).then((dataUrl) => {
      var link = document.createElement('a');
      link.download = this.learnerName + '.jpeg';
      link.href = dataUrl;
      link.click();
    });
  }
}
