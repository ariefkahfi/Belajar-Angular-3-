import { Component , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls : ['./app.component.css'],
  template : `
      <h1>Belajar Directive</h1>

      <h3>Contoh ngClass directive</h3>
      <div [ngClass]="kelasSekarang"></div>
      <div [ngClass]="kelasSekarang"></div>
      <div [ngClass]="kelasSekarang"></div>

      <h3>Contoh ngStyle directive</h3>
      <div [ngStyle] = "styleSekarang">
        <p>Hello World this is paragraph</p>
      </div>

      <h3>Contoh ngModel separate binding event and property</h3>
      <input [ngModel] = "model" (ngModelChange) = "setUpperCase($event)"/>
      <br/><span>{{outputText}}</span>
    
      <br/><br/>

      <h3>Contoh ngModel event and property binding</h3>
      <input [(ngModel)] = "model2"/><br/>
      <span>{{model2}}</span>

      <br/><br/>

      <input [value] = "allInOneText" (input) = "allInOneText=$event.target.value"/><br/>

      <input [(ngModel)] = "allInOneText"/><br/>
      
      <input [ngModel] = "allInOneText"  (ngModelChange) = "setValue($event)"/><br/>
      
      <input [ngModel] = "allInOneText" (ngModelChange) = "setUpperCaseNgModel($event)" /><br/>


      <h3>Contoh Structural Directive</h3>
      <div>
        <p>Contoh *ngIf dan *ngFor</p>
        
        <ul *ngFor = "let a of arr">
          <li>{{a}}</li>
        </ul>

        <span *ngIf = "arr.length >=3 " >
          Panjang array diatas lebih dari sama dengan 3
        </span>

        <span *ngIf = "arr.length < 3 ">
          Panjang array diatas kurang dari 3
        </span>

      </div><br/><br/>

      <track-by></track-by>

      <h3>Belajar ngSwitchCase</h3>
      <div [ngSwitch] = "switchVal">
          <p *ngSwitchCase = "'1'" >Nilai 1</p>
          <p *ngSwitchCase = "'2'" >Nilai 2</p>
          <p *ngSwitchDefault>Default condition</p>
      </div>

      <h3>Belajar Template reference variable</h3>
      <div>
        <input #alamat placeholder = "Alamat anda"/>
        <button (click) = "cetakAlamat(alamat.value)" >Submit Alamat</button>
      </div>

      <h3>Belajar Template reference variable dengan ngForm</h3>
      <form-component></form-component>
  `
})
export class AppComponent{
    

    

    cetakAlamat(event : string){
      console.log(`template variable result : ${event}`);
    }

    kelasSekarang = {};
    styleSekarang = {};
    arr = ['A','B'];
    switchVal = 2;
    outputText = "";
    allInOneText = "";
    // ngClass requirements
    pakaiKotak = true;
    pakaiWarna = true;
    pakaiSpasi = true;
    // ngClass requirements


    setValue(event : string){
      this.allInOneText = event;
    }

    setUpperCaseNgModel(event : string){
      this.allInOneText = event.toUpperCase();
    }
    setUpperCase(event : string){
        this.outputText  = event.toUpperCase();
    }

    // ngStyle requirements
    styleFontSize = false;
    styleBackgroundColor = false;
    stylePadding = true;
    styleFontPutih = false;
    // ngStyle requirements

    constructor(){
        this.setKelasSekarang();
        this.setStyleSekarang();
    }

    setStyleSekarang(){
      this.styleSekarang = {
         'font-size' : this.styleFontSize ? '18px' : '16px',
         'background-color' : this.styleBackgroundColor ? 'dodgerblue' : 'crimson',
         'padding' : this.stylePadding ? '1%' : '0',
         'color' : this.styleFontPutih ? 'white' : 'black' 
      }
    }
    setKelasSekarang(){
      this.kelasSekarang = {
          'box' : this.pakaiKotak  ,
          'warna' : this.pakaiWarna ,
          'spasi' : this.pakaiSpasi
      }
    }
}
