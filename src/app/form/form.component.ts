import {Component} from "@angular/core";


@Component({
    selector : 'form-component',
    template : `

        <form #myForm = "ngForm" (ngSubmit) = "submitForm(myForm)">
            <table>
                
                <tr>
                <td>Nama</td>
                <td><input required [(ngModel)] = "name" name="name" /></td>
                <td *ngIf = "name.length < 3 " [style.color] = "'red'" >Nama kurang dari 3</td>
                </tr>
                <tr>
                    <td>Alamat</td>
                    <td><input required  [(ngModel)]= "alamat" name="alamat" /></td>
                </tr>
                <tr>
                    <td>
                        <button [disabled] = "name.length < 3 || alamat === '' ">Submit Form</button>
                    </td>
                </tr>
            </table>
        </form>
        <div *ngIf = "myForm.form.valid">
            {{name}} - {{alamat}}
        </div>
    `
})
export class FormComponent{
    
    // keadaan pertama myForm.form.valid = false
    
    // disabled = false (berarti button enabled)
    
    // disabled = !myForm.form.valid
    // disabled = true (berarti button disabled)

    // keadaan pertama myForm.form.valid = false
    name = "";
    alamat = "";
    valid  = false;

    set validForm(valid : boolean){
        this.valid=valid;
    }

    get validForm(){
        return this.valid;
    }

    submitForm(formResult){
      console.log(formResult.form.valid);
      this.validForm = true;
    }
}