import { Component, OnInit } from '@angular/core';
import { GraphData } from "./graph-data";
import { GraphService } from '../sevices/graph.service';
import { NodeData } from '../node/node';
import { EdgeData } from '../edge/edge';
import { Node } from '../node/node';
import { Edge } from '../edge/edge';
import { map , first } from 'rxjs/operators';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  node_name: string;

  layout = {
    name: 'circle',
    // rankDir: 'LR',
    // directed: true,
    // padding: 0
  };

  graphData = {
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

  // layout = {
  //     name: 'circle'
  // };



  constructor(private graphService: GraphService) { }

  ngOnInit() {
  }

  public getInitialGraph(): void {
    this.graphService.getInitialGraph().subscribe( graph => {
        this.graphData = graph;
      })
  }

  public getLastSolution(): void{
     this.graphService.getLastSolution()
       .subscribe(graph => {
         this.graphData = graph;
       })
  }

  public solve(): void {
     this.graphService.solve(2).subscribe(resp => { console.log(resp)})
  }
}
