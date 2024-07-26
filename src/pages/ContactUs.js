import React, { useState, useRef } from 'react';
import Header from './Header';
//import '../CSS/styles.css'
import Footer from './Footer';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import validator from 'validator';
import emailjs, { send } from '@emailjs/browser';

function ContactUs() {

    //FULL NAME VALIDATION

    const [fullName, setFullName] = useState("");
    const [fullNameError, setFullNameError] = useState(false);


    const handleFullNameChange = (e) => {
        const value = e.target.value;
        // Regular expression to allow only letters, spaces, and hyphens
        const regex = /^[a-zA-Z\s-]*$/;

        if (regex.test(value)) {
            setFullName(value);
            setFullNameError(false);
        } else {
            setFullNameError(true);
        }
    };

    //PHONE NUMBER VALIDATION
    const [mobile, setmobile] = useState("");
    const [isError, setIsError] = useState(false);

    const handleMobileChange = (value) => {

        setmobile(value);
        if (value.replace(/\D/g, '').length > 11) {
            setIsError(true);
        } else {
            setIsError(false);
        }
    };

    //CITY/STATE VALIDATION
    const [citystate, setCitystate] = useState("");
    const [citystateError, setCitystateError] = useState(false);


    const handleCitystateChange = (e) => {
        const value = e.target.value;
        // Regular expression to allow only letters, spaces, and hyphens
        const regex = /^[a-zA-Z\s-]*$/;

        if (regex.test(value)) {
            setCitystate(value);
            setCitystateError(false);
        } else {
            setCitystateError(true);
        }
    };

    //COMPANY NAME VALIDATION
    const [companyname, setCompanyName] = useState("");
    const [companyNameError, setCompanyNameError] = useState(false);


    const handleCompanyNameChange = (e) => {
        const value = e.target.value;
        // Regular expression to allow only letters, spaces, and hyphens
        const regex = /^[a-zA-Z\s-]*$/;

        if (regex.test(value)) {
            setCompanyName(value);
            setCompanyNameError(false);
        } else {
            setCompanyNameError(true);
        }
    };

    //EMAIL VALIDATION
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (validator.isEmail(value)) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };

    //EMAIL.JS SENDING EMAILS
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const formRef = useRef();

    const sendEmailTemplate1 = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                'template_7wfy5ai',
                e.target,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text); // Log success message
                    setStateMessage('Your inquiry has been sent');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // Hide message after 5 seconds

                    // Clear the form fields
                    setFullName('');
                    setmobile('');
                    setCitystate('');
                    setCompanyName('');
                    setEmail('');
                    formRef.current.reset();
                },
                (error) => {
                    console.error('EmailJS Error:', error); // Log error message
                    setStateMessage('Something went wrong, please try again');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // Hide message after 5 seconds
                }
            );
    }


    return (
        <div className="min-h-screen flex flex-col bg-black">
            <Header />
            <main className="flex-grow flex flex-col items-center">
                <div className="flex flex-col items-center bg-black w-full pb-4 pt-5">
                    <h1 className='about-heading'>Contact Us</h1>
                    <p className='contact-body-text leading-loose'>
                        Got a question? We'd love to hear from you!<br></br>
                        Send us a message and we'll respond to you as soon as possible.
                    </p>
                </div>

                <div className="container mx-auto p-4 max-w-3xl">

                    {/*                     <form action="#"> */}
                    <form ref={formRef} onSubmit={sendEmailTemplate1}>

                        <div className="flex flex-col sm:flex-row mb-3">

                            <div className="w-full sm:w-1/2 pr-0 sm:pr-2 mb-4 sm:mb-0">
                                <label htmlFor="fullname"
                                    className="block my-2 text-left text-sm font-medium text-gray-900 form-headers">
                                    Full Name <span className='text-red-600'>*</span>
                                </label>
                                <input type="text"
                                    className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 form-input ${fullNameError ? 'border-red-500' : ''}`}
                                    id='fullname'
                                    name='fullname'
                                    placeholder="Enter Full Name"
                                    value={fullName}
                                    onChange={handleFullNameChange}
                                    required />
                                {fullNameError && <p style={{ fontSize: '13px', fontWeight: 'normal', color: 'red', paddingTop: '5px' }}>Full Name can only contain letters, spaces and hyphens</p>}
                            </div>

                            <div className="w-full sm:w-1/2 pl-0 sm:pl-2">
                                <label htmlFor="phonenumber"
                                    className="block my-2 text-left text-sm font-medium text-gray-900 form-headers">
                                    Phone Number <span className='text-red-600'>*</span>
                                </label>

                                <PhoneInput
                                    country={'au'}
                                    inputStyle={{
                                        width: '100%',
                                        paddingLeft: '45px',
                                        borderRadius: '8px',
                                        borderColor: '#ccc',
                                    }}

                                    containerStyle={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                    buttonStyle={{
                                        backgroundColor: '#e0e0e0', // Change this color to your desired background color
                                        borderRadius: '4px', // Optional: Add border-radius for rounded corners
                                    }}

                                    inputClass={`bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 form-input ${setIsError ? 'border-red-500' : ''}`}
                                    id='phonenumber'
                                    name='phonenumber'
                                    placeholder='Enter Phone Number'
                                    value={mobile}
                                    onChange={handleMobileChange}
                                    required
                                />
                                {isError && <p style={{ fontSize: '13px', fontWeight: 'normal', color: 'red', paddingTop: '5px' }}>Phone number should be less than 10 digits</p>}
                            </div>

                        </div>

                        <div className="flex flex-col sm:flex-row">

                            <div className="w-full sm:w-1/2 pr-0 sm:pr-2 mb-4 sm:mb-0">
                                <label htmlFor="citystate"
                                    className="block my-2 text-left text-sm font-medium text-gray-900 form-headers">
                                    City/State <span className='text-red-600'>*</span>
                                </label>
                                <input type="text"
                                    className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 form-input ${citystateError ? 'border-red-500' : ''}`}
                                    id='citystate'
                                    name='citystate'
                                    value={citystate}
                                    onChange={handleCitystateChange}
                                    placeholder="Enter City/State"
                                    required
                                />
                                {citystateError && <p style={{ fontSize: '13px', fontWeight: 'normal', color: 'red', paddingTop: '5px' }}>City/State can only contain letters, spaces and hyphens</p>}
                            </div>

                            <div className="w-full sm:w-1/2 pl-0 sm:pl-2">
                                <label htmlFor="companyname"
                                    className="block my-2 text-left text-sm font-medium text-gray-900 form-headers">
                                    Company Name <span className='text-red-600'>*</span>
                                </label>
                                <input type="text"
                                    className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 form-input ${companyNameError ? 'border-red-500' : ''}`}
                                    id='companyname'
                                    name='companyname'
                                    value={companyname}
                                    onChange={handleCompanyNameChange}
                                    placeholder="Enter Company Name"
                                    required />
                                {companyNameError && <p style={{ fontSize: '13px', fontWeight: 'normal', color: 'red', paddingTop: '5px' }}>Company Name can only contain letters, spaces and hyphens</p>}
                            </div>

                        </div>

                        <div className="mt-4">
                            <label htmlFor="emailaddress"
                                className="block my-2 text-left text-sm font-medium text-gray-900 form-headers">
                                Your email <span className='text-red-600'>*</span>
                            </label>
                            <input type="email"
                                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 form-input ${emailError ? 'border-red-500' : ''}`}
                                id='emailaddress'
                                name='emailaddress'
                                placeholder="example@iffa.com"
                                value={email}
                                onChange={handleEmailChange}
                                required />
                            {emailError && <p style={{ fontSize: '13px', fontWeight: 'normal', color: 'red', paddingTop: '5px' }}>Please enter your email address in this format: example@iffa.com</p>}
                        </div>

                        <div className="mt-4">
                            <label htmlFor="description"
                                className="block my-2 text-left text-sm font-medium text-gray-900 form-headers">
                                Description <span className='text-red-600'>*</span>
                            </label>
                            <textarea rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 form-input"
                                id='description'
                                name='description'
                                placeholder="Enter your description..."
                                required />
                        </div>
{/* 
                        <div className=' flex w-max gap-4 mt-4 contact-form-check'>
                            <div className="flex items-center mb-4">
                                <input id="option1" type="radio" name="option" value="option1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" required />
                                <label htmlFor="option1" className="ml-2 text-sm font-medium text-gray-900 check-text"> By clicking "Submit", I agree to marketing Design <a href="/policy" target='_Blank' className="links">Refund Policy</a> and <a href="/policy" target='_Blank' className="links">Privacy Policy</a>

                                </label>
                            </div>
                        </div>
 */}
                        <div className='flex flex-wrap gap-4 mt-4 contact-form-check'>
                            <div className="flex items-center mb-4 w-full sm:w-auto">
                                <input id="option1" type="radio" name="option" value="option1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" required />
                                <label htmlFor="option1" className="ml-2 text-sm font-medium text-gray-900 check-text">
                                    By clicking "Submit", I agree to marketing Design <a href="/policy" target='_Blank' className="links">Refund Policy</a> and <a href="/policy" target='_Blank' className="links">Privacy Policy</a>
                                </label>
                            </div>
                        </div>

                        <div className="mt-1">
                            <button
                                type="submit"
                                value={send}
                                className="mt-4 p-2 float-left text-white rounded-lg submit-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
                        </div>

                        {stateMessage && (
                            <div className="submission-confirmation">
                                <p style={{ fontSize: '14px', paddingTop: '60px', fontWeight: 'bold', color: stateMessage.includes('wrong') ? 'red' : 'green' }}>
                                    {stateMessage}
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ContactUs;