import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipmentServiceService {

  equipment = {

    weaponPicked: '0',
    armorType: '0',
    helmPicked: '0',
    shieldPicked: '0'

  }

}
