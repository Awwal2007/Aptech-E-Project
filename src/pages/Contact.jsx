import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import './css/Contact.css';
import { useState } from "react";
import { FaStar } from "react-icons/fa"; 

const Contact = () => {
    const [rating, setRating] = useState(0);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const [successData, setSuccessData] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.placeholder.includes("John") ? "name" : e.target.placeholder.includes("@") ? "email" : "message"]: e.target.value
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

            setSuccessData({
                name: formData.name,
                email: formData.email,
                message: formData.message,
                rating: rating
            });

            setFormData({
                name: "",
                email: "",
                message: ""
            });

            setRating(0);
        }
    };

    return (
        <div>

            <div className='second-div-section'>

                <div className='wrap-Location'>

                    <h1 className='GET-IN'>GET IN TOUCH</h1>

                    <div className='location'>
                        <p className='back-location'> <SlLocationPin className='icon' /></p>

                        <div>
                            <strong>Our Location</strong><br />
                            <span>Victoria island </span> <br /> 
                            <span>Victoria Island, Lagos 106104, Lagos</span>
                        </div>
                    </div>

                    <div className='location'>
                        <p className='back-location'> <AiOutlineMail className='icon' /></p>

                        <div>
                            <strong>Email Us</strong><br />
                            <a href='mailto:AdioSamsonOlusegun@gmail.com'>AdioSamsonOlusegun@gmail.com</a> <br /> 
                            <a href='mailto:Adiosamson27@gmail.com'>Adiosamson27@gmail.com</a>
                        </div>
                    </div>

                    <div className='location'>
                        <p className='back-location'> <BsFillTelephoneFill className='icon' /></p>

                        <div>
                            <strong>Call Us</strong><br />
                            <a href="tel:09074089152">09074089152 </a> <br /> 
                            <span>Mon: sat, 900:Pm</span>
                        </div>
                    </div>

                </div>

                <form className='Form-container' onSubmit={handleSubmit}>

                    <strong className='Feedback'>Send FeedBack</strong>

                    <div className='display-john'>

                        <div>
                            <label className='labe'>Name</label> <br />
                            <input 
                                className="john" 
                                type="text" 
                                placeholder='John Doe'
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <small style={{color:"red"}}>{errors.name}</small>}
                        </div>

                        <div>
                            <label className='labe'>Email</label> <br />
                            <input 
                                className="john" 
                                type="text" 
                                placeholder='Adiosamson@gmail.com'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <small style={{color:"red"}}>{errors.email}</small>}
                        </div>

                    </div>

                    <div className='rate-container'>

                        <p className='ratting'> RATING</p>

                        <div className="display-star">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <p
                                    key={star}
                                    className="hold-star"
                                    onClick={() => setRating(star)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {star <= rating ? (
                                        <FaStar className="star filled" />
                                    ) : (
                                        <CiStar className="star" />
                                    )}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className='message-container'>

                        <label className='labe-message'>Message</label> <br />

                        <textarea 
                            className='messages'
                            placeholder=" How's your experience with us "
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>

                        {errors.message && <small style={{color:"red"}}>{errors.message}</small>}
                    </div>

                    <input type='submit' className='submit-btn' value='Submit Feedback' />        

                </form>

            </div>

            {/* SUCCESS POPUP */}
            {successData && (
                <div className="success-overlay">
                    <div className="success-card">

                        <h2>✅ Message Delivered</h2>

                        <p><strong>Name:</strong> {successData.name}</p>
                        <p><strong>Email:</strong> {successData.email}</p>
                        <p><strong>Message:</strong> {successData.message}</p>

                        {successData.rating > 0 && (
                            <p><strong>Rating:</strong> {successData.rating} ⭐</p>
                        )}

                        <p className="success-note">
                            Your message has been successfully delivered.
                        </p>

                        <button 
                            className="ok-btn"
                            onClick={() => setSuccessData(null)}
                        >
                            OK
                        </button>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Contact;