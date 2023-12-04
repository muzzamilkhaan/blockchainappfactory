import React from 'react'
import Header from '../../headerFooter/Header'
import Footer from '../../headerFooter/Footer'

const ContactUs = () => {
    return (
        <>
        <Header/>
            <div id="contact-section" className="content-section mt50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{ marginBottom: 60 }}>
                            <div className="col-md-6 col-xs-12">
                                <div className="">
                                    <h3 className="section-title underline">Drop A Message To Us</h3>
                                    <p>
                                        Share your queries, discuss your ideas, and understand the power
                                        of web3 business! Your one-stop shop for all Web3 solutions.
                                        Connect with us today!
                                    </p>
                                </div>
                                <form className="" id="mailForm" method="post">
                                    <input type="hidden" name="page" defaultValue="contactus" />
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control input-style-2"
                                            id="name"
                                            name="name"
                                            placeholder="Full Name"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control input-style-2"
                                            id="email"
                                            name="email"
                                            placeholder="Email address"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Phone</label>
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
                                                <ul className="country-list hide">
                                                    <li
                                                        className="country preferred active"
                                                        data-dial-code={1}
                                                        data-country-code="us"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag us" />
                                                        </div>
                                                        <span className="country-name">United States</span>
                                                        <span className="dial-code">+1</span>
                                                    </li>
                                                    <li
                                                        className="country preferred"
                                                        data-dial-code={44}
                                                        data-country-code="gb"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gb" />
                                                        </div>
                                                        <span className="country-name">United Kingdom</span>
                                                        <span className="dial-code">+44</span>
                                                    </li>
                                                    <li className="divider" />
                                                    <li
                                                        className="country"
                                                        data-dial-code={93}
                                                        data-country-code="af"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag af" />
                                                        </div>
                                                        <span className="country-name">
                                                            Afghanistan (‫افغانستان‬‎)
                                                        </span>
                                                        <span className="dial-code">+93</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={355}
                                                        data-country-code="al"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag al" />
                                                        </div>
                                                        <span className="country-name">Albania (Shqipëri)</span>
                                                        <span className="dial-code">+355</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={213}
                                                        data-country-code="dz"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag dz" />
                                                        </div>
                                                        <span className="country-name">Algeria (‫الجزائر‬‎)</span>
                                                        <span className="dial-code">+213</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1684}
                                                        data-country-code="as"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag as" />
                                                        </div>
                                                        <span className="country-name">American Samoa</span>
                                                        <span className="dial-code">+1684</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={376}
                                                        data-country-code="ad"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ad" />
                                                        </div>
                                                        <span className="country-name">Andorra</span>
                                                        <span className="dial-code">+376</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={244}
                                                        data-country-code="ao"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ao" />
                                                        </div>
                                                        <span className="country-name">Angola</span>
                                                        <span className="dial-code">+244</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1264}
                                                        data-country-code="ai"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ai" />
                                                        </div>
                                                        <span className="country-name">Anguilla</span>
                                                        <span className="dial-code">+1264</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1268}
                                                        data-country-code="ag"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ag" />
                                                        </div>
                                                        <span className="country-name">Antigua and Barbuda</span>
                                                        <span className="dial-code">+1268</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={54}
                                                        data-country-code="ar"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ar" />
                                                        </div>
                                                        <span className="country-name">Argentina</span>
                                                        <span className="dial-code">+54</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={374}
                                                        data-country-code="am"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag am" />
                                                        </div>
                                                        <span className="country-name">Armenia (Հայաստան)</span>
                                                        <span className="dial-code">+374</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={297}
                                                        data-country-code="aw"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag aw" />
                                                        </div>
                                                        <span className="country-name">Aruba</span>
                                                        <span className="dial-code">+297</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={61}
                                                        data-country-code="au"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag au" />
                                                        </div>
                                                        <span className="country-name">Australia</span>
                                                        <span className="dial-code">+61</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={43}
                                                        data-country-code="at"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag at" />
                                                        </div>
                                                        <span className="country-name">Austria (Österreich)</span>
                                                        <span className="dial-code">+43</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={994}
                                                        data-country-code="az"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag az" />
                                                        </div>
                                                        <span className="country-name">
                                                            Azerbaijan (Azərbaycan)
                                                        </span>
                                                        <span className="dial-code">+994</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1242}
                                                        data-country-code="bs"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bs" />
                                                        </div>
                                                        <span className="country-name">Bahamas</span>
                                                        <span className="dial-code">+1242</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={973}
                                                        data-country-code="bh"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bh" />
                                                        </div>
                                                        <span className="country-name">Bahrain (‫البحرين‬‎)</span>
                                                        <span className="dial-code">+973</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={880}
                                                        data-country-code="bd"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bd" />
                                                        </div>
                                                        <span className="country-name">
                                                            Bangladesh (বাংলাদেশ)
                                                        </span>
                                                        <span className="dial-code">+880</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1246}
                                                        data-country-code="bb"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bb" />
                                                        </div>
                                                        <span className="country-name">Barbados</span>
                                                        <span className="dial-code">+1246</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={375}
                                                        data-country-code="by"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag by" />
                                                        </div>
                                                        <span className="country-name">Belarus (Беларусь)</span>
                                                        <span className="dial-code">+375</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={32}
                                                        data-country-code="be"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag be" />
                                                        </div>
                                                        <span className="country-name">Belgium (België)</span>
                                                        <span className="dial-code">+32</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={501}
                                                        data-country-code="bz"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bz" />
                                                        </div>
                                                        <span className="country-name">Belize</span>
                                                        <span className="dial-code">+501</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={229}
                                                        data-country-code="bj"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bj" />
                                                        </div>
                                                        <span className="country-name">Benin (Bénin)</span>
                                                        <span className="dial-code">+229</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1441}
                                                        data-country-code="bm"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bm" />
                                                        </div>
                                                        <span className="country-name">Bermuda</span>
                                                        <span className="dial-code">+1441</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={975}
                                                        data-country-code="bt"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bt" />
                                                        </div>
                                                        <span className="country-name">Bhutan (འབྲུག)</span>
                                                        <span className="dial-code">+975</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={591}
                                                        data-country-code="bo"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bo" />
                                                        </div>
                                                        <span className="country-name">Bolivia</span>
                                                        <span className="dial-code">+591</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={387}
                                                        data-country-code="ba"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ba" />
                                                        </div>
                                                        <span className="country-name">
                                                            Bosnia and Herzegovina (Босна и Херцеговина)
                                                        </span>
                                                        <span className="dial-code">+387</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={267}
                                                        data-country-code="bw"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bw" />
                                                        </div>
                                                        <span className="country-name">Botswana</span>
                                                        <span className="dial-code">+267</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={55}
                                                        data-country-code="br"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag br" />
                                                        </div>
                                                        <span className="country-name">Brazil (Brasil)</span>
                                                        <span className="dial-code">+55</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={246}
                                                        data-country-code="io"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag io" />
                                                        </div>
                                                        <span className="country-name">
                                                            British Indian Ocean Territory
                                                        </span>
                                                        <span className="dial-code">+246</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1284}
                                                        data-country-code="vg"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag vg" />
                                                        </div>
                                                        <span className="country-name">
                                                            British Virgin Islands
                                                        </span>
                                                        <span className="dial-code">+1284</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={673}
                                                        data-country-code="bn"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bn" />
                                                        </div>
                                                        <span className="country-name">Brunei</span>
                                                        <span className="dial-code">+673</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={359}
                                                        data-country-code="bg"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bg" />
                                                        </div>
                                                        <span className="country-name">Bulgaria (България)</span>
                                                        <span className="dial-code">+359</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={226}
                                                        data-country-code="bf"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bf" />
                                                        </div>
                                                        <span className="country-name">Burkina Faso</span>
                                                        <span className="dial-code">+226</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={257}
                                                        data-country-code="bi"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bi" />
                                                        </div>
                                                        <span className="country-name">Burundi (Uburundi)</span>
                                                        <span className="dial-code">+257</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={855}
                                                        data-country-code="kh"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag kh" />
                                                        </div>
                                                        <span className="country-name">Cambodia (កម្ពុជា)</span>
                                                        <span className="dial-code">+855</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={237}
                                                        data-country-code="cm"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag cm" />
                                                        </div>
                                                        <span className="country-name">Cameroon (Cameroun)</span>
                                                        <span className="dial-code">+237</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1}
                                                        data-country-code="ca"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ca" />
                                                        </div>
                                                        <span className="country-name">Canada</span>
                                                        <span className="dial-code">+1</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={238}
                                                        data-country-code="cv"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag cv" />
                                                        </div>
                                                        <span className="country-name">
                                                            Cape Verde (Kabu Verdi)
                                                        </span>
                                                        <span className="dial-code">+238</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={599}
                                                        data-country-code="bq"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bq" />
                                                        </div>
                                                        <span className="country-name">
                                                            Caribbean Netherlands
                                                        </span>
                                                        <span className="dial-code">+599</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1345}
                                                        data-country-code="ky"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ky" />
                                                        </div>
                                                        <span className="country-name">Cayman Islands</span>
                                                        <span className="dial-code">+1345</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={236}
                                                        data-country-code="cf"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag cf" />
                                                        </div>
                                                        <span className="country-name">
                                                            Central African Republic (République centrafricaine)
                                                        </span>
                                                        <span className="dial-code">+236</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={235}
                                                        data-country-code="td"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag td" />
                                                        </div>
                                                        <span className="country-name">Chad (Tchad)</span>
                                                        <span className="dial-code">+235</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={56}
                                                        data-country-code="cl"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag cl" />
                                                        </div>
                                                        <span className="country-name">Chile</span>
                                                        <span className="dial-code">+56</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={86}
                                                        data-country-code="cn"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag cn" />
                                                        </div>
                                                        <span className="country-name">China (中国)</span>
                                                        <span className="dial-code">+86</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={61}
                                                        data-country-code="cx"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag cx" />
                                                        </div>
                                                        <span className="country-name">Christmas Island</span>
                                                        <span className="dial-code">+61</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={61}
                                                        data-country-code="cc"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag cc" />
                                                        </div>
                                                        <span className="country-name">
                                                            Cocos (Keeling) Islands
                                                        </span>
                                                        <span className="dial-code">+61</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={57}
                                                        data-country-code="co"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag co" />
                                                        </div>
                                                        <span className="country-name">Colombia</span>
                                                        <span className="dial-code">+57</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={269}
                                                        data-country-code="km"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag km" />
                                                        </div>
                                                        <span className="country-name">
                                                            Comoros (‫جزر القمر‬‎)
                                                        </span>
                                                        <span className="dial-code">+269</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={243}
                                                        data-country-code="cd"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag cd" />
                                                        </div>
                                                        <span className="country-name">
                                                            Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)
                                                        </span>
                                                        <span className="dial-code">+243</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={242}
                                                        data-country-code="cg"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag cg" />
                                                        </div>
                                                        <span className="country-name">
                                                            Congo (Republic) (Congo-Brazzaville)
                                                        </span>
                                                        <span className="dial-code">+242</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={682}
                                                        data-country-code="ck"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ck" />
                                                        </div>
                                                        <span className="country-name">Cook Islands</span>
                                                        <span className="dial-code">+682</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={506}
                                                        data-country-code="cr"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag cr" />
                                                        </div>
                                                        <span className="country-name">Costa Rica</span>
                                                        <span className="dial-code">+506</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={225}
                                                        data-country-code="ci"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ci" />
                                                        </div>
                                                        <span className="country-name">Côte d’Ivoire</span>
                                                        <span className="dial-code">+225</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={385}
                                                        data-country-code="hr"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag hr" />
                                                        </div>
                                                        <span className="country-name">Croatia (Hrvatska)</span>
                                                        <span className="dial-code">+385</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={53}
                                                        data-country-code="cu"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag cu" />
                                                        </div>
                                                        <span className="country-name">Cuba</span>
                                                        <span className="dial-code">+53</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={599}
                                                        data-country-code="cw"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag cw" />
                                                        </div>
                                                        <span className="country-name">Curaçao</span>
                                                        <span className="dial-code">+599</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={357}
                                                        data-country-code="cy"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag cy" />
                                                        </div>
                                                        <span className="country-name">Cyprus (Κύπρος)</span>
                                                        <span className="dial-code">+357</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={420}
                                                        data-country-code="cz"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag cz" />
                                                        </div>
                                                        <span className="country-name">
                                                            Czech Republic (Česká republika)
                                                        </span>
                                                        <span className="dial-code">+420</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={45}
                                                        data-country-code="dk"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag dk" />
                                                        </div>
                                                        <span className="country-name">Denmark (Danmark)</span>
                                                        <span className="dial-code">+45</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={253}
                                                        data-country-code="dj"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag dj" />
                                                        </div>
                                                        <span className="country-name">Djibouti</span>
                                                        <span className="dial-code">+253</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1767}
                                                        data-country-code="dm"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag dm" />
                                                        </div>
                                                        <span className="country-name">Dominica</span>
                                                        <span className="dial-code">+1767</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1}
                                                        data-country-code="do"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag do" />
                                                        </div>
                                                        <span className="country-name">
                                                            Dominican Republic (República Dominicana)
                                                        </span>
                                                        <span className="dial-code">+1</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={593}
                                                        data-country-code="ec"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ec" />
                                                        </div>
                                                        <span className="country-name">Ecuador</span>
                                                        <span className="dial-code">+593</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={20}
                                                        data-country-code="eg"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag eg" />
                                                        </div>
                                                        <span className="country-name">Egypt (‫مصر‬‎)</span>
                                                        <span className="dial-code">+20</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={503}
                                                        data-country-code="sv"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sv" />
                                                        </div>
                                                        <span className="country-name">El Salvador</span>
                                                        <span className="dial-code">+503</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={240}
                                                        data-country-code="gq"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gq" />
                                                        </div>
                                                        <span className="country-name">
                                                            Equatorial Guinea (Guinea Ecuatorial)
                                                        </span>
                                                        <span className="dial-code">+240</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={291}
                                                        data-country-code="er"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag er" />
                                                        </div>
                                                        <span className="country-name">Eritrea</span>
                                                        <span className="dial-code">+291</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={372}
                                                        data-country-code="ee"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ee" />
                                                        </div>
                                                        <span className="country-name">Estonia (Eesti)</span>
                                                        <span className="dial-code">+372</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={251}
                                                        data-country-code="et"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag et" />
                                                        </div>
                                                        <span className="country-name">Ethiopia</span>
                                                        <span className="dial-code">+251</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={500}
                                                        data-country-code="fk"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag fk" />
                                                        </div>
                                                        <span className="country-name">
                                                            Falkland Islands (Islas Malvinas)
                                                        </span>
                                                        <span className="dial-code">+500</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={298}
                                                        data-country-code="fo"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag fo" />
                                                        </div>
                                                        <span className="country-name">
                                                            Faroe Islands (Føroyar)
                                                        </span>
                                                        <span className="dial-code">+298</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={679}
                                                        data-country-code="fj"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag fj" />
                                                        </div>
                                                        <span className="country-name">Fiji</span>
                                                        <span className="dial-code">+679</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={358}
                                                        data-country-code="fi"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag fi" />
                                                        </div>
                                                        <span className="country-name">Finland (Suomi)</span>
                                                        <span className="dial-code">+358</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={33}
                                                        data-country-code="fr"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag fr" />
                                                        </div>
                                                        <span className="country-name">France</span>
                                                        <span className="dial-code">+33</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={594}
                                                        data-country-code="gf"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gf" />
                                                        </div>
                                                        <span className="country-name">
                                                            French Guiana (Guyane française)
                                                        </span>
                                                        <span className="dial-code">+594</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={689}
                                                        data-country-code="pf"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag pf" />
                                                        </div>
                                                        <span className="country-name">
                                                            French Polynesia (Polynésie française)
                                                        </span>
                                                        <span className="dial-code">+689</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={241}
                                                        data-country-code="ga"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ga" />
                                                        </div>
                                                        <span className="country-name">Gabon</span>
                                                        <span className="dial-code">+241</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={220}
                                                        data-country-code="gm"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gm" />
                                                        </div>
                                                        <span className="country-name">Gambia</span>
                                                        <span className="dial-code">+220</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={995}
                                                        data-country-code="ge"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ge" />
                                                        </div>
                                                        <span className="country-name">Georgia (საქართველო)</span>
                                                        <span className="dial-code">+995</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={49}
                                                        data-country-code="de"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag de" />
                                                        </div>
                                                        <span className="country-name">
                                                            Germany (Deutschland)
                                                        </span>
                                                        <span className="dial-code">+49</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={233}
                                                        data-country-code="gh"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gh" />
                                                        </div>
                                                        <span className="country-name">Ghana (Gaana)</span>
                                                        <span className="dial-code">+233</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={350}
                                                        data-country-code="gi"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gi" />
                                                        </div>
                                                        <span className="country-name">Gibraltar</span>
                                                        <span className="dial-code">+350</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={30}
                                                        data-country-code="gr"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gr" />
                                                        </div>
                                                        <span className="country-name">Greece (Ελλάδα)</span>
                                                        <span className="dial-code">+30</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={299}
                                                        data-country-code="gl"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gl" />
                                                        </div>
                                                        <span className="country-name">
                                                            Greenland (Kalaallit Nunaat)
                                                        </span>
                                                        <span className="dial-code">+299</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1473}
                                                        data-country-code="gd"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gd" />
                                                        </div>
                                                        <span className="country-name">Grenada</span>
                                                        <span className="dial-code">+1473</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={590}
                                                        data-country-code="gp"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gp" />
                                                        </div>
                                                        <span className="country-name">Guadeloupe</span>
                                                        <span className="dial-code">+590</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1671}
                                                        data-country-code="gu"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gu" />
                                                        </div>
                                                        <span className="country-name">Guam</span>
                                                        <span className="dial-code">+1671</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={502}
                                                        data-country-code="gt"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gt" />
                                                        </div>
                                                        <span className="country-name">Guatemala</span>
                                                        <span className="dial-code">+502</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={44}
                                                        data-country-code="gg"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gg" />
                                                        </div>
                                                        <span className="country-name">Guernsey</span>
                                                        <span className="dial-code">+44</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={224}
                                                        data-country-code="gn"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gn" />
                                                        </div>
                                                        <span className="country-name">Guinea (Guinée)</span>
                                                        <span className="dial-code">+224</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={245}
                                                        data-country-code="gw"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gw" />
                                                        </div>
                                                        <span className="country-name">
                                                            Guinea-Bissau (Guiné Bissau)
                                                        </span>
                                                        <span className="dial-code">+245</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={592}
                                                        data-country-code="gy"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gy" />
                                                        </div>
                                                        <span className="country-name">Guyana</span>
                                                        <span className="dial-code">+592</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={509}
                                                        data-country-code="ht"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ht" />
                                                        </div>
                                                        <span className="country-name">Haiti</span>
                                                        <span className="dial-code">+509</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={504}
                                                        data-country-code="hn"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag hn" />
                                                        </div>
                                                        <span className="country-name">Honduras</span>
                                                        <span className="dial-code">+504</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={852}
                                                        data-country-code="hk"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag hk" />
                                                        </div>
                                                        <span className="country-name">Hong Kong (香港)</span>
                                                        <span className="dial-code">+852</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={36}
                                                        data-country-code="hu"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag hu" />
                                                        </div>
                                                        <span className="country-name">
                                                            Hungary (Magyarország)
                                                        </span>
                                                        <span className="dial-code">+36</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={354}
                                                        data-country-code="is"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag is" />
                                                        </div>
                                                        <span className="country-name">Iceland (Ísland)</span>
                                                        <span className="dial-code">+354</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={91}
                                                        data-country-code="in"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag in" />
                                                        </div>
                                                        <span className="country-name">India (भारत)</span>
                                                        <span className="dial-code">+91</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={62}
                                                        data-country-code="id"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag id" />
                                                        </div>
                                                        <span className="country-name">Indonesia</span>
                                                        <span className="dial-code">+62</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={98}
                                                        data-country-code="ir"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ir" />
                                                        </div>
                                                        <span className="country-name">Iran (‫ایران‬‎)</span>
                                                        <span className="dial-code">+98</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={964}
                                                        data-country-code="iq"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag iq" />
                                                        </div>
                                                        <span className="country-name">Iraq (‫العراق‬‎)</span>
                                                        <span className="dial-code">+964</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={353}
                                                        data-country-code="ie"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ie" />
                                                        </div>
                                                        <span className="country-name">Ireland</span>
                                                        <span className="dial-code">+353</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={44}
                                                        data-country-code="im"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag im" />
                                                        </div>
                                                        <span className="country-name">Isle of Man</span>
                                                        <span className="dial-code">+44</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={972}
                                                        data-country-code="il"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag il" />
                                                        </div>
                                                        <span className="country-name">Israel (‫ישראל‬‎)</span>
                                                        <span className="dial-code">+972</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={39}
                                                        data-country-code="it"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag it" />
                                                        </div>
                                                        <span className="country-name">Italy (Italia)</span>
                                                        <span className="dial-code">+39</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1876}
                                                        data-country-code="jm"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag jm" />
                                                        </div>
                                                        <span className="country-name">Jamaica</span>
                                                        <span className="dial-code">+1876</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={81}
                                                        data-country-code="jp"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag jp" />
                                                        </div>
                                                        <span className="country-name">Japan (日本)</span>
                                                        <span className="dial-code">+81</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={44}
                                                        data-country-code="je"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag je" />
                                                        </div>
                                                        <span className="country-name">Jersey</span>
                                                        <span className="dial-code">+44</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={962}
                                                        data-country-code="jo"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag jo" />
                                                        </div>
                                                        <span className="country-name">Jordan (‫الأردن‬‎)</span>
                                                        <span className="dial-code">+962</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={7}
                                                        data-country-code="kz"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag kz" />
                                                        </div>
                                                        <span className="country-name">
                                                            Kazakhstan (Казахстан)
                                                        </span>
                                                        <span className="dial-code">+7</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={254}
                                                        data-country-code="ke"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ke" />
                                                        </div>
                                                        <span className="country-name">Kenya</span>
                                                        <span className="dial-code">+254</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={686}
                                                        data-country-code="ki"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ki" />
                                                        </div>
                                                        <span className="country-name">Kiribati</span>
                                                        <span className="dial-code">+686</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={383}
                                                        data-country-code="xk"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag xk" />
                                                        </div>
                                                        <span className="country-name">Kosovo</span>
                                                        <span className="dial-code">+383</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={965}
                                                        data-country-code="kw"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag kw" />
                                                        </div>
                                                        <span className="country-name">Kuwait (‫الكويت‬‎)</span>
                                                        <span className="dial-code">+965</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={996}
                                                        data-country-code="kg"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag kg" />
                                                        </div>
                                                        <span className="country-name">
                                                            Kyrgyzstan (Кыргызстан)
                                                        </span>
                                                        <span className="dial-code">+996</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={856}
                                                        data-country-code="la"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag la" />
                                                        </div>
                                                        <span className="country-name">Laos (ລາວ)</span>
                                                        <span className="dial-code">+856</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={371}
                                                        data-country-code="lv"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag lv" />
                                                        </div>
                                                        <span className="country-name">Latvia (Latvija)</span>
                                                        <span className="dial-code">+371</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={961}
                                                        data-country-code="lb"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag lb" />
                                                        </div>
                                                        <span className="country-name">Lebanon (‫لبنان‬‎)</span>
                                                        <span className="dial-code">+961</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={266}
                                                        data-country-code="ls"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ls" />
                                                        </div>
                                                        <span className="country-name">Lesotho</span>
                                                        <span className="dial-code">+266</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={231}
                                                        data-country-code="lr"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag lr" />
                                                        </div>
                                                        <span className="country-name">Liberia</span>
                                                        <span className="dial-code">+231</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={218}
                                                        data-country-code="ly"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ly" />
                                                        </div>
                                                        <span className="country-name">Libya (‫ليبيا‬‎)</span>
                                                        <span className="dial-code">+218</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={423}
                                                        data-country-code="li"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag li" />
                                                        </div>
                                                        <span className="country-name">Liechtenstein</span>
                                                        <span className="dial-code">+423</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={370}
                                                        data-country-code="lt"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag lt" />
                                                        </div>
                                                        <span className="country-name">Lithuania (Lietuva)</span>
                                                        <span className="dial-code">+370</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={352}
                                                        data-country-code="lu"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag lu" />
                                                        </div>
                                                        <span className="country-name">Luxembourg</span>
                                                        <span className="dial-code">+352</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={853}
                                                        data-country-code="mo"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mo" />
                                                        </div>
                                                        <span className="country-name">Macau (澳門)</span>
                                                        <span className="dial-code">+853</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={389}
                                                        data-country-code="mk"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mk" />
                                                        </div>
                                                        <span className="country-name">
                                                            Macedonia (FYROM) (Македонија)
                                                        </span>
                                                        <span className="dial-code">+389</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={261}
                                                        data-country-code="mg"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mg" />
                                                        </div>
                                                        <span className="country-name">
                                                            Madagascar (Madagasikara)
                                                        </span>
                                                        <span className="dial-code">+261</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={265}
                                                        data-country-code="mw"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mw" />
                                                        </div>
                                                        <span className="country-name">Malawi</span>
                                                        <span className="dial-code">+265</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={60}
                                                        data-country-code="my"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag my" />
                                                        </div>
                                                        <span className="country-name">Malaysia</span>
                                                        <span className="dial-code">+60</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={960}
                                                        data-country-code="mv"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mv" />
                                                        </div>
                                                        <span className="country-name">Maldives</span>
                                                        <span className="dial-code">+960</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={223}
                                                        data-country-code="ml"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ml" />
                                                        </div>
                                                        <span className="country-name">Mali</span>
                                                        <span className="dial-code">+223</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={356}
                                                        data-country-code="mt"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mt" />
                                                        </div>
                                                        <span className="country-name">Malta</span>
                                                        <span className="dial-code">+356</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={692}
                                                        data-country-code="mh"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mh" />
                                                        </div>
                                                        <span className="country-name">Marshall Islands</span>
                                                        <span className="dial-code">+692</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={596}
                                                        data-country-code="mq"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mq" />
                                                        </div>
                                                        <span className="country-name">Martinique</span>
                                                        <span className="dial-code">+596</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={222}
                                                        data-country-code="mr"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mr" />
                                                        </div>
                                                        <span className="country-name">
                                                            Mauritania (‫موريتانيا‬‎)
                                                        </span>
                                                        <span className="dial-code">+222</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={230}
                                                        data-country-code="mu"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mu" />
                                                        </div>
                                                        <span className="country-name">Mauritius (Moris)</span>
                                                        <span className="dial-code">+230</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={262}
                                                        data-country-code="yt"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag yt" />
                                                        </div>
                                                        <span className="country-name">Mayotte</span>
                                                        <span className="dial-code">+262</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={52}
                                                        data-country-code="mx"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mx" />
                                                        </div>
                                                        <span className="country-name">Mexico (México)</span>
                                                        <span className="dial-code">+52</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={691}
                                                        data-country-code="fm"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag fm" />
                                                        </div>
                                                        <span className="country-name">Micronesia</span>
                                                        <span className="dial-code">+691</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={373}
                                                        data-country-code="md"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag md" />
                                                        </div>
                                                        <span className="country-name">
                                                            Moldova (Republica Moldova)
                                                        </span>
                                                        <span className="dial-code">+373</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={377}
                                                        data-country-code="mc"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mc" />
                                                        </div>
                                                        <span className="country-name">Monaco</span>
                                                        <span className="dial-code">+377</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={976}
                                                        data-country-code="mn"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mn" />
                                                        </div>
                                                        <span className="country-name">Mongolia (Монгол)</span>
                                                        <span className="dial-code">+976</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={382}
                                                        data-country-code="me"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag me" />
                                                        </div>
                                                        <span className="country-name">
                                                            Montenegro (Crna Gora)
                                                        </span>
                                                        <span className="dial-code">+382</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1664}
                                                        data-country-code="ms"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ms" />
                                                        </div>
                                                        <span className="country-name">Montserrat</span>
                                                        <span className="dial-code">+1664</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={212}
                                                        data-country-code="ma"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ma" />
                                                        </div>
                                                        <span className="country-name">Morocco (‫المغرب‬‎)</span>
                                                        <span className="dial-code">+212</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={258}
                                                        data-country-code="mz"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mz" />
                                                        </div>
                                                        <span className="country-name">
                                                            Mozambique (Moçambique)
                                                        </span>
                                                        <span className="dial-code">+258</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={95}
                                                        data-country-code="mm"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mm" />
                                                        </div>
                                                        <span className="country-name">
                                                            Myanmar (Burma) (မြန်မာ)
                                                        </span>
                                                        <span className="dial-code">+95</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={264}
                                                        data-country-code="na"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag na" />
                                                        </div>
                                                        <span className="country-name">Namibia (Namibië)</span>
                                                        <span className="dial-code">+264</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={674}
                                                        data-country-code="nr"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag nr" />
                                                        </div>
                                                        <span className="country-name">Nauru</span>
                                                        <span className="dial-code">+674</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={977}
                                                        data-country-code="np"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag np" />
                                                        </div>
                                                        <span className="country-name">Nepal (नेपाल)</span>
                                                        <span className="dial-code">+977</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={31}
                                                        data-country-code="nl"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag nl" />
                                                        </div>
                                                        <span className="country-name">
                                                            Netherlands (Nederland)
                                                        </span>
                                                        <span className="dial-code">+31</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={687}
                                                        data-country-code="nc"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag nc" />
                                                        </div>
                                                        <span className="country-name">
                                                            New Caledonia (Nouvelle-Calédonie)
                                                        </span>
                                                        <span className="dial-code">+687</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={64}
                                                        data-country-code="nz"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag nz" />
                                                        </div>
                                                        <span className="country-name">New Zealand</span>
                                                        <span className="dial-code">+64</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={505}
                                                        data-country-code="ni"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ni" />
                                                        </div>
                                                        <span className="country-name">Nicaragua</span>
                                                        <span className="dial-code">+505</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={227}
                                                        data-country-code="ne"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ne" />
                                                        </div>
                                                        <span className="country-name">Niger (Nijar)</span>
                                                        <span className="dial-code">+227</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={234}
                                                        data-country-code="ng"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ng" />
                                                        </div>
                                                        <span className="country-name">Nigeria</span>
                                                        <span className="dial-code">+234</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={683}
                                                        data-country-code="nu"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag nu" />
                                                        </div>
                                                        <span className="country-name">Niue</span>
                                                        <span className="dial-code">+683</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={672}
                                                        data-country-code="nf"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag nf" />
                                                        </div>
                                                        <span className="country-name">Norfolk Island</span>
                                                        <span className="dial-code">+672</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={850}
                                                        data-country-code="kp"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag kp" />
                                                        </div>
                                                        <span className="country-name">
                                                            North Korea (조선 민주주의 인민 공화국)
                                                        </span>
                                                        <span className="dial-code">+850</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1670}
                                                        data-country-code="mp"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mp" />
                                                        </div>
                                                        <span className="country-name">
                                                            Northern Mariana Islands
                                                        </span>
                                                        <span className="dial-code">+1670</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={47}
                                                        data-country-code="no"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag no" />
                                                        </div>
                                                        <span className="country-name">Norway (Norge)</span>
                                                        <span className="dial-code">+47</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={968}
                                                        data-country-code="om"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag om" />
                                                        </div>
                                                        <span className="country-name">Oman (‫عُمان‬‎)</span>
                                                        <span className="dial-code">+968</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={92}
                                                        data-country-code="pk"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag pk" />
                                                        </div>
                                                        <span className="country-name">
                                                            Pakistan (‫پاکستان‬‎)
                                                        </span>
                                                        <span className="dial-code">+92</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={680}
                                                        data-country-code="pw"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag pw" />
                                                        </div>
                                                        <span className="country-name">Palau</span>
                                                        <span className="dial-code">+680</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={970}
                                                        data-country-code="ps"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ps" />
                                                        </div>
                                                        <span className="country-name">
                                                            Palestine (‫فلسطين‬‎)
                                                        </span>
                                                        <span className="dial-code">+970</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={507}
                                                        data-country-code="pa"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag pa" />
                                                        </div>
                                                        <span className="country-name">Panama (Panamá)</span>
                                                        <span className="dial-code">+507</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={675}
                                                        data-country-code="pg"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag pg" />
                                                        </div>
                                                        <span className="country-name">Papua New Guinea</span>
                                                        <span className="dial-code">+675</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={595}
                                                        data-country-code="py"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag py" />
                                                        </div>
                                                        <span className="country-name">Paraguay</span>
                                                        <span className="dial-code">+595</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={51}
                                                        data-country-code="pe"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag pe" />
                                                        </div>
                                                        <span className="country-name">Peru (Perú)</span>
                                                        <span className="dial-code">+51</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={63}
                                                        data-country-code="ph"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ph" />
                                                        </div>
                                                        <span className="country-name">Philippines</span>
                                                        <span className="dial-code">+63</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={48}
                                                        data-country-code="pl"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag pl" />
                                                        </div>
                                                        <span className="country-name">Poland (Polska)</span>
                                                        <span className="dial-code">+48</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={351}
                                                        data-country-code="pt"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag pt" />
                                                        </div>
                                                        <span className="country-name">Portugal</span>
                                                        <span className="dial-code">+351</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1}
                                                        data-country-code="pr"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag pr" />
                                                        </div>
                                                        <span className="country-name">Puerto Rico</span>
                                                        <span className="dial-code">+1</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={974}
                                                        data-country-code="qa"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag qa" />
                                                        </div>
                                                        <span className="country-name">Qatar (‫قطر‬‎)</span>
                                                        <span className="dial-code">+974</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={262}
                                                        data-country-code="re"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag re" />
                                                        </div>
                                                        <span className="country-name">Réunion (La Réunion)</span>
                                                        <span className="dial-code">+262</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={40}
                                                        data-country-code="ro"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ro" />
                                                        </div>
                                                        <span className="country-name">Romania (România)</span>
                                                        <span className="dial-code">+40</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={7}
                                                        data-country-code="ru"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ru" />
                                                        </div>
                                                        <span className="country-name">Russia (Россия)</span>
                                                        <span className="dial-code">+7</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={250}
                                                        data-country-code="rw"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag rw" />
                                                        </div>
                                                        <span className="country-name">Rwanda</span>
                                                        <span className="dial-code">+250</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={590}
                                                        data-country-code="bl"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag bl" />
                                                        </div>
                                                        <span className="country-name">Saint Barthélemy</span>
                                                        <span className="dial-code">+590</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={290}
                                                        data-country-code="sh"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sh" />
                                                        </div>
                                                        <span className="country-name">Saint Helena</span>
                                                        <span className="dial-code">+290</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1869}
                                                        data-country-code="kn"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag kn" />
                                                        </div>
                                                        <span className="country-name">
                                                            Saint Kitts and Nevis
                                                        </span>
                                                        <span className="dial-code">+1869</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1758}
                                                        data-country-code="lc"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag lc" />
                                                        </div>
                                                        <span className="country-name">Saint Lucia</span>
                                                        <span className="dial-code">+1758</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={590}
                                                        data-country-code="mf"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag mf" />
                                                        </div>
                                                        <span className="country-name">
                                                            Saint Martin (Saint-Martin (partie française))
                                                        </span>
                                                        <span className="dial-code">+590</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={508}
                                                        data-country-code="pm"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag pm" />
                                                        </div>
                                                        <span className="country-name">
                                                            Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)
                                                        </span>
                                                        <span className="dial-code">+508</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1784}
                                                        data-country-code="vc"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag vc" />
                                                        </div>
                                                        <span className="country-name">
                                                            Saint Vincent and the Grenadines
                                                        </span>
                                                        <span className="dial-code">+1784</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={685}
                                                        data-country-code="ws"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ws" />
                                                        </div>
                                                        <span className="country-name">Samoa</span>
                                                        <span className="dial-code">+685</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={378}
                                                        data-country-code="sm"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sm" />
                                                        </div>
                                                        <span className="country-name">San Marino</span>
                                                        <span className="dial-code">+378</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={239}
                                                        data-country-code="st"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag st" />
                                                        </div>
                                                        <span className="country-name">
                                                            São Tomé and Príncipe (São Tomé e Príncipe)
                                                        </span>
                                                        <span className="dial-code">+239</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={966}
                                                        data-country-code="sa"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sa" />
                                                        </div>
                                                        <span className="country-name">
                                                            Saudi Arabia (‫المملكة العربية السعودية‬‎)
                                                        </span>
                                                        <span className="dial-code">+966</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={221}
                                                        data-country-code="sn"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sn" />
                                                        </div>
                                                        <span className="country-name">Senegal (Sénégal)</span>
                                                        <span className="dial-code">+221</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={381}
                                                        data-country-code="rs"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag rs" />
                                                        </div>
                                                        <span className="country-name">Serbia (Србија)</span>
                                                        <span className="dial-code">+381</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={248}
                                                        data-country-code="sc"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sc" />
                                                        </div>
                                                        <span className="country-name">Seychelles</span>
                                                        <span className="dial-code">+248</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={232}
                                                        data-country-code="sl"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sl" />
                                                        </div>
                                                        <span className="country-name">Sierra Leone</span>
                                                        <span className="dial-code">+232</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={65}
                                                        data-country-code="sg"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sg" />
                                                        </div>
                                                        <span className="country-name">Singapore</span>
                                                        <span className="dial-code">+65</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1721}
                                                        data-country-code="sx"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sx" />
                                                        </div>
                                                        <span className="country-name">Sint Maarten</span>
                                                        <span className="dial-code">+1721</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={421}
                                                        data-country-code="sk"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sk" />
                                                        </div>
                                                        <span className="country-name">Slovakia (Slovensko)</span>
                                                        <span className="dial-code">+421</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={386}
                                                        data-country-code="si"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag si" />
                                                        </div>
                                                        <span className="country-name">Slovenia (Slovenija)</span>
                                                        <span className="dial-code">+386</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={677}
                                                        data-country-code="sb"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sb" />
                                                        </div>
                                                        <span className="country-name">Solomon Islands</span>
                                                        <span className="dial-code">+677</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={252}
                                                        data-country-code="so"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag so" />
                                                        </div>
                                                        <span className="country-name">Somalia (Soomaaliya)</span>
                                                        <span className="dial-code">+252</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={27}
                                                        data-country-code="za"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag za" />
                                                        </div>
                                                        <span className="country-name">South Africa</span>
                                                        <span className="dial-code">+27</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={82}
                                                        data-country-code="kr"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag kr" />
                                                        </div>
                                                        <span className="country-name">
                                                            South Korea (대한민국)
                                                        </span>
                                                        <span className="dial-code">+82</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={211}
                                                        data-country-code="ss"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ss" />
                                                        </div>
                                                        <span className="country-name">
                                                            South Sudan (‫جنوب السودان‬‎)
                                                        </span>
                                                        <span className="dial-code">+211</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={34}
                                                        data-country-code="es"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag es" />
                                                        </div>
                                                        <span className="country-name">Spain (España)</span>
                                                        <span className="dial-code">+34</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={94}
                                                        data-country-code="lk"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag lk" />
                                                        </div>
                                                        <span className="country-name">
                                                            Sri Lanka (ශ්‍රී ලංකාව)
                                                        </span>
                                                        <span className="dial-code">+94</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={249}
                                                        data-country-code="sd"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sd" />
                                                        </div>
                                                        <span className="country-name">Sudan (‫السودان‬‎)</span>
                                                        <span className="dial-code">+249</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={597}
                                                        data-country-code="sr"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sr" />
                                                        </div>
                                                        <span className="country-name">Suriname</span>
                                                        <span className="dial-code">+597</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={47}
                                                        data-country-code="sj"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sj" />
                                                        </div>
                                                        <span className="country-name">
                                                            Svalbard and Jan Mayen
                                                        </span>
                                                        <span className="dial-code">+47</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={268}
                                                        data-country-code="sz"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sz" />
                                                        </div>
                                                        <span className="country-name">Swaziland</span>
                                                        <span className="dial-code">+268</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={46}
                                                        data-country-code="se"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag se" />
                                                        </div>
                                                        <span className="country-name">Sweden (Sverige)</span>
                                                        <span className="dial-code">+46</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={41}
                                                        data-country-code="ch"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ch" />
                                                        </div>
                                                        <span className="country-name">
                                                            Switzerland (Schweiz)
                                                        </span>
                                                        <span className="dial-code">+41</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={963}
                                                        data-country-code="sy"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag sy" />
                                                        </div>
                                                        <span className="country-name">Syria (‫سوريا‬‎)</span>
                                                        <span className="dial-code">+963</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={886}
                                                        data-country-code="tw"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag tw" />
                                                        </div>
                                                        <span className="country-name">Taiwan (台灣)</span>
                                                        <span className="dial-code">+886</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={992}
                                                        data-country-code="tj"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag tj" />
                                                        </div>
                                                        <span className="country-name">Tajikistan</span>
                                                        <span className="dial-code">+992</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={255}
                                                        data-country-code="tz"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag tz" />
                                                        </div>
                                                        <span className="country-name">Tanzania</span>
                                                        <span className="dial-code">+255</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={66}
                                                        data-country-code="th"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag th" />
                                                        </div>
                                                        <span className="country-name">Thailand (ไทย)</span>
                                                        <span className="dial-code">+66</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={670}
                                                        data-country-code="tl"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag tl" />
                                                        </div>
                                                        <span className="country-name">Timor-Leste</span>
                                                        <span className="dial-code">+670</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={228}
                                                        data-country-code="tg"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag tg" />
                                                        </div>
                                                        <span className="country-name">Togo</span>
                                                        <span className="dial-code">+228</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={690}
                                                        data-country-code="tk"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag tk" />
                                                        </div>
                                                        <span className="country-name">Tokelau</span>
                                                        <span className="dial-code">+690</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={676}
                                                        data-country-code="to"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag to" />
                                                        </div>
                                                        <span className="country-name">Tonga</span>
                                                        <span className="dial-code">+676</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1868}
                                                        data-country-code="tt"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag tt" />
                                                        </div>
                                                        <span className="country-name">Trinidad and Tobago</span>
                                                        <span className="dial-code">+1868</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={216}
                                                        data-country-code="tn"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag tn" />
                                                        </div>
                                                        <span className="country-name">Tunisia (‫تونس‬‎)</span>
                                                        <span className="dial-code">+216</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={90}
                                                        data-country-code="tr"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag tr" />
                                                        </div>
                                                        <span className="country-name">Turkey (Türkiye)</span>
                                                        <span className="dial-code">+90</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={993}
                                                        data-country-code="tm"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag tm" />
                                                        </div>
                                                        <span className="country-name">Turkmenistan</span>
                                                        <span className="dial-code">+993</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1649}
                                                        data-country-code="tc"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag tc" />
                                                        </div>
                                                        <span className="country-name">
                                                            Turks and Caicos Islands
                                                        </span>
                                                        <span className="dial-code">+1649</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={688}
                                                        data-country-code="tv"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag tv" />
                                                        </div>
                                                        <span className="country-name">Tuvalu</span>
                                                        <span className="dial-code">+688</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1340}
                                                        data-country-code="vi"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag vi" />
                                                        </div>
                                                        <span className="country-name">U.S. Virgin Islands</span>
                                                        <span className="dial-code">+1340</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={256}
                                                        data-country-code="ug"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ug" />
                                                        </div>
                                                        <span className="country-name">Uganda</span>
                                                        <span className="dial-code">+256</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={380}
                                                        data-country-code="ua"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ua" />
                                                        </div>
                                                        <span className="country-name">Ukraine (Україна)</span>
                                                        <span className="dial-code">+380</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={971}
                                                        data-country-code="ae"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ae" />
                                                        </div>
                                                        <span className="country-name">
                                                            United Arab Emirates (‫الإمارات العربية المتحدة‬‎)
                                                        </span>
                                                        <span className="dial-code">+971</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={44}
                                                        data-country-code="gb"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag gb" />
                                                        </div>
                                                        <span className="country-name">United Kingdom</span>
                                                        <span className="dial-code">+44</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={1}
                                                        data-country-code="us"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag us" />
                                                        </div>
                                                        <span className="country-name">United States</span>
                                                        <span className="dial-code">+1</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={598}
                                                        data-country-code="uy"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag uy" />
                                                        </div>
                                                        <span className="country-name">Uruguay</span>
                                                        <span className="dial-code">+598</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={998}
                                                        data-country-code="uz"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag uz" />
                                                        </div>
                                                        <span className="country-name">
                                                            Uzbekistan (Oʻzbekiston)
                                                        </span>
                                                        <span className="dial-code">+998</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={678}
                                                        data-country-code="vu"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag vu" />
                                                        </div>
                                                        <span className="country-name">Vanuatu</span>
                                                        <span className="dial-code">+678</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={39}
                                                        data-country-code="va"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag va" />
                                                        </div>
                                                        <span className="country-name">
                                                            Vatican City (Città del Vaticano)
                                                        </span>
                                                        <span className="dial-code">+39</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={58}
                                                        data-country-code="ve"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ve" />
                                                        </div>
                                                        <span className="country-name">Venezuela</span>
                                                        <span className="dial-code">+58</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={84}
                                                        data-country-code="vn"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag vn" />
                                                        </div>
                                                        <span className="country-name">Vietnam (Việt Nam)</span>
                                                        <span className="dial-code">+84</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={681}
                                                        data-country-code="wf"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag wf" />
                                                        </div>
                                                        <span className="country-name">
                                                            Wallis and Futuna (Wallis-et-Futuna)
                                                        </span>
                                                        <span className="dial-code">+681</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={212}
                                                        data-country-code="eh"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag eh" />
                                                        </div>
                                                        <span className="country-name">
                                                            Western Sahara (‫الصحراء الغربية‬‎)
                                                        </span>
                                                        <span className="dial-code">+212</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={967}
                                                        data-country-code="ye"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ye" />
                                                        </div>
                                                        <span className="country-name">Yemen (‫اليمن‬‎)</span>
                                                        <span className="dial-code">+967</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={260}
                                                        data-country-code="zm"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag zm" />
                                                        </div>
                                                        <span className="country-name">Zambia</span>
                                                        <span className="dial-code">+260</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={263}
                                                        data-country-code="zw"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag zw" />
                                                        </div>
                                                        <span className="country-name">Zimbabwe</span>
                                                        <span className="dial-code">+263</span>
                                                    </li>
                                                    <li
                                                        className="country"
                                                        data-dial-code={358}
                                                        data-country-code="ax"
                                                    >
                                                        <div className="flag-box">
                                                            <div className="iti-flag ax" />
                                                        </div>
                                                        <span className="country-name">Åland Islands</span>
                                                        <span className="dial-code">+358</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <input
                                                id="phone"
                                                name="phone_dummy"
                                                type="text"
                                                required=""
                                                autoComplete="off"
                                                placeholder="(201) 555-0123"
                                            />
                                        </div>
                                        <input
                                            type="hidden"
                                            name="phone"
                                            id="phone_newsletter"
                                            defaultValue=""
                                        />
                                        <input
                                            type="hidden"
                                            name="url"
                                            id="url"
                                            defaultValue="https://www.blockchainappfactory.com/contact"
                                        />
                                        <input type="hidden" defaultValue="202.47.39.79" name="IP" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="skype">Your Skype ID</label>
                                        <input
                                            type="text"
                                            className="form-control input-style-2"
                                            id="skype"
                                            name="skype"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group text-center">
                                        <a
                                            href="https://join.skype.com/invite/c0fHGB5VrAXm"
                                            target="_blank"
                                            className="home-talk-experts space-right"
                                            style={{borderRadius: 30}}
                                        >
                                            Connect with Skype
                                        </a>{" "}
                                        <span className="or">(OR)</span>
                                        <a
                                            href="https://api.whatsapp.com/send?l=en&text=Hi!%20I%27m%20interested%20in%20one%20of%20your%20products%20at%20BLOCKCHAIN%20APP%20FACTORY&phone=916382665366"
                                            className="home-talk-experts space-right"
                                            style={{borderRadius: 30}}
                                        >
                                            Connect with Whatsapp
                                        </a>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            className="form-control input-style-2"
                                            id="message"
                                            name="message"
                                            placeholder="Enter your message.."
                                            required=""
                                            rows={3}
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <div
                                            className="g-recaptcha"
                                            data-sitekey="6LdmU-coAAAAANsYjKfjqRl9xG1NTV4f2aVzlthf"
                                        >
                                            <div style={{ width: 304, height: 78 }}>
                                                <div>
                                                    <iframe
                                                        title="reCAPTCHA"
                                                        width={304}
                                                        height={78}
                                                        role="presentation"
                                                        name="a-lpmdcgjq0cx"
                                                        frameBorder={0}
                                                        scrolling="no"
                                                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdmU-coAAAAANsYjKfjqRl9xG1NTV4f2aVzlthf&co=aHR0cHM6Ly93d3cuYmxvY2tjaGFpbmFwcGZhY3RvcnkuY29tOjQ0Mw..&hl=en&v=-QbJqHfGOUB8nuVRLvzFLVed&size=normal&cb=3svsbr1a4m4m"
                                                    />
                                                </div>
                                                <textarea
                                                    id="g-recaptcha-response"
                                                    name="g-recaptcha-response"
                                                    className="g-recaptcha-response"
                                                    style={{
                                                        width: 250,
                                                        height: 40,
                                                        border: "1px solid rgb(193, 193, 193)",
                                                        margin: "10px 25px",
                                                        padding: 0,
                                                        resize: "none",
                                                        display: "none"
                                                    }}
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <iframe style={{ display: "none" }} />
                                        </div>
                                        <button type="button" className="common_send_btn pull-right">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div className="row">
                                    <div className="col-md-12 col-xs-12">
                                        <h3 className="section-title underline text-left">
                                            Schedule A Meeting
                                        </h3>
                                        <div>
                                            <div
                                                className="calendly-inline-widget"
                                                data-url="https://calendly.com/blockchainappfactory?&hide_gdpr_banner=1"
                                                style={{ position: "relative", minWidth: 320, height: 360 }}
                                                data-processed="true"
                                            >
                                                <div className="calendly-spinner">
                                                    <div className="calendly-bounce1" />
                                                    <div className="calendly-bounce2" />
                                                    <div className="calendly-bounce3" />
                                                </div>
                                                <iframe
                                                    src="https://calendly.com/blockchainappfactory?embed_domain=www.blockchainappfactory.com&embed_type=Inline&=undefined&hide_gdpr_banner=1"
                                                    width="100%"
                                                    height="100%"
                                                    frameBorder={0}
                                                    title="Select a Date & Time - Calendly"
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                        <h3 className="section-title underline">Let's Talk Business!</h3>
                                        <p style={{ marginBottom: 10 }}>
                                            <a href="mailto:info@blockchainappfactory.com">
                                                <img
                                                    src="./assets/images/mail.webp"
                                                    width={25}
                                                    height="auto"
                                                    className="image-responsive right_mar"
                                                />{" "}
                                                info@blockchainappfactory.com
                                            </a>
                                        </p>
                                        <p style={{ marginBottom: 10 }}>
                                            <a href="tel:+916382665366">
                                                <img
                                                    src="./assets/images/in-flag.webp"
                                                    width={25}
                                                    height="auto"
                                                    className="image-responsive right_mar"
                                                />{" "}
                                                +91 63826 65366
                                            </a>
                                        </p>
                                        <p style={{ marginBottom: 10 }}>
                                            {" "}
                                            <a
                                                href="https://join.skype.com/invite/c0fHGB5VrAXm"
                                                target="_blank"
                                            >
                                                <img
                                                    src="./assets/images/skype.webp"
                                                    width={25}
                                                    height="auto"
                                                    className="image-responsive right_mar"
                                                />{" "}
                                                Skype
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default ContactUs