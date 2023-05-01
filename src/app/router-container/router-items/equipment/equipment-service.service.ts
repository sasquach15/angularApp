import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipmentServiceService {

  equipment = {

    weaponPicked: '0',
    weaponSelectUrl: '',
    armorType: '0',
    armorUrl: '',
    armorCharUrl: '',
    helmPicked: '0',
    shieldPicked: '0'

  }

}
