import { Component, OnInit } from '@angular/core';
import { GraphData } from './graph-data';
import { GraphService } from '../services/graph.service';
import {HttpClient} from "@angular/common/http";
import {FileService} from "../services/file.service";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {


  layout = {
    name: 'circle',
  };

  graphData: GraphData = {
            nodes: [
                { data: { id: 'a', name: 'Signup', color: 'blue'  }},
                { data: { id: 'b', name: 'User Profile', color: 'magenta'  }},
                { data: { id: 'c', name: 'Billing', color: 'magenta'  }},
                { data: { id: 'd', name: 'Sales', color: 'orange'  }},
                { data: { id: 'e', name: 'Referral', color: 'orange'  }},
                { data: { id: 'f', name: 'Loan', color: 'orange'  }},
                { data: { id: 'j', name: 'Support', color: 'red'  }},
                { data: { id: 'k', name: 'Sink Event', color: 'green'  }}
            ],
            edges: [
                { data: { source: 'a', target: 'b', color: 'blue'} },
                { data: { source: 'b', target: 'c', color: 'blue'} },
                { data: { source: 'c', target: 'd', color: 'blue'} },
                { data: { source: 'c', target: 'e', color: 'blue'} },
                { data: { source: 'c', target: 'f', color: 'blue'} },
                { data: { source: 'e', target: 'j', color: 'red'} },
                { data: { source: 'e', target: 'k', color: 'green'} }
            ]
    };




  constructor(private graphService: GraphService) { }

  ngOnInit() {
  }

  public getLastSolution(): void {
     this.graphService.getLastSolution()
       .subscribe(graph => {
         this.graphData = graph;
       });
  }

  public solve(): void {
     this.graphService.solve(2).subscribe(resp => { console.log(resp); });
  }

  //todo: fix logic here because button works only 1 time
  handleFileInput(files: FileList) {
    let file = files[0];
    let fileReader: FileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onloadend = (e) => {
      let result = JSON.parse(fileReader.result as string);
      console.log(result);
      this.graphService.getMatrixFromFile(result)
        .subscribe(graph => {
          this.graphData = graph;
        })
    }
  }
}
