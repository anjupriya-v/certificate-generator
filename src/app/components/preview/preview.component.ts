import { Component, OnInit } from '@angular/core';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  node: any;
  constructor() {}

  ngOnInit(): void {
    this.node = document.getElementById('my-node');
  }
  domToImage() {
    domtoimage.toJpeg(this.node, { quality: 0.95 }).then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      document.body.appendChild(img);
    });
  }
}
