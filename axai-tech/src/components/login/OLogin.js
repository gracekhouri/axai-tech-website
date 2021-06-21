import React, { Component } from 'react'
import './styles.css';
import Firebase from '../../firebase/firebase';
const auth = Firebase.instance().auth;

export default class OLogin extends Component {
    constructor(props){
        super(props);

        if (this.props.user){
            this.props.history.push('/');
        }
              
        this.state= {
            email: '',
            password: ''
        }
    }
            
    onEmailChanged(e){
        this.setState({
            email: e.target.value,
        });
        }
            
    onPasswordChanged(e){
        this.setState({
            password: e.target.value
        });
    }
            
    async login(e){
        e.preventDefault();
            
        try{
            const {email, password } = this.state;
            await auth.signInWithEmailAndPassword(email,password);
            this.props.history.push('/');
        }catch(err){
            console.log(err);
        }
            
    }

    render() {
        return (
            <div className='container col-7 mt-2'>
                <div className='card card-body text-center'>
                    <form onSubmit={(e)=> this.login(e)}>
                        <h1 className='h3 mt-3 text-center'>Doctor Portal Login</h1>
                        <div className='p-3 body'>
                            <input value={this.state.email} 
                            onChange={(e)=> this.onEmailChanged(e)}
                            type='email' className='form-control '
                            placeholder='Email Address'/>
                        </div>
                        <div className="p-3 body">
                            <input value ={this.state.password}
                            onChange={(e)=> this.onPasswordChanged(e)}
                            type='password' className='form-control'
                            placeholder='Password'/>
                        </div>
                        <div className='text-center mt-4'>
                        <button className ='btn btn-primary px-5 body' type='submit'>
                            Login
                        </button>
                        </div> 
                    </form>
                </div>
            </div>
        )
    }
}
