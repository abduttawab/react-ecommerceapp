import React, { Component } from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import {signInWithGoogle} from '../../firebase/firebase.utilities.js'


import './SignIn.style.scss'
export default class SignIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password:''
        }
    }
    
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }

    handleChange = event=>{
        const {value,name} = event.target;
        this.setState({[name]:value});
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onClick={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} label='Email' handleChange={this.handleChange} required />
                
             
                    <FormInput name='password'  type='password' value={this.state.password} label='Password' handleChange={this.handleChange} required />
               
                    <div className='buttons'>

                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='submit' onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                   
                </form>
                
            </div>
        )
    }
}
