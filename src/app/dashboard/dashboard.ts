import { Component } from '@angular/core';
import { MemberService } from '../../Services/member-service';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  Nb_Members: number = 0;
  chartLabels: string[] = [];
  chartData: ChartDataset<'line', number[]>[] = [];
  chartOptions: ChartOptions<'line'> = {};

  // injection de dependance pour le service de membre
  constructor(private Ms: MemberService) {
    // ici on peut appeler le service pour recuperer le nombre de membres

    // et l'affecter a la variable Nb_Members
    this.Ms.GetAllMembers().subscribe((response) => {
      this.Nb_Members = response?.length ?? 0;

      //extract the count of each type of member (student, teacher) and assign it to chartData and chartLabels
      const types = [...new Set(response?.map((member) => member.Type) ?? [])];
      console.log('types', types);
      const count = types.map(
        (type) =>
          response?.filter((member) => member.Type === type).length ?? 0
      );

      this.chartLabels = types;
      this.chartData = [
        {
          data: count,
        },
      ];
    });
  }
}
