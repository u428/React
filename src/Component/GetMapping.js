import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const api = axios.create({
    baseURL: 'http://localhost:5050/user'
})

export default class GetMapping extends React.Component{

    state = {
            person: []
        }

    componentDidMount(){
        this.getPeople();
    }

    getPeople = async () =>{
        api.get('/')
            .then(res => {
                const persons = res.data;
                this.setState({person: persons});
                console.log(persons);
            })
    }


    deletePeople =async (idCard) =>{
        let data =await api.delete('/'+idCard)
        console.log(data);
        this.getPeople();
    }


    render(){
        return (
            <div>
                <table>
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
                            this.state.person.map(
                                persons => {
                                    return(
                                <tr key={persons.idCard}>
                                    <td>{persons.idCard}</td>
                                    <td>{persons.firstName}</td>
                                    <td>{persons.lastName}</td>
                                    <td>{persons.address}</td>
                                    <td><button onClick={()=>
                                        this.deletePeople(persons.idCard)}>delete</button>
                                        <Link to={"/edit/"+persons.idCard}>
                                        <button>edit</button>
                                        </Link>
                                        </td>
                                        
                                </tr>
                                    )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }


}