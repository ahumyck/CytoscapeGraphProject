import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  
  graphData = {
      nodes: [
        {data: {id: 'j', name: 'Jerry',  faveColor: '#6FB1FC', shape: 'triangle'}},
        {data: {id: 'e', name: 'Elaine', faveColor: '#EDA1ED', shape: 'ellipse'}},
        {data: {id: 'k', name: 'Kramer', faveColor: '#86B342', shape: 'octagon'}},
        {data: {id: 'g', name: 'George', faveColor: '#F5A45D', shape: 'rectangle'}},
        {data: {id: 'f', name: 'Polina', faveColor: '#F5A45D', shape: 'triangle'}},
      ],
      edges: [
        {data: {source: 'j', target: 'f', faveColor: '#6FB1FC'}},
        {data: {source: 'j', target: 'f', faveColor: '#6FB1FC'}},
        {data: {source: 'j', target: 'f', faveColor: '#6FB1FC'}},

        {data: {source: 'e', target: 'f', faveColor: '#EDA1ED'}},
        {data: {source: 'e', target: 'f', faveColor: '#EDA1ED'}},

        {data: {source: 'k', target: 'f', faveColor: '#86B342'}},
        {data: {source: 'k', target: 'f', faveColor: '#86B342'}},
        {data: {source: 'k', target: 'f', faveColor: '#86B342'}},

        {data: {source: 'g', target: 'f', faveColor: '#F5A45D'}}
      ]
    };


  layout = {
      name: 'circle',
  };

  constructor() { }

  ngOnInit() {
  }

}
