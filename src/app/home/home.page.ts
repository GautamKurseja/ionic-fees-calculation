import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  total: any = 20400;

  constructor() {
  }




  feedata = [
      {
          feename:"Estimated School Fee payouts",
          min_payment_option:"monthly",
          amount: 16200,
          sub:"(as per annual term fee)"
      },
      {
          feename:"Estimated Term Fee payouts",
          min_payment_option:"half-yearly ",
          amount: 2700,
          sub:"(as term fees is pay in advance)"
      },
      {
          feename:" Estimated Admission Fee payouts",
          min_payment_option:"yearly",
          amount: 1500,
          sub:"(since admission is in new section)"
      },
      this.total =20400 
  ];
  
  feedataStatic = [
    {
        feename:" School Fee",
        min_payment_option:"monthly",
        amount: 16200
    },
    {
        feename:"Term Fee",
        min_payment_option:"half-yearly",
        amount: 2700
    },
    {
        feename:"Admission Fee",
        min_payment_option:"yearly",
        amount: 1500
    }
];




 feeCalculation(Data){
console.log("iam here")
  
  switch(Data) { 
     case "annually": { 
        console.log("Excellent"); 
        this.feedata = [
          {
            feename:"Estimated School Fee payouts",
              min_payment_option:"monthly",
              amount: 16200,
              sub:"(as per annual term fee)"
          },
          {
            feename:" Estimated Term Fee payouts",
              min_payment_option:"half-yearly",
              amount: 2700,
              sub:"(as term fees is pay in advance)"
          },
          {
              feename:" Estimated Admission Fee payouts",
              min_payment_option:"yearly",
              amount: 1500,
              sub:"(since admission is in new section)"
          },this.total=1500+2700+16200
      ];
        break; 
     } 
     case "halfQuaterly": { 
      this.feedata = [
        {
            feename:"Estimated School Fee payouts",
            min_payment_option:"monthly",
            amount: 16200/2,
            sub:"(as per annual term fee)"
        },
        {
            feename:" Estimated Term Fee payouts",
            min_payment_option:"half-yearly",
            amount: 2700/2,
            sub:"(as term fees is pay in advance)"
        },
        {
            feename:" Estimated Admission Fee payouts",
            min_payment_option:"yearly",
            amount: 1500,
            sub:"(since admission is in new section)"
        },this.total=1500+2700/2+16200/2
    ]; 
        break; 
     } 
     case "quaterly": {
      this.feedata = [
        {
            feename:" Estimated School Fee payouts",
            min_payment_option:"monthly",
            amount: 16200/4,
            sub:"(as per annual term fee)"
        },
        {
            feename:" Estimated Term Fee payouts",
            min_payment_option:"half-yearly",
            amount: 2700/2,
            sub:"(as term fees is pay in advance)"
        },
        {
            feename:" Estimated Admission Fee payouts ",
            min_payment_option:"yearly",
            amount: 1500,
            sub:"(since admission is in new section)"
        },this.total=1500+2700/2+16200/4
    ]; 
        break;    
     } 
     case "monthly": { 
      this.feedata = [
        {
            feename:" Estimated School Fee payouts",
            min_payment_option:"monthly",
            amount: 16200/12,
            sub:"(as per annual term fee)"
        },
        {
            feename:" Estimated Term Fee payouts",
            min_payment_option:"half-yearly",
            amount: 2700/2,
            sub:"(as term fees is pay in advance)"
        },
        {
            feename:" Estimated Admission Fee payouts",
            min_payment_option:"yearly",
            amount: 1500,
            sub:"(since admission is in new section)"
        },this.total=1500+2700/2+16200/12
    ];
        break; 
     }  
  
  }

 }

}
