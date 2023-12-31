import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { PharmacyServiceService } from '../service/pharmacy-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // filteredLocationList: HousingLocation[] = [];
  show: boolean = true;
  hidden: boolean = false;
  read() {
    this.show = !this.show;
  }
  buttonTitle: string = 'See More';
  visible: boolean = false;
  showhideUtility() {
    this.visible = this.visible ? false : true;
    this.buttonTitle = this.visible ? 'See Less' : 'Show';
  }

//   filteredLocationList: HousingLocation[] = [];
products: any;

    responsiveOptions: any;

    constructor(private PharmacyServiceService: PharmacyServiceService) {}

    ngOnInit() {
        this.PharmacyServiceService.returnTreatments().subscribe((products) => {

          console.log(products);
          
            this.products = products.slice(0,12);
        });

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
        return null
    }

}
