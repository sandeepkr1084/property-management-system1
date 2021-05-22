import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPropertyComponent } from './add-property/add-property.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'property-management-system1';
  constructor(
    public dialog: MatDialog,
    ){

  }
  properties = []

  createProperty(name, description, size, unit){
    let data = {
      name: name,
      description: description,
      size: size,
      unit: unit
    }
    return data;
  }

  addProperty(){
    const dialogRef = this.dialog.open(AddPropertyComponent);
    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          console.log(data)
          data = data.data;
          let t = this.createProperty(data.get("name").value, data.get("description").value, data.get("size").value, data.get("unit").value)
          this.properties.push(t)
        }
      }
    )
  }
  deleteProperty(i){
    for(let j=i;j<this.properties.length-1;j++){
      this.properties[j] = this.properties[j+1]
    }
    this.properties.pop();
  }
}
