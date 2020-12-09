import React from 'react'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

export default class ContactForm extends React.Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        formErrors: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    }

    toastifySuccess() {
        toast.success('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
        });
    }
    
    toastifyFail() {
        toast.error('Form failed to send!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback fail',
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          // Handle form validation success
          const { name, email, subject, message } = this.state;
    
          // Set template params
          let templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message,
          };
          emailjs.send('service_nupu6yo', 'template_q2brliz', templateParams, 'user_7qTAiNGLfAJ1Uki65MiNX');
    
          console.log(`
            --SUBMITTING--
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
          `);
    
          this.resetForm();
        } else {
          // Handle form validation failure
          console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
      };
    
      // Function to reset form
      resetForm() {
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case 'name':
            formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
            break;
          case 'email':
            formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
            break;
          case 'subject':
            formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
            break;
          case 'message':
            formErrors.message = value.length < 1 ? 'Please enter a message' : '';
            break;
          default:
            break;
        }
        this.setState({ formErrors, [name]: value });
      };
    
      render() {
        const { formErrors } = this.state;
    
        return (
          <div className='ContactForm'>
            <h1>Want to contact me, Bob Whitmer? Here's how!</h1>
            <form id='contact-form' onSubmit={this.handleSubmit} noValidate>
              <div className='form-content'>
                <div className='col-6'>
                  <input
                    id='name'
                    type='text'
                    name='name'
                    value={this.state.name}
                    className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
                    onChange={this.handleChange}
                    placeholder='Name'
                    noValidate
                  ></input>
                  {formErrors.name.length > 0 && (
                    <span className='errorMessage'>{formErrors.name}</span>
                  )}
                </div>
    
                <div className='col-6'>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    value={this.state.email}
                    className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
                    onChange={this.handleChange}
                    placeholder='Email'
                    noValidate
                  ></input>
                  {formErrors.email.length > 0 && (
                    <span className='errorMessage'>{formErrors.email}</span>
                  )}
                </div>
                <div className='col-6'>
                  <input
                    type='subject'
                    name='subject'
                    value={this.state.subject}
                    className={`form-control formInput ${
                      formErrors.subject.length > 0 ? 'error' : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Subject: URGENT!!"
                    noValidate
                  ></input>
                  {formErrors.subject.length > 0 && (
                    <span className='errorMessage'>{formErrors.subject}</span>
                  )}
                </div>
    
                <div className='col-6'>
                  <textarea
                    rows='5'
                    name='message'
                    value={this.state.message}
                    className={`form-control formInput ${
                      formErrors.message.length > 0 ? 'error' : null
                    }`}
                    onChange={this.handleChange}
                    placeholder="Something like, 'Wow, Bob! I can't wait to hire you!"
                    noValidate
                  ></textarea>
                  {formErrors.message.length > 0 && (
                    <span className='errorMessage'>{formErrors.message}</span>
                  )}
                </div>
              <button className='submit-btn' type='submit'>
                Submit
              </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        );
    }
}