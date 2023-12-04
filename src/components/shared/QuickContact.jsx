import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const QuickContact = () => {
    const [show , setShow] = useState(false)
    return (
        <>
        <Link className="sticky_form_bp color-btn1" to={'/create-your-own-token-and-coin'} style={{ color: '#fff' }}>create your token</Link>
            <div className="sticky-form">
                <span className="quick-cont-btn" onClick={() => { setShow(true)}}>Quick Contact </span>
                <div className={`formdiv ${show ? 'show' : ''}`}>
                    <form className="form-side" id="mailForm_sticky" method="post" action="">
                        <h4>Connect With Us</h4>{" "}
                        <button type="button" className="close" aria-label="Close quick contact" onClick={() => { setShow(false)}}>
                            <i className="fa fa-times-circle" aria-hidden="true" />
                        </button>
                        <hr />
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name_sticky"
                                placeholder="Your Name"
                            />{" "}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email_sticky"
                                placeholder="Your Email"
                            />{" "}
                        </div>
                        <div className="form-group">
                            <label htmlFor="skype">Skype</label>
                            <input
                                type="text"
                                className="form-control"
                                name="skype"
                                id="skype_sticky"
                                placeholder="Your Skype"
                            />{" "}
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <div className="intl-tel-input allow-dropdown">
                                <div className="flag-container">
                                    <div
                                        className="selected-flag"
                                        tabIndex={0}
                                        title="United States: +1"
                                    >
                                        <div className="iti-flag us" />
                                        <div className="iti-arrow" />
                                    </div>
                                </div>
                                <input
                                    id="phone_sticky"
                                    name="phone_dummy"
                                    type="text"
                                    required=""
                                    autoComplete="off"
                                    placeholder="(201) 555-0123"
                                />
                            </div>
                            <input type="hidden" name="phone" id="phone_newsletter" />
                            <input type="hidden" name="url" id="url" defaultValue="/" />{" "}
                        </div>
                        <div className="form-group">
                            <label>messages</label>
                            <textarea
                                placeholder="Write text here..."
                                id="textarea_sticky"
                                name="message"
                                defaultValue={""}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="button"
                                id="submit"
                                className="common_send_btn"
                                defaultValue="send message"
                            />{" "}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default QuickContact