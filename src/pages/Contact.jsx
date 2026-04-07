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
    return (
        <div>

            <div className='second-div-section'>


                <div className='wrap-Location'>

                    <h1 className='GET-IN'>GET IN TOUCH</h1>

                    <div className='location'>
                        <p className='back-location'> <SlLocationPin className='icon' /></p>

                        <div>
                            <strong>Our Location</strong><br />
                            <span>Victoria island </span> <br /> <span>Victoria Island, Lagos 106104, Lagos</span>
                        </div>

                    </div>

                    <div className='location'>
                        <p className='back-location'> <AiOutlineMail className='icon' /></p>

                        <div>
                            <strong>Email Us</strong><br />
                            <a href='mailto:AdioSamsonOlusegun@gmail.com'>AdioSamsonOlusegun@gmail.com</a> <br /> <a href='mailto:Adiosamson27@gmail.com'>Adiosamson27@gmail.com</a>
                        </div>

                    </div>



                    <div className='location'>
                        <p className='back-location'> < BsFillTelephoneFill className='icon' /></p>

                        <div>
                            <strong>Call Us</strong><br />

                            <a href="tel:09074089152">09074089152 </a> <br /> <span>Mon: sat, 900:Pm</span>
                        </div>

                    </div>


                </div>


                <form className='Form-container' >

                    <strong className='Feedback'>Send FeedBack</strong>

                    <div className='display-john'>




                        <div>

                            <label className='labe' >Name</label> <br />
                            <input className="john" type="name" placeholder='John Doe' />

                        </div>

                        <div>

                            <label className='labe' >Email</label> <br />
                            <input className="john" type="name" placeholder='Adiosamson@gmail.com' />

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

                        <label className='labe-message' >Message</label> <br />

                        <textarea className='messages' type="message"  placeholder=" How's your experience with us "></textarea>

                    </div>

                    <input type='submit' className='submit-btn' value='Submit Feedback' />        

                </form>



            </div>


        </div>

    )
}

export default Contact;
