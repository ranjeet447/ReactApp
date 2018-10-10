import React from 'react';
import { NavLink,Link} from 'react-router-dom';
import axios from 'axios';

import {Row} from './../PatientRow/Row'

export class Dashboard extends React.Component{
    constructor() {
        super();
        this.state = {
          patients:[],
          number:'',
          page:1,
          perpage:10,
          count:''
        };

        // this.previous=this.previous.bind(this);
        // this.next=this.nexts.bind(this);
      }
      
    componentWillMount(){
        axios.get(`/patients?_page=${this.state.page}&_limit=${this.state.perpage}`)
        .then((res) => {
            // console.log(res)
            this.setState({
                patients:res.data,
                number:res.data.length
            })
        });
        axios.get(`/patients`)
        .then((res) => {
            this.setState({count:res.data.length})
        }); 
    }

    clickPrevious = () =>{
        axios.get(`/patients`)
        .then((res) => {
            if(this.state.page>1){
                this.setState({page:this.state.page-1,count:res.data.length})
            }
            axios.get(`/patients?_page=${this.state.page}&_limit=${this.state.perpage}`)
            .then((res) => {
                this.setState({
                    patients:res.data,
                    number:res.data.length
                })
            });   
        });
    }
    clickNext=()=>{
        axios.get(`/patients`)
        .then((res) => {
            if(this.state.page < res.data.length/this.state.perpage){
                this.setState({page:this.state.page +1,count:res.data.length})
            }
            axios.get(`/patients?_page=${this.state.page}&_limit=${this.state.perpage}`)
            .then((res) => {
                this.setState({
                    patients:res.data,
                    number:res.data.length
                })
            });   
        });  
        
    }
    
    render(){
        // console.log("p",this.state.number/this.state.perpage)
        return(
            <div>
                {/* <Row id={23} name="sfds" email="sdfdsf" phone="xcvcxv"/> */}
                <div className="container">
                    <Link to={"/add"}><button type="button" className="btn btn-primary"style={{'float':'right'}}>Add</button></Link>
                    <h1 className="text-left"><u>Dashboard</u></h1>
                    {this.state.patients.map((p,i) => <Row key={i} id={p.id} name={p.name} email={p.email} phone={p.phone}></Row>)}
                </div>
                <div aria-label="..." className="text-center">
                    <ul className="pagination">
                        <li className={this.state.page<=1?'disabled':''} >
                            <a className="page-link" onClick={this.clickPrevious} >Previous</a>
                        </li>
                        {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active">
                        <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li> */}
                        <li className={this.state.page >= this.state.count/this.state.perpage?'disabled':''}>
                            <a className="page-link" onClick={this.clickNext}>Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}