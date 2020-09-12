import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const api = axios.create({
    baseURL: 'http://localhost:5050/user'
})

export default class GetMapping extends React.Component{

    state = {
            person: [],
            search:''
        }

    componentDidMount(){
        this.getPeople();
    }

    updateSeach =(e)=>{
        this.setState({search: e.target.value.substr(0,10)});
    }

    getPeople = async () =>{
        api.get('/')
            .then(res => {
                const persons = res.data;
                this.setState({person: persons});
            })
    }


    deletePeople =async (idCard) =>{
        await api.delete('/'+idCard)
        this.getPeople();
    }


    render(){

        const filteringPerson = this.state.person.filter(e => {
            return e.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        })


        // smth.sort(function(a, b){ return a-b});

        return (
            <div className="container">
                <div className="mt-4">
                <input className="form-control" type="test" name="search" value={this.state.search} onChange={this.updateSeach} placeholder="Searching" />
                <table className="mt-3 table table-striped text-center table-bordered table-hover table-sm">
                    <thead>
                        <tr>
                            <td>ID CARD</td>
                            <td>FIRST NAME</td>
                            <td>LAST NAME</td>
                            <td>ADDRESS</td>
                            <td>FUNCTIONS</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteringPerson.map(
                                persons => {
                                    return(
                                <tr key={persons.idCard}>
                                    <td>{persons.idCard}</td>
                                    <td>{persons.firstName}</td>
                                    <td>{persons.lastName}</td>
                                    <td>{persons.address}</td>
                                    <td><button className="btn btn-danger btn-sm mr-sm-2" onClick={()=>
                                        this.deletePeople(persons.idCard)}>delete</button>
                                        <Link className="btn btn-info btn-sm mr-sm-2" to={"/edit/"+persons.idCard}>
                                            Edit
                                        </Link>
                                        </td>
                                        
                                </tr>
                                    )
                            })
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }


}