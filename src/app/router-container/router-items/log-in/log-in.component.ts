import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Character } from 'src/app/character.model';
import { ServiceService } from 'src/app/service-service';
import { EquipmentServiceService } from '../equipment/equipment.component';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  constructor(private http: HttpClient, private serviceService: ServiceService, private equipmentSevice: EquipmentServiceService) { }



  onSubmit(form: NgForm) {
    console.log(form)
  }


  sendModel() {
    const char: Character = {
      name: this.serviceService.startingValues.enteredName,
      armor: this.equipmentSevice.equipment.armorType,
      image: `../assets/photos/${this.serviceService.startingValues.name}/armors/heavy.png`

    }
    this.http.post('https://serv-test-fb374-default-rtdb.europe-west1.firebasedatabase.app/users.json', char).subscribe(response => {
      console.log('Sukces!', response)
    })
  }

  storeData(postData: { username: string; email: string }) {
    console.log(postData)
    this.http.post('https://serv-test-fb374-default-rtdb.europe-west1.firebasedatabase.app/users.json', postData).subscribe(responseData => {
      console.log(responseData)
    })
  }

  onFetchUsername() {
    this.fetchUsername();
  }

  private fetchUsername() {
    this.http.get('https://serv-test-fb374-default-rtdb.europe-west1.firebasedatabase.app/users.json')
      .subscribe(username => {
        console.log(username)
      })

  }

}
