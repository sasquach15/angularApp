import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipmentServiceService {

  equipment = {

    weaponPicked: '0',
    weaponSelectUrl: '',
    armorType: '',
    armorUrl: '',
    armorCharUrl: '',
    helmPicked: '0',
    shieldPicked: '0'

  }

}
