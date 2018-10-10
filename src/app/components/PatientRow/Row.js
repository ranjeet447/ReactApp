import React from 'react';
import { NavLink,Link} from 'react-router-dom';


export class Row extends React.Component {
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-1 ">
                    {this.props.id}
                </div>
                <div className="col-md-3 ">
                    {this.props.name}
                </div>
                <div className="col-md-3 ">
                    {this.props.email}
                </div>
                <div className="col-md-3 ">
                    {this.props.phone}
                </div>
                <div className="col-md-2">
                    <Link to={{ pathname: `/edit`, state:{id: this.props.id,name:this.props.name,email:this.props.email,phone:this.props.phone}}}><button className="btn btn-success">Edit</button></Link>
                </div>
                <br/><hr/>

            </div>
        );
    }
}


