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
        {data: {id: 'k', name: 'Kramer', faveColor: '#86B342', type: 'octagon'}},
        {data: {id: 'g', name: 'George', faveColor: '#F5A45D', type: 'rectangle'}},
        {data: {id: 'f', name: 's', faveColor: '#F5A45D', type: 'triangle'}},
        {data: {id: 'a', name: 'd', faveColor: '#F5A45D', type: 'triangle'}},
        {data: {id: 'b', name: 'v', faveColor: '#F5A45D', type: 'triangle'}},
        {data: {id: 'c', name: 'f', faveColor: '#F5A45D', type: 'triangle'}},
        {data: {id: 'd', name: 's', faveColor: '#F5A45D', type: 'triangle'}},
        {data: {id: 'x', name: 'd', faveColor: '#F5A45D', type: 'triangle'}},
        {data: {id: 'y', name: 'e', faveColor: '#F5A45D', type: 'triangle'}},
        {data: {id: 'z', name: 'z', faveColor: '#F5A45D', type: 'triangle'}},
        {data: {id: 'v', name: 'x', faveColor: '#F5A45D', type: 'triangle'}},
        {data: {id: 'u', name: 'c', faveColor: '#F5A45D', type: 'triangle'}},
        {data: {id: 'i', name: 'z', faveColor: '#F5A45D', type: 'triangle'}},
      ],
      edges: [
        {data: {source: 'j', target: 'f', faveColor: '#6FB1FC' , arrow: 'vee'}},
        {data: {source: 'e', target: 'f', faveColor: '#EDA1ED'}},
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
