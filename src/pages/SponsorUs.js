import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../CSS/styles.css'
import Footer from './Footer';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import validator from 'validator';
import emailjs, { send } from '@emailjs/browser';


function SponsorUs() {

    //PHONE NUMBER VALIDATION
    const [mobile, setmobile] = useState("");
    const [isError, setIsError] = useState(false);

    const [fullName, setFullName] = useState("");
    const [fullNameError, setFullNameError] = useState(false);

    //FULL NAME VALIDATION
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
        
    const sendEmailTemplate2 = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                'template_l0yivqg',
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
            <main>
                <div className="flex flex-col items-center bg-black w-full pb-4 pt-5">
                    <h1 className='about-heading'>Sponsor Us</h1>
                    <p className="sponsor-body-text text-xs md:text-lg lg:text-base text-white sm:px-20 md:px-10 lg:px-60">
                        By sponsoring the International Film Festival of Australia, you're not just investing in an event; you're investing in the power of storytelling, cultural exchange, and the transformative impact of film. Join us in celebrating creativity, diversity, and the magic of cinema by becoming a sponsor today.
                        <br /><br />
                        We offer a selection of sponsorship packages designed to meet the unique needs and objectives of our partners. Whether you're looking to increase brand awareness, engage with a targeted audience, or demonstrate your commitment to the arts, we have a sponsorship package that's right for you.
                        <br /><br />
                        For more information on sponsorship opportunities and benefits please enquire by clicking on the sponsor us link below. We look forward to partnering with you to make the International Film Festival of Australia a resounding success.
                    </p>
                    <p className="text-dark-gold text-sm md:text-base lg:text-lg mt-4">
                        IFFA 2024 will take place on the 5th of November 2024
                    </p>
                </div>
                <div className="container mx-auto p-4 max-w-4xl sm:px-20 md:px-10 lg:px-10">
                    <form ref={formRef} onSubmit={sendEmailTemplate2}>

                        <div className="flex flex-col sm:flex-row mb-3 ">

                            <div className="w-full sm:w-1/2 pr-0 sm:pr-2 mb-4 sm:mb-0">
                                <label htmlFor="FullName"
                                    className="block my-2 text-left text-sm font-medium text-gray-900 form-headers">
                                    Company Name/ Full Name <span className='text-red-600'>*</span>
                                </label>
                                <input type="text"
                                    className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 form-input ${fullNameError ? 'border-red-500' : ''}`}
                                    id='FullName'
                                    name='FullName'
                                    placeholder="Enter Full Name"
                                    value={fullName}
                                    onChange={handleFullNameChange}
                                    required />
                                    {fullNameError && <p style={{ fontSize: '13px', fontWeight: 'normal', color: 'red', paddingTop: '5px'}}>Full/ Company Name can only contain letters, spaces and hyphens</p>}
                            </div>

                            <div className="w-full sm:w-1/2 pl-0 sm:pl-2">
                                <label htmlFor="PhoneNumber"
                                    className="block my-2 text-left text-sm font-medium text-gray-900 form-headers">
                                    Phone Number <span className='text-red-600'>*</span>
                                </label>

                                <PhoneInput
                                    country={'au'}
                                    //disableCountryCode={true}
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

                                    inputClass= {`bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 form-input ${setIsError ? 'border-red-500' : ''}`}
                                    placeholder='Enter Phone Number'
                                    id='PhoneNumber'
                                    name='PhoneNumber'
                                    value={mobile}
                                    onChange={(value) => {
                                        setmobile(value);
                                        if (value.replace(/\D/g, '').length > 11) {
                                            return setIsError(true);
                                        }
                                        setIsError(false);
                                    }}
                                    format="(##) ### ### ###" 
                                    mask="_"
                                    required
                                />
                                {isError && <p style={{ fontSize: '13px', fontWeight: 'normal', color: 'red', paddingTop: '5px'}}>Phone number should be less than 10 digits</p>}
                            </div>

                        </div>

                        <div className="mt-4">
                            <label for="emailAddress"
                                className="block my-2 text-left text-sm font-medium text-gray-900 form-headers">
                                Your email <span className='text-red-600'>*</span>
                            </label>
                            <input type="email"
                                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 form-input ${emailError ? 'border-red-500' : ''}`}
                                id='emailAddress'
                                name='emailAddress'
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="example@iffa.com"
                                required />
                                {emailError && <p style={{ fontSize: '13px', fontWeight: 'normal', color: 'red', paddingTop: '5px' }}>Please enter your email address in this format: example@iffa.com</p>}
                        </div>

                        <div className="mt-4">
                            <label for="description"
                                className="block my-2 text-left text-sm font-medium text-gray-900 form-headers">
                                Description <span className='text-red-600'>*</span>
                            </label>
                            <textarea rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 form-input"
                                id='description'
                                name='description'
                                placeholder="Enter your description..." 
                                required/>
                        </div>

{/*                         <div className=' flex w-max gap-4 mt-4 contact-form-check'>
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


export default SponsorUs;