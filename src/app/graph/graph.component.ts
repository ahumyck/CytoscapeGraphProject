import {Component, OnInit} from '@angular/core';
import {GraphData} from './graph-data';
import {GraphService} from '../services/graph.service';
import {FileService} from "../services/file.service";

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
    private message: string;

    layout = {
        name: 'concentric', //concentric
    };

    graphData: GraphData = {
        nodes: [
            {data: {id: 'a', name: 'Sign Up', color: 'blue'}},
            {data: {id: 'b', name: 'User Profile', color: 'magenta'}},
            {data: {id: 'c', name: 'Billing', color: 'magenta'}},
            {data: {id: 'd', name: 'Sales', color: 'orange'}},
            {data: {id: 'e', name: 'Referral', color: 'orange'}},
            {data: {id: 'f', name: 'Loan', color: 'orange'}},
            {data: {id: 'j', name: 'Support', color: 'red'}},
            {data: {id: 'k', name: 'Sink Event', color: 'green'}}
        ],
        edges: [
            {data: {source: 'a', target: 'b', color: 'blue'}},
            {data: {source: 'b', target: 'c', color: 'blue'}},
            {data: {source: 'c', target: 'd', color: 'blue'}},
            {data: {source: 'c', target: 'e', color: 'blue'}},
            {data: {source: 'c', target: 'f', color: 'blue'}},
            {data: {source: 'e', target: 'j', color: 'red'}},
            {data: {source: 'e', target: 'k', color: 'green'}}
        ]
    };


    constructor(private graphService: GraphService,
                private fileService: FileService) {
    }

    ngOnInit() {
    }

    public greedySolve(): void {
        this.graphService.greedySolve(0).subscribe(data => {
            this.graphData = data.graphDTO;
            this.message = "Your cost is " + data.cost;
        },
            error => this.message = error.error.message
        );
    }

    public geneticSolve(): void{
        this.graphService.geneticSolve().subscribe(data =>{
            this.graphData = data.graphDTO;
            this.message = "Your cost is " + data.cost;
        },
            error => this.message = error.error.message
        );
    }


    handleFileInput(event) {
        let file = event.target.files[0];
        console.log(event.target.starCount);
        const reader =  new FileReader();
        reader.readAsText(file);
        reader.onloadend = () => {
            let result = reader.result as string;
            this.fileService.postFile(result)
                .subscribe(graph => {
                    this.graphData = graph;
                })
        };
    }
}
