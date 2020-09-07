import React from 'react';
import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:5050/user'
})


export default class PostMapping extends React.Component{

    constructor(props){
        super(props)

        this.state=
        this.state={
            idCard: '',
            firstName: '',
            lastName: '',
            address: ''
        } 
    }

    componentDidMount(){
        const IdCards = this.props.match.params.idCard;
        if (IdCards){
            this.findBookById(IdCards);
        }
    }

    findBookById = (IdCard) => {
        api.get('/'+IdCard)
            .then(response => {
                if(response.data != null) {
                    this.setState({
                        idCard: response.data.idCard,
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        address: response.data.address
                    });
                }
            }).catch((error) => {
                console.error("Error - "+error);
            });
    };


    
    changeHandler =(e) =>{
        if(this.state.[e.target.name].length < 10){
            if(e.target.value !== '1'){
                this.setState({[e.target.name]: e.target.value})
                console.log(e.target)
            }
        }
    }

    submotHandler = e =>{
        e.preventDefault();
        const firstNames = this.state.firstName;
        const lastNames = this.state.lastName;
        const addresses = this.state.address;

        if(firstNames.length > 0 && lastNames.length > 0 && addresses.length > 0){
            api.post('/post', {firstName: firstNames , lastName: lastNames, address: addresses}).then(res => console.log(res));
            this.setState({
                idCard: '',
                firstName: "",
                lastName: "",
                address:''
            });
            // <Link to="/list" />
        }
    }

    updateHandler =e =>{
        e.preventDefault();
        const firstNames = this.state.firstName;
        const lastNames = this.state.lastName;
        const addresses = this.state.address;
        if(firstNames.length > 0 && lastNames.length > 0 && addresses.length > 0){
            api.put('/'+this.props.match.params.idCard, {firstName: firstNames, lastName: lastNames, address: addresses});
            this.setState({
                idCard: '',
                firstName: "",
                lastName: "",
                address:''
            });
        }
    }


    render(){ 
        const {firstName, lastName, address} = this.state;

        return(
            <div>
                <form onSubmit={this.props.match.params.idCard ? this.updateHandler : this.submotHandler }>
                    <div>
                        <input type="test" name="firstName" value={firstName} onChange={this.changeHandler} placeholder="Enter your firstName" />
                    </div>

                    <div>
                        <input type="text" name="lastName" value={lastName} onChange={this.changeHandler} placeholder="Enter your lastname" />
                    </div>

                    <div>
                        <input type="text" name="address" value={address} onChange={this.changeHandler} placeholder="Enter your address" />
                    </div>
                    <div>
                        <input type="text" name="idcard" value={this.state.idCard} onChange={this.changeHandler} hidden></input>
                    </div>
                    <div>
                        
                        <button type="submit">Submit</button>
                        
                    </div>
                </form>

            </div>
        );
    }

}