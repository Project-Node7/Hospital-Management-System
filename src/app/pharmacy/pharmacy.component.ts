import { Component } from '@angular/core';
import { PharmacyServiceService } from '../service/pharmacy-service.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss']
})
export class PharmacyComponent {

  treatments : any[]=[]
  cartProduct : any[]=[];
  constructor(private pharmacyService : PharmacyServiceService){

    pharmacyService.returnTreatments().subscribe((treatment)=>{
        this.treatments=treatment;
    })
  }

  addToCard(event : any)
  {
    if("cart" in localStorage)
    {
      this.cartProduct=JSON.parse(localStorage.getItem("cart")!)
      this.cartProduct.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
    }else{
      this.cartProduct.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
    }

  }
}
