import { Component } from '@angular/core';
import Chart from 'chart.js/auto'
import { StatistiquesService } from './statistiques.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})

export class StatistiquesComponent {

  selectedValue: any = ''
  chart: any;
  chart1: any;
  chart2: any;
  data: any = [12, 19, 3, 5, 2, 3];
  data1: any[] = []
  data2: any[] = []
  data1CA : any[] = []

  type:any
  afficheMois : boolean = false
  afficheMoisCA : boolean = false

  constructor(private statistiquesService: StatistiquesService) { }
  ngOnInit(): void {
    let type = {
      "type": "month"
    }
    this.statistiquesService.getNbReservation(type).subscribe({
      next: (res: any) => {
        this.data1 = res;
        // Reformater les données pour correspondre à la structure attendue par Chart.js
        const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

        const labels = this.data1.map(item => {
            return mois[item.month - 1]; // Soustrayez 1 car les mois sont indexés à partir de zéro dans JavaScript
        });

        const dataValues = this.data1.map(item => {
          return item.count;
        });
        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: '# of Votes',
              data: dataValues,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    })

    this.statistiquesService.getChiffreAffaires(type).subscribe({
      next: (res: any) => {

        this.data2 = res;
        const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

        const labels = this.data1.map(item => {
            return mois[item.month - 1]; // Soustrayez 1 car les mois sont indexés à partir de zéro dans JavaScript
        });

        const dataValues = this.data2.map(item => {
          return item.chiffreAffaires;
        });

        this.chart1 = new Chart('canvas1', {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Chiffres affaires',
              data: dataValues,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    })

  }

  // Méthode pour gérer le changement de sélection
  onChangeSelection(event: any) {
    if(event=='day'){
      this.afficheMois = true
    }else{
      this.afficheMois = false
      this.type={
        "type":"month"
      }
      this.statistiquesService.getNbReservation(this.type).subscribe({
        next: (res: any) => {
          this.data1 = res;
          // Reformater les données pour correspondre à la structure attendue par Chart.js
          const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

          const labels = this.data1.map(item => {
              return mois[item.month - 1]; // Soustrayez 1 car les mois sont indexés à partir de zéro dans JavaScript
          });
  
          const dataValues = this.data1.map(item => {
            return item.count;
          });

          console.log(dataValues)

          this.chart.destroy()

          this.chart = new Chart('canvas', {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [{
                label: '# of Votes',
                data: dataValues,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        }
      })
    }
  }

   // Méthode pour gérer le changement de sélection
   onChangeSelectionCA(event: any) {
    if(event=='day'){
      this.afficheMoisCA = true
    }else{
      this.afficheMoisCA = false
      this.type={
        "type":"month"
      }
      this.statistiquesService.getChiffreAffaires(this.type).subscribe({
        next: (res: any) => {
          this.data1CA = res;
          // Reformater les données pour correspondre à la structure attendue par Chart.js
          const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

          const labels = this.data1CA.map(item => {
              return mois[item.month - 1]; // Soustrayez 1 car les mois sont indexés à partir de zéro dans JavaScript
          });
  
          const dataValues = this.data1CA.map(item => {
            return item.chiffreAffaires;
          });

          console.log(dataValues)

          this.chart1.destroy()

          this.chart1 = new Chart('canvas1', {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [{
                label: '# of Votes',
                data: dataValues,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        }
      })
    }
  }

  onChangeSelectionDay(event:any){
    let type = {
      "type":"day",
      "month":parseInt(event)
    }
    this.statistiquesService.getNbReservation(type).subscribe({
      next: (res: any) => {
        this.data1 = res;
        // Reformater les données pour correspondre à la structure attendue par Chart.js
        const labels = this.data1.map(item => {
          return item.day;
        });

        const dataValues = this.data1.map(item => {
          return item.count;
        });

        this.chart.destroy()
        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: '',
              data: dataValues,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    })
  }

  onChangeSelectionDayCA(event:any){
    let type = {
      "type":"day",
      "month":parseInt(event)
    }
    this.statistiquesService.getChiffreAffaires(type).subscribe({
      next: (res: any) => {
        this.data1 = res;
        console.log(res)
        // Reformater les données pour correspondre à la structure attendue par Chart.js
        const labels = this.data1.map(item => {
          return item.day;
        });

        const dataValues = this.data1.map(item => {
          return item.chiffreAffaires;
        });

        this.chart1.destroy()
        this.chart1 = new Chart('canvas1', {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: '',
              data: dataValues,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    })
  }

  test(){
    Swal.fire({
      title: "Enregistremet réussi",
      text: "",
      icon: "success"
    }).then((result)=>{
      //Soloina redirecion
      window.alert('Ok')
    });
  }

}
