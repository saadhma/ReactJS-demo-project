import React from 'react';
import './PrivacyPolicyScreen.css';
import { HeaderComponent } from '../../../components/Header';
import FooterComponent from '../../../components/Footer/Footer';

export default function PrivacyPolicyScreen() {
    return (
        <div>
            <HeaderComponent />
            <div className='parent-div-style'>
                <h2 className='text-style'> Privacy Policy </h2>
                <p className='paragraph-style'>
                    Effective Date: December 31, 2019</p>
                <p className='paragraph-style'> When using any of our products or interacting with themoviedb.org which is owned and operated by TiVo Corporation, TiVo Platform Technologies LLC, TiVo Solutions, Inc., or Rovi Corporation or any of our subsidiaries that link to this Privacy Policy (collectively, “TMDB,” “we,” “our”, or “us”) that do not have a separate privacy policy, you consent to the collection, transfer, storage, processing, disclosure and use of your information as described in this Privacy Policy.
                    This includes any information you choose to provide that is deemed sensitive under applicable law.
                    If you do not agree with the terms of this Privacy Policy, you should not use TMDB products (a TMDB account or API access), or access or interact with any other aspect of TMDB’s business.
                </p>
                <p className='paragraph-style'>
                    We collect and process data that we use to provide you with TMDB products, notify you of changes to our policies or products, identify or troubleshoot issues, conduct surveys, improve the products we provide to you, market and advertise our products including providing advertising to you, and otherwise operate our business.
                    Your rights to your personal data and its collection and use are outlined in this policy.
                </p>
                <p className='paragraph-style'> If you have a disability and need this policy provided to you in a different format please email
                    <a href='/SignUp' className='txt' > privacy@tivo.com</a>.
                </p>
                <h4 className='text-style'> Exceptions: </h4>
                <h4 className='text-style'> Third Parties </h4>
                <p className='paragraph-style'>This Privacy Policy does not apply to any third-party applications or software that integrate with TMDB products, or any other third-party products, services, or businesses.
                </p>
                <p className='paragraph-style'>
                    BY ACCEPTING THE PRIVACY POLICY, YOU EXPRESSLY AUTHORIZE TMDB TO USE AND SHARE WITH OTHER AFFILIATES OF TIVO CORPORATION, AS WELL AS CERTAIN TRUSTED BUSINESS PARTNERS AND SERVICE PROVIDERS, WHICH MAY BE LOCATED OUTSIDE OF THE COUNTRY OF YOUR RESIDENCE (INCLUDING COUNTRIES WHICH DO NOT PROVIDE THE SAME LEVEL OF PROTECTION FOR THE PROCESSING OF PERSONAL DATA AS THE COUNTRY OF YOUR RESIDENCE), THE INFORMATION PROVIDED BY YOU TO TMDB, YOU ACKNOWLEDGE AND AGREE TO THE IMPORTANCE OF SHARING SUCH INFORMATION FOR THE PROVISION OF THE TMDB PRODUCTS.
                    THIS CONSENT IS GIVEN FOR THE DURATION OF YOUR RELATIONSHIP WITH TMDB.
                </p>
                <h4 className='text-style'> Information We Collect Automatically </h4>
                <p className='paragraph-style'>
                    The following information was collected automatically, including in the last 12 months:
                </p>
                <h4 className='text-style'> TMDB Products and Your Data </h4>
                <p className='paragraph-style'>
                    When you use or interact with TMDB products, we may use a variety of technologies that collect information about how the product(s) is accessed and used.
                    This information may include:
                </p>
                <ul>
                    <li>
                        your interactions with TMDB products (such as what you post, view, upload, download, rate and interact with content);
                    </li>
                    <li>
                        TMDB API usage data;
                    </li>
                    <li>
                        location data (such as GPS data, zip code, and time zone);
                    </li>
                    <li>
                        personal information that may indirectly identify you (such as URL information, cookie data, and your IP address or MAC address);
                    </li>
                    <li>
                        data that may not directly identify you but is collected as you use our products, which may include network connection type and provider, and information related to searches on TMDB; and
                    </li>
                    <li>
                        functional data such as API registration and use data.
                    </li>
                </ul>
                <h4 className='text-style'> TMDB Account Data </h4>
                <p className='paragraph-style'>
                    When you sign up for a TMDB account, you create a user profile that must include the following information: your email address.
                    You may have also provided the following information: your name, street address, city, state, zip code, email address(s), phone number(s) including mobile, gender and demographic information, social media profiles and information. We may share this information with third parties as necessary for the purposes of monitoring and enforcement.
                    We may also provide this information to service providers as necessary to provide you with TMDB Products.
                </p>
                <h4 className='text-style'> TMDB Product Data </h4>
                <p className='paragraph-style'>
                    When you activate a TMDB account, we will also process and store your IP and MAC addresses for which allow us to send information to your device and provide you with TMDB Products.
                    This information may be provided to service providers to provide you with TMDB Products.
                </p>
                <h4 className='text-style'> Third-Party Application Data </h4>
                <p className='paragraph-style'>
                    You may integrate your TMDB account with certain third-party applications, social media sites, websites, and services (“Third-Party Applications”).
                    These Third-Party Applications may have their own terms and conditions of use and privacy policies and your use of these Third-Party Applications will be governed by and subject to such terms and conditions and privacy policies.
                    In order to enable this functionality, you will be prompted to allow such Third-Party Applications to connect with your TMDB Product or account. Once you have enabled this functionality, TMDB will collect, process, and share data with the Third-Party Application that you have authorized.
                    If you enable your TMDB account with any Third-Party Applications, we may receive information related to your interactions with TMDB products through the Third-Party Application, as well as information about your publicly available activity on the Third-Party Application or information you have consented for the Third-Party Application to share with TMDB.
                    If you wish to stop the collection or sharing of information with the specific Third-Party Application you have authorized, you need to disable the feature or cancel your applicable subscription or manage your account for the Third-Party Application.
                    TMDB does not endorse and is not responsible or liable for the behavior, features, or content of any Third-Party Application or for any transaction you may enter into with the provider of any such Third-Party Applications.
                </p>
                <p className='paragraph-style'>
                    Information we collect from your account on a Third-Party Application with your consent may include data about you and your friends from that service (such as what you or they have liked or shared). We may use cookies and other technologies to collect this information; you can learn more about such use in the Cookies and Similar Technologies section of this Privacy Policy.
                </p>
                <h4 className='text-style'> Functional Data </h4>
                <p className='paragraph-style'>
                    Certain categories of data collected by TMDB are necessary for your TMDB product to perform its functions and you will not be able to opt out from this data collection, sharing and/or processing and continue to receive the TMDB Products.
                    Data falling into these categories is referred to as “Functional Data” and includes personal data.
                </p>
                <h4 className='text-style'> TMDB Mobile Applications </h4>
                <p className='paragraph-style'>
                    If you use our products from a mobile device, we may collect, either through your mobile device or the application itself, your mobile device identifier, hardware model, operating system version or mobile network information (as well as any registration data you provide to us). We may also collect geolocation information, which may be used for operational and product-related purposes, such as to customize information based on your location.
                </p>
                <h4 className='text-style'> Customer Support Correspondence </h4>
                <p className='paragraph-style'>
                    Except as provided herein, when you contact (including, but not limited to, email, or social media channels) our customer support team, we will collect and store the contact information you give them, information about your use of TMDB products. We will also store the communications you have with the customer support team and any information in those communications in order to provide support and improve the products.
                </p>
                <h4 className='text-style'> Service Providers and Partners </h4>
                <p className='paragraph-style'>
                    We may also receive information about you from our service providers and partners, which we use to personalize your experience with the use of TMDB products.
                </p>
                <h4 className='text-style'> User Forums </h4>
                <p className='paragraph-style'>
                    You may be able to post information (including profile information, unless you designate it as public or as private; as applicable) on areas of a TMDB product that may be viewed by other users or the public. By posting information to areas that may be viewed by other users or the public, you consent to TMDB making that information public. We may display this content on any of the TMDB products and further distribute it to a wider audience through third-party sites or applications.
                </p>
                <p className='paragraph-style'>
                    Please note that there are risks, including but not limited to the risk of physical harm, of dealing with strangers, including persons who may be acting under false pretenses. Please choose carefully the information you post on any of the TMDB products and that you give to other TMDB users. You are discouraged from publicly posting your full name, telephone numbers, street addresses or other information that identifies you or allows strangers to find you or steal your identity. Despite this prohibition, other people’s information may be offensive, harmful or inaccurate, and in some cases may be mislabeled or deceptively labeled.
                </p>
                <p className='paragraph-style'>
                    YOU ASSUME ALL RISKS ASSOCIATED WITH INTERACTING WITH OTHER USERS WITH WHOM YOU COME IN CONTACT THROUGH TMDBPROPERTIES. WE EXPECT THAT YOU WILL USE CAUTION AND COMMON SENSE WHEN USING TMDB’S PRODUCTS.
                </p>
                <h4 className='text-style'> How We Use the Information We Collect </h4>
                <p className='paragraph-style'>
                    Consistent with the permissions you give us to collect the information, we may use the information we collect, including your personal information in the following ways including in the past 12 months:
                </p>
                <ul>
                    <li>
                        to provide you with access to the TMDB products;
                    </li>
                    <li>
                        to analyze your usage of TMDB product features;
                    </li>
                    <li>
                        to help ensure technical functionality of the TMDB products, develop new products;
                    </li>
                    <li>
                        to communicate with you for TMDB product or research purposes including via emails, notifications, or other messages, which you agree to receive;
                    </li>
                    <li>
                        to enforce this Privacy Policy, terms of service related to a TMDB product that you are utilizing (including, but not limited to, the TMDB User Agreement), and any other terms that you have agreed to, including to protect the rights, property or safety of TMDB and its affiliates, its users, or any other person, or the copyright-protected content of, or on, a TMDB product; and                    </li>
                    <li>
                        as otherwise stated in this Privacy Policy.
                    </li>
                </ul>
                <h4 className='text-style'> How We Share Your Information </h4>
                <p className='paragraph-style'>
                    TMDB shares your information in the following ways including for the last 12 months:
                </p>
                <h4 className='text-style'> User Consent or Direction </h4>
                <p className='paragraph-style'>
                    We may share or disclose your information at your direction, such as when you authorize a Third-Party Application to access your account.
                    Based on your permissions, information can be shared with Third Party Applications and with others through Third-Party Applications.
                    If you connect your TMDB account to a Third-Party Application, TMDB may automatically share your activity and actions-relation to a TMDB product with that Third-Party Application, including the content you view.
                </p>
                <p className='paragraph-style'>
                    You understand and agree that a Third-Party Application’s use of information collected from you (or as authorized by you) is governed by the Third-Party Application’s privacy policy and your settings on the Third-Party Application’s service, and TMDB’s use of such information is governed by this Privacy Policy and your TMDB account settings.
                </p>
                <h4 className='text-style'> Service Providers and Third Parties </h4>
                <p className='paragraph-style'>
                    We engage service providers to perform functions and provide services to us in the United States and other countries. We use a variety of service providers to help TMDB provide its products and to help us understand and improve the use of TMDB products. We may share your personal information with such service providers subject to obligations consistent with this Privacy Policy and applicable law.
                </p>
                <h4 className='text-style'> Law and Harm </h4>
                <p className='paragraph-style'>
                    Notwithstanding anything to the contrary in this Privacy Policy, we may preserve or disclose your information if we believe that it is reasonably necessary to comply with a law, regulation, legal process, or governmental request; to protect the safety of any person; to address fraud, security or technical issues; or to protect our or our users’ rights or property (where permitted by law). This includes exchanging information with other companies and organizations for fraud protection. The foregoing notwithstanding, nothing in this Privacy Policy is intended to limit any legal defenses or objection that you may be entitled to raise to a third party’s, including a government’s, request to disclose your information.
                </p>
                <h4 className='text-style'> Business Transfers and Affiliates </h4>
                <p className='paragraph-style'>
                    In the event that we are involved in a bankruptcy, merger, acquisition, reorganization or sale of assets, your information may be sold or transferred as part of that transaction. We may also disclose information about you to our corporate affiliates in order to help provide, understand, and improve our and our affiliates’ products.
                </p>
                <h4 className='text-style'> How to Access, Update and Manage Your Information </h4>
                <p className='paragraph-style'>
                    If you are a registered user of TMDB products, we provide you with tools and account settings to access, correct, delete, or modify the information you provided to us and associated with your account. You can access, update, and correct or delete inaccuracies by logging into your account for the particular TMDB product.
                </p>
                <p className='paragraph-style'>
                    CERTAIN CATEGORIES OF THE DATA THAT WE COLLECT, REFERRED TO AS FUNCTIONAL DATA, ARE NECESSARY FOR YOUR TMDB PRODUCT TO PERFORM ITS BASIC FUNCTIONS SECURELY AND YOU WILL NOT BE ABLE TO OPT OUT OF THE COLLECTION OF THIS FUNCTIONAL DATA AND ITS USE TO PROVIDE PRODUCT FUNCTIONALITY.
                </p>
                <p className='paragraph-style'>
                    If you have questions about your privacy on TMDB products, this privacy policy, or information we have about you, please contact us at
                    <a href='/SignUp' className='txt' > privacy@tivo.com</a>.
                    You can also contact our privacy representative by sending a letter to TMDB, Attn: Privacy Officer, Legal Department, 2160 Gold Street, San Jose, CA 95002, United States. We will respond to your request in a reasonable period of time upon verification of your identity.
                    We recommend you include documents that prove your identity and a clear and precise description of the information which you request access.
                </p>
                <p className='paragraph-style'>
                    Specific Information for various products or offered services:
                </p>
                <h4 className='text-style'> Marketing Emails </h4>
                <p className='paragraph-style'>
                    If you do not want to receive marketing emails from us, you can change your email preferences by clicking on the included “unsubscribe” link (though you will still receive certain account-related emails).
                    We will send you marketing emails only where we are permitted to do so by applicable law.
                </p>
                <h4 className='text-style'> CCPA Personal Data </h4>
                <p className='paragraph-style'>
                    California Consumers have the right under the California Consumer Privacy Act “CCPA” to the Right to Know your data, this includes both a list of all the classes of data we have on you as well as individual attributes.
                    You have the right to delete your personal data, the right to opt out of sale of your data and you have the right to not be discriminated against for exercising any of these rights. Here at TMDB we feel strongly that you will not experience any discrimination for your exercising your rights and we will never treat you differently for changing your privacy settings.
                </p>
                <h4 className='text-style'> A Note about the Sale of Data </h4>
                <p className='paragraph-style'>
                    Here at TMDB, we don’t sell your personal data to third parties. We do however share your personal data with service providers who help us run our business and provide you with products.
                </p>
                <h4 className='text-style'> Your Right to Know </h4>
                <p className='paragraph-style'>
                    TMDB collects a variety of personal data and uses this data to provide you with products.
                </p>
                <p className='paragraph-style'>
                    TMDB collects the below-listed types of personal data of its consumers when you initiate your TMDB account, update your account information, interface with us at trade shows or other marketing events, during the course of your time as a consumer, when you are interested in products, and when using the products.
                    TMDB sends this data to the following types of service providers – data analytics companies to help us understand our data and our customers, software tools that help us view and use customer data, service support companies to help us provide excellent customer service, data storage companies who securely store and manage your data on our behalf.
                    We send this data to service providers who are contractually obligated to use this data only for the purposes outlined in our commercial agreements.
                </p>
                <ul>
                    <li>
                        Identifiers
                    </li>
                    <li>
                        Information in Customer Records
                    </li>
                    <li>
                        Demographic Information
                    </li>
                    <li>
                        Internet or Network Activity
                    </li>
                    <li>
                        Inferences from Above Used to Profile – including your TMDB account history.
                    </li>
                    <li>
                        Geolocation Data
                    </li>
                </ul>
                <h4 className='text-style'> How to Request your Data under the Right to Know </h4>
                <p className='paragraph-style'>
                    If you wish to receive information about what personal data we retain about you, please call customer support at email your request to
                    <a href='/SignUp' className='txt' > privacy@tivo.com </a>
                    with ATTN: TMDB CCPA in the subject line. In the event you would like specific pieces of information provided to you, please specify which information categories you would like provided and we will be happy to assist you.
                    TMDB will provide you with information for the preceding 12 months as required by law.
                </p>
                <h4 className='text-style'> How to Request Deletion of your Data </h4>
                <p className='paragraph-style'>
                    If you wish to have your personal data deleted from TMDB’s records please email your request to
                    <a href='/SignUp' className='txt' > privacy@tivo.com</a>
                    ATTN: TMDB CCPA in the subject line. You have the right to delete your data, however in order to provide you with TMDB products, Functional Data cannot be deleted. Therefore, if you wish to have your personal data deleted from TMDB’s records in its entirety, you will need to no longer have a TMDB account. In any event, certain legal or regulatory requirements may require that some of your data to be retained.
                    If you have questions about the process of requesting deletion, please see the section “Processing Your Right to Know and Deletion Requests” below.
                </p>
                <h4 className='text-style'> Process for Right to Know and Deletion Requests </h4>
                <p className='paragraph-style'>
                    As we will need to verify your identity to fulfill these requests, please send an email and we will attempt to verify your identity via encrypted email.
                    After we are able to verify your identity, we will respond to your request as quickly as possible and generally within 45 days in some cases it may take up to 90 days. You will receive a confirmation by email of either the completion of your request or a return response with your requested data.
                    If we are unable to verify your identity, we will not be able to process your request for information or deletion. If you have issues or concerns, please feel free to contact us. If you are unable to make a request directly (or in the case of death of the consumer), you may legally designate an agent by providing a notarized authorization, power of attorney or other legally binding designation of assignment of rights.
                    Please provide proof of this agency along with your request and we will process your request as quickly as possible.
                </p>
                <h4 className='text-style'> Shine the Light </h4>
                <p className='paragraph-style'>
                    Customers who are residents of California may request information: a list of categories of personal information disclosed by us to third parties during the immediately preceding calendar year for those third parties’ own direct marketing purposes, and (ii) a list of the categories of third parties to whom we disclosed such information.
                    To exercise this request, please contact us at
                    <a href='/SignUp' className='txt' > privacy@tivo.com</a>.
                    Requests must include “TMDB California Shine the Light” in the first line description of the email and include your name, street address, city, state, and zip code.
                    We may require additional information from you to allow us to verify your identity and are only required to respond to requests once in a calendar year.
                </p>
                <h4 className='text-style'> Cookies and Similar Technologies </h4>
                <p className='paragraph-style'>
                    When you visit TMDB websites, we and our advertising partners may store and access information from your device, including using "cookies", clear GIFs (which are also sometimes called web bugs or web beacons) and browser details.
                    We may collect information such as your browser type, the type of operating system you use, the domain name of your Internet service provider, IP address, pages visited on the site, services used and how you have used them. We and our advertising partners do this for a variety of purposes.
                    In the case of our advertising partners, this may include the personalization of advertisements based on your visits to sites in that party’s network.
                </p>
                <p className='paragraph-style'>
                    Please note there is currently no accepted standard to respond to Do Not Track signals and that at least some of the TMDB websites do not currently respond to a web browser’s Do Not Track instructions (i.e., “signal”). More information about Do Not Track can be found
                    <a href='/SignUp' className='txt' > here</a>. Additionally, we may use Google analytics. Google analytics manages ‘Do Not Track’ instructions from your browser in accordance with its own privacy policies
                    <a href='/SignUp' className='txt' > http://www.google.com/intl/en/policies/privacy/</a>.
                </p>
                <p className='paragraph-style'>
                    Another example of how we use cookies might be to track the effectiveness of our marketing and advertising campaigns and to show you TMDB ads on other websites after you have visited our website.
                    Please note: if you continue to use this website, or any other TMDB website, you are consenting to our use of cookies.
                    Information about our use of cookies is contained in our Cookie Policy at
                    <a href='/SignUp' className='txt' > https://www.tivo.com/legal/cookies</a>.
                </p>
                <h4 className='text-style'> Interest-Based Advertising and Analytics </h4>
                <p className='paragraph-style'>
                    We may partner with ad networks and other ad serving providers (“Advertising Providers”) that serve ads on our behalf and others’ on non-affiliated platforms.
                    Some of those ads may be personalized, meaning that they are intended to be relevant to you based on information that Advertising Providers collect about your use of the Site and other sites or apps over time, including information about relationships among different browsers and products.
                    This type of advertising is known as interest-based advertising.
                </p>
                <p className='paragraph-style'>
                    We adhere to the Digital Advertising Alliance ("DAA") Self-Regulatory Principles in connection with this interest-based advertising activity. You may visit
                    <a href='/SignUp' className='txt' > www.aboutads.info </a>
                    to learn more about this type of advertising and how to opt out of this advertising on websites by companies participating in the DAA self-regulatory program. For Canada please visit https://youradchoices.ca. If you delete your cookies or use a different browser or mobile product, you may need to renew your opt-out choices exercised through the DAA tool. Note that electing to opt out will not stop advertising from appearing in your browser or applications.
                    It may make the ads you see less relevant to your interests. Additionally, your browser may offer tools to limit the use of cookies or to delete cookies; however, if you use these tools, our Site may not function as intended.
                </p>
                <p className='paragraph-style'>
                    We may also work with third parties that collect data about your use of the Site and other sites or apps over time for non-advertising purposes. We use Google Analytics and other third-party services to improve the performance of the Site and for analytics and marketing purposes.
                    For more information about how Google Analytics collects and uses data when you use our website, visit
                    <a href='/SignUp' className='txt' > www.google.com/policies/privacy/partners/</a>,
                    and to opt out of Google Analytics, visit
                    <a href='/SignUp' className='txt' > tools.google.com/dlpage/gaoptout/</a>.
                </p>
                <h4 className='text-style'> Transfer to Other Countries </h4>
                <p className='paragraph-style'>
                    TMDB transfers, processes, and stores information about our users on servers located in a number of countries.
                    Accordingly, some of your personal information may be used by us and our affiliates, subsidiaries and our suppliers who may be located in countries outside the country where you are located for the purposes outlined in this policy.
                    The data protection laws in these countries may not offer the same level of protection as those in the country where you are located. Information collected within the European Economic Area (EEA) may, for example, be transferred and processed by third parties, located in a country outside of the EEA, where you may have fewer legal rights in relation to your information. Similarly, information collected within Canada may be transferred and processed by TMDB or third parties in a country outside of Canada.
                    By providing your personal information to us you understand and expressly consent to TMDB and its business associates and suppliers processing your data in any jurisdiction, including without limitation the United States of America, in accordance with this privacy policy.
                </p>
                <p className='paragraph-style'>
                    Individuals in the EEA and Canada and other countries may have certain statutory rights in relation to their personal data.
                    Subject to any exemptions provided by law, you may have the right to request access, seek to update, delete or correct this personal data.
                </p>
                <p className='paragraph-style'>
                    <u>EU-U.S. Privacy Shield</u>
                </p>
                <p className='paragraph-style'>
                    TiVo Solutions Inc. and its subsidiaries comply with the EU-U.S. Privacy Shield Framework as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personal information transferred from the EEA to the United States.
                    To learn more about the Privacy Shield Framework, visit the U.S. Department of Commerce’s Privacy Shield website,
                    <a href='/SignUp' className='txt' > http://privacyshield.gov</a>. To learn more about our participation in the Privacy Shield Framework, please see TiVo’s Privacy Shield Notice.
                </p>
                <p className='paragraph-style'>
                    <u>Data Protection Authority</u>
                </p>
                <p className='paragraph-style'>
                    If you are a resident of the EEA and believe we maintain your personal data within the scope of the General Data Protection Regulation, you may direct questions or complaints to
                    <a href='/SignUp' className='txt' > privacy@tivo.com</a>
                    and direct such questions to TMDB’s Data Controller. Subject to applicable law, you may (i) restrict TMDB’s use of information that is your personal data, and (ii) lodge a complaint with your local data protection authority.
                    If the TMDB data protection officer for EMEA region is unable to help you, we suggest you refer to your local privacy regulator for help.
                    For example, in the UK that would be the information commissioner’s office at:
                    <a href='/SignUp' className='txt' > https://ico.org.uk/</a>.
                </p>
                <h4 className='text-style'> Children </h4>
                <p className='paragraph-style'>
                    The TMDB products are not directed to children under the age of 16 and we do not knowingly collect personally identifiable information or personal data from children under 16.
                    If we learn that we have inadvertently gathered personally identifiable information from a child under 16, we will take reasonable measures to remove that information from our records.
                    If you are a parent of a child under age 16 and become aware that your child has provided personally identifiable information to TMDB, please contact us at
                    <a href='/SignUp' className='txt' > privacy@tivo.com</a>
                    and you may request to exercise your applicable access, rectification, cancellation, and/or objection rights.
                    If you are a California resident under the age of 18 and you wish to remove publicly available content, please contact us at
                    <a href='/SignUp' className='txt' > privacy@tivo.com</a>.
                </p>
                <h4 className='text-style'> How Long We Keep Your Information </h4>
                <p className='paragraph-style'>
                How long we retain your information depends on why we collected it and how we use it. We will not retain your personal information for longer than is necessary for our business purposes or for legal requirements. When no longer required, we will destroy, erase or de-personalize the information. Legal requirements may necessitate that we retain some or all of the personal information we hold for a period of time that is longer than we might otherwise hold it. You may ask that your personal data be deleted (see Deleting your Data above).
                </p>
                <h4 className='text-style'> Security of Your Information </h4>
                <p className='paragraph-style'>
                We use commercially reasonable efforts to safeguard the confidentiality of personal information, including appropriate technological, organizational and physical safeguards. 
                We store personal information in electronic and physical files that are secure, and our security measures include secure on-site and off-site storage. 
                We conduct audits and monitor compliance with our privacy practices.                   
                </p>
                <p className='paragraph-style'>
                However, due to the design of the Internet, ever-changing technology and other factors outside of our control, we cannot guarantee that communications between you and our servers will be free from unauthorized access by third parties or that we will not be subject to security breaches. 
                We will have no liability for disclosure of personal information due to errors in transmission or unauthorized or unlawful acts of third parties.                 
                </p>
                <p className='paragraph-style'>
                You are responsible for the security of your username, ID and password for any of the TMDB products. Please take care when using and storing them.   
                </p>
                <h4 className='text-style'> Changes to the Privacy Policy </h4>
                <p className='paragraph-style'>
                We may update this policy from time to time. 
                We will notify you of any changes by posting the new policy online on this page, and if the changes are significant, we will provide a more prominent notice (including, for certain services, email notification of privacy policy changes). It is your responsibility to read this Privacy Policy carefully and review any changes that may have been made. 
                Because changes will be posted on this page, we encourage you to check this page regularly.  
                </p>
                <h4 className='text-style'> Questions </h4>
                <p className='paragraph-style'>
                If you have any questions about this policy, please send an email to  
                <a href='/SignUp' className='txt' > privacy@tivo.com</a>, 
                or send a letter to TMDB Attn: TMDB Privacy Officer, Legal Department, 2160 Gold Street, San Jose, CA 95002-2160.
                </p>
            </div>
            <FooterComponent />
        </div>
    );
} 