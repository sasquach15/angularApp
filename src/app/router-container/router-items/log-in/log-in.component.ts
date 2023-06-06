import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Character } from 'src/app/character.model';
import { ServiceService } from 'src/app/service-service';
import { EquipmentServiceService } from '../equipment/equipment.component';
import { DataStorageService } from 'src/app/data-storage.service';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  /* ngOnInit(): void {
     this.statService.selectedStats = this.statService.getSelectedStats(); 
  }
 */
  constructor(private http: HttpClient, private serviceService: ServiceService, private equipmentSevice: EquipmentServiceService, private statService: DataStorageService) { }



  onSubmit(form: NgForm) {
    console.log(form)
  }

  get skillsList() {
    return this.serviceService.startingValues.chosenSkills;
  }


  sendModel() {
    const stats = this.statService.getStats();
    const char: Character = {
      name: this.serviceService.startingValues.enteredName,
      armor: this.equipmentSevice.equipment.armorType,
      image: `../assets/photos/${this.serviceService.startingValues.name}/armors/heavy.png`,
      skillsList: this.skillsList.map(skill => skill + 1),
      statList: this.statService.selectedStats
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
