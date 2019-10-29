import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {


  graphData = {
      nodes: [
        {data: {id: '1', name: 'Jerry',  faveColor: '#6FB1FC'}},
        {data: {id: '2', name: 'Elaine', faveColor: '#EDA1ED'}},
        {data: {id: '3', name: 'Kramer', faveColor: '#86B342'}},
        {data: {id: '4', name: 'George', faveColor: '#F5A45D'}},
        {data: {id: '5', name: 's', faveColor: '#F5A45D'}},
        {data: {id: '6', name: 'd', faveColor: '#F5A45D'}},
        {data: {id: '7', name: 'v', faveColor: '#F5A45D'}},
        {data: {id: '8', name: 'f', faveColor: '#F5A45D'}},
        {data: {id: '9', name: 's', faveColor: '#F5A45D'}},
        {data: {id: '10', name: 'd', faveColor: '#F5A45D'}},
        {data: {id: '11', name: 'e', faveColor: '#F5A45D'}},
        {data: {id: '12', name: 'z', faveColor: '#F5A45D'}},
        {data: {id: '13', name: 'x', faveColor: '#F5A45D'}},
        {data: {id: '14', name: 'c', faveColor: '#F5A45D'}},
        {data: {id: '15', name: 'z', faveColor: '#F5A45D'}},
        {data: {id: '111', name: 'Jerry',  faveColor: '#6FB1FC'}},
        {data: {id: '211', name: 'Elaine', faveColor: '#EDA1ED'}},
        {data: {id: '311', name: 'Kramer', faveColor: '#86B342'}},
        {data: {id: '411', name: 'George', faveColor: '#F5A45D'}},
        {data: {id: '511', name: 's', faveColor: '#F5A45D'}},
        {data: {id: '611', name: 'd', faveColor: '#F5A45D'}},
        {data: {id: '711', name: 'v', faveColor: '#F5A45D'}},
        {data: {id: '811', name: 'f', faveColor: '#F5A45D'}},
        {data: {id: '911', name: 's', faveColor: '#F5A45D'}},
        {data: {id: '1011', name: 'd', faveColor: '#F5A45D'}},
        {data: {id: '1111', name: 'e', faveColor: '#F5A45D'}},
        {data: {id: '1211', name: 'z', faveColor: '#F5A45D'}},
        {data: {id: '1311', name: 'x', faveColor: '#F5A45D'}},
        {data: {id: '1411', name: 'c', faveColor: '#F5A45D'}},
        {data: {id: '1511', name: 'z', faveColor: '#F5A45D'}},
      ],
      edges: [
        {data: {source: '1', target: '5', faveColor: '#6FB1FC'}},
        {data: {source: '2', target: '6', faveColor: '#EDA1ED'}},
        {data: {source: '3', target: '7', faveColor: '#86B342'}},
        {data: {source: '4', target: '8', faveColor: '#F5A45D'}},
        {data: {source: '9', target: '13', faveColor: '#6FB1FC'}},
        {data: {source: '10', target: '14', faveColor: '#EDA1ED'}},
        {data: {source: '11', target: '15', faveColor: '#86B342'}},
        {data: {source: '12', target: '1', faveColor: '#F5A45D'}},
        {data: {source: '1', target: '711', faveColor: '#6FB1FC'}},
        {data: {source: '211', target: '311', faveColor: '#EDA1ED'}},
        {data: {source: '411', target: '711', faveColor: '#86B342'}},
        {data: {source: '411', target: '811', faveColor: '#F5A45D'}}
      ]
    };


  layout = {
      name: 'circle',
  };

  constructor() { }

  ngOnInit() {
  }

}
