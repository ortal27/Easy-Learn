import React from 'react';
import './ToolbarProps.css';
import Input from '../../UI/Input/Input';
import axiosRes from '../../../axios-results';
import Button from '../../UI/Button /Button';
import Spinner from '../../UI/Spinner/Spinner';

class Contact extends React.Component{
    state = {
        contactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter Name'
                }, 
                value: '',
                validation: {
                    required: true
                }, 
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter your E-mail'
                }, 
                value: '',
                validation: {
                    required: true
                }, 
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter your Country'
                }, 
                value: '',
                validation: {}, 
                valid: true,
                touched: false
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Please enter your City'
                }, 
                value: '',
                validation: {}, 
                valid: true,
                touched: false
            },
            gender:{
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'other', displayValue: 'Other'},
                        {value: 'male', displayValue: 'Male'},
                        {value: 'female', displayValue: 'Female'},

                    ]
                }, 
                value: 'Other',
                validation: {},
                valid: true
            },
            description: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter here your personal notes.'
                }, 
                value: '', 
                validation: {
                    required: true
                }, 
                valid: true,
                touched: false
            },
        },
        formIsValid: false,
        loading: false,
    }

    contactHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for(let formElementIdentifier in this.state.contactForm) {
            formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;
        }
        const contact ={
            contactData: formData
        }
        axiosRes.post('/contacts.json', contact)
            .then( response => {
                this.setState({loading: false});
                this.props.history.goBack();
            })
            .catch( error => {
                this.setState({loading : false});
            });    
    }

    checkValidity(value, rouls){
        let isValid = true;

        if(rouls.required) {
            isValid = value.trim() !== '' && isValid;
        }
        return isValid;
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedContactForm = {
            ...this.state.contactForm
        };
        const updatedFormElement = {
            ...updatedContactForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedContactForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedContactForm) {
            formIsValid = updatedContactForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({contactForm: updatedContactForm, formIsValid: formIsValid})
    }

    render() {
        const formElementArray = [];
        for ( let key in this.state.contactForm ){
            formElementArray.push({
                id: key,
                config: this.state.contactForm[key]
            });
        }
        let form = (
            <form onSubmit={this.contactHandler}>
                {formElementArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangeHandler(event, formElement.id)}
                    />
                ))}
                <Button disabled={!this.state.formIsValid}>SUBMIT</Button>
            </form>
        )
        if(this.state.loading){
            form = <Spinner />;
        }
        return(
            <div className="ToolbarProps">
                <h3>Enter your Contact data</h3>
                {form}
            </div>
        )

    }
}

export default Contact;