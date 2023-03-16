import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, Output, EventEmitter } from '@angular/core';
import {faMagnifyingGlassPlus, faMagnifyingGlassMinus, faArrowDown, faArrowUp, faArrowLeft, faArrowRight, faXmark} from '@fortawesome/free-solid-svg-icons';
const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit {


  iconPlus = faMagnifyingGlassPlus;
  iconMinus = faMagnifyingGlassMinus;
  iconDown = faArrowDown;
  iconUp = faArrowUp;
  iconLeft = faArrowLeft;
  iconRight = faArrowRight;
  iconX = faXmark;

  @Input('width') public width!: number;
  @Input('height') public height!: number;
  @Input('left') public left!: number;
  @Input('top') public top!: number;
  @Input('right') public right!: number;
  @ViewChild("box") public box!: ElementRef;
  private boxPosition!: { left: number, top: number };
  private containerPos!: { left: number, top: number, right: number, bottom: number };
  public mouse!: {x: number, y: number}
  public status: Status = Status.OFF;
  private mouseClick!: {x: number, y: number, left: number, top: number}

  imageSrc: string = '';
  imgHidden = false;
  dialogHidden = false;
  widthO: any;
  heightO: any;
  perzent = 100;



  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageSrc = reader.result as string;
      const image = new Image();
      image.src = this.imageSrc;
      image.onload = () => {
        this.widthO = image.width;
        this.heightO = image.height;
        if (this.widthO > this.heightO){
          this.widthO = 100 + '%';
          this.heightO = 'auto';
        }else{
          this.heightO = 100 + '%';
          this.widthO = 'auto';
        }

        console.log(image.width, image.height, this.widthO, this.heightO);
      };
    };
    this.dialogHidden = true;

    console.log(file, reader);
  }

  ngOnInit() {}

  ngAfterViewInit(){
    this.loadBox();
    this.loadContainer();
  }

  private loadBox(){
    const {left, top} = this.box.nativeElement.getBoundingClientRect();
    this.boxPosition = {left, top};
  }

  private loadContainer(){
    const left = this.boxPosition.left - this.left;
    const top = this.boxPosition.top - this.top;
    const right = left + 600;
    const bottom = top + 450;
    this.containerPos = { left, top, right, bottom };
  }

  setStatus(event: MouseEvent, status: number){
    if(status === 2) this.mouseClick = { x: event.clientX, y: event.clientY, left: this.left, top: this.top };
    else this.loadBox();
    this.status = status;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent){
    this.mouse = { x: event.clientX, y: event.clientY };
    if(this.status === Status.MOVE) this.move();
  }

  private move(){
      this.left = this.mouseClick.left + (this.mouse.x - this.mouseClick.x);
      this.top = this.mouseClick.top + (this.mouse.y - this.mouseClick.y);
  }

  btnBack(){
    if(this.widthO !== 'auto'){
      this.widthO = 100 + '%';
      this.perzent = 100;
      this.top = 0;
      this.left = 0;
    }else{
      this.heightO = 100 + '%';
      this.perzent = 100;
      this.top = 0;
      this.left = 0;
    }
    console.log(this.widthO, this.heightO, this.perzent)
  }

  btnPlus(){
    if(this.widthO !== 'auto'){
      this.widthO = (this.perzent += 10) + '%';
    }else{
      this.heightO = (this.perzent += 10) + '%';
    }
    console.log(this.widthO)
  }

  btnMinus(){
    if(this.heightO !== 'auto'){
      this.heightO = (this.perzent -= 10) + '%';
    }else{
      this.widthO = (this.perzent -= 10) + '%';
    }
    console.log(this.heightO)
  }

  btnUp(){
    this.top = this.top - 2;
  }
  btnDown(){
    this.top = this.top + 2;
  }
  btnLeft(){
    this.left = this.left - 2;
  }
  btnRight(){
    this.left = this.left + 2;
  }

  btnFit(){
    if(this.widthO !== 'auto'){
      this.widthO = 'auto';
      this.heightO = 100 + '%';
      this.top = 0;
      this.left = 0;
    }else{
      this.widthO = 100 + '%';
      this.heightO = 'auto';
      this.top = 0;
      this.left = 0;
    }
  }

  btnFertig(){
    this.imgHidden = true;
    this.dialogHidden = false;
  }

  dialogClose(){
    this.dialogHidden = false;
  }

  btnX(){
    this.imgHidden = false;
  }











}
