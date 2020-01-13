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


    layout = {
        name: 'circle',
    };

    graphData: GraphData = {
        nodes: [
            {data: {id: 'a', name: 'Signup', color: 'blue'}},
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

    //todo: learn to pass as param starCount
    public greedySolve(): void {
        this.graphService.greedy(0).subscribe(graph => {
            this.graphData = graph;
        },
            error => console.log(error));
    }


    //todo: user only able to upload 1 file
    //todo: steal same method from NetCracker project
    handleFileInput(files: FileList) {
        let file = files[0];
        let fileReader: FileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onloadend = (e) => {
            let result = JSON.parse(fileReader.result as string);
            console.log(result);
            // this.graphService.getMatrixFromFile(result)
            this.fileService.postFile(result)
                .subscribe(graph => {
                    this.graphData = graph;
                    console.log(this.graphData);
                })
        }
    }
}
