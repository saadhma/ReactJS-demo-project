import React from 'react';
import './APIOverviewScreen.css';
import FAQ from '../../../components/FAQ/FAQ';
import { HeaderComponent } from '../../../components/Header';
import { Grid } from '@mui/material';
import FooterComponent from '../../../components/Footer/Footer';

export default function APIOverviewScreen() {
    return (
        <div>
            <HeaderComponent />
            <Grid container className='parent-container'>
                <FAQ />
                <Grid item xs={9}>
                    <div className='child-container'>
                        <h2 className='text-style'> API Overview </h2>
                        <p className='paragraph-style'>
                            Our API is available for everyone to use.
                            A TMDB user account is required to request an API key.
                            Professional users are approved on a per application basis.
                            <br></br>
                            <br></br>
                            As always, you must attribute TMDB as the source of your data.
                            Please be sure to read more about this
                            <a href='/' className='txt' > here</a>.
                        </p>
                        <h3 className='text-style'> API Documentation </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            To view all the methods available, you should head over to
                            <a href='/ContactUsScreen' className='txt' > developers.themoviedb.org</a>.
                            Everything outlined on this page is simply a high level overview to help you understand what is available.
                        </p>
                        <h3 className='text-style'> What is TMDB's API? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            The API service is for those of you interested in using our movie, TV show or actor images and/or data in your application.
                            Our API is a system we provide for you and your team to programmatically fetch and use our data and/or images.
                        </p>
                        <h3 className='text-style'> Why would I need an API? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            The API provides a fast, consistent and reliable way to get third party data.
                        </p>
                        <h3 className='text-style'> What is the difference between a commercial API and a developer API? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            A commercial API is for commercial projects and a developer API is for developers.
                            Your project is considered commercial if the primary purpose is to create revenue for the benefit of the owner.
                        </p>
                        <h3 className='text-style'> How do I apply for an API key? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            You can apply for an API key by clicking the "API" link from the left hand sidebar within your account settings page.
                            You need to have a legitimate business name, address, phone number and description to apply for an API key.
                        </p>
                        <h3 className='text-style'> Does the API key cost anything? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Our API is free to use as long as you attribute TMDB as the source of the data and/or images.
                            However, we reserve the right to charge for the commercial API key in the future.
                        </p>
                        <h3 className='text-style'> Is there an SLA? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            We do not currently provide an SLA. However, we make every reasonable attempt to keep our service online and accessible.
                        </p>
                        <h3 className='text-style'> Are there any API wrappers or libraries I can use? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            There sure is! Check them out
                            <a href='/ContactUsScreen' className='txt' > here</a>.
                        </p>
                        <h3 className='text-style'> What about SSL? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            It's currently available API wide. This includes both the API endpoints and assets served via our CDN. We strongly recommend you use SSL.
                        </p>
                        <h3 className='text-style'> Does the API ever change? How can learn about new features? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Yes, it can from time to time. We try our best to post these relevant updates to the official documentation.
                        </p>
                        <h3 className='text-style'> What are the attribution requirements? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            You shall use the TMDB logo to identify your use of the TMDB APIs. You shall place the following notice prominently on your application: "This product uses the TMDB API but is not endorsed or certified by TMDB."
                            Any use of the TMDB logo in your application shall be less prominent than the logo or mark that primarily describes the application and your use of the TMDB logo shall not imply any endorsement by TMDB. When attributing TMDB, the attribution must be within your application's "About" or "Credits" type section.
                            <br></br><br></br>
                            When using a TMDB logo, we require you to use one of our approved logos.
                        </p>
                        <h3 className='text-style'> Can I make changes to the API? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            No, you cannot. Our API is closed source.
                        </p>
                        <h3 className='text-style'> Are there branding requirements? </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Our logo should not be modified in color, aspect ratio, flipped or rotated except where otherwise noted.
                            <br></br><br></br>
                            Our logo can be white, black or any of the approved colors used throughout our branding. For a list of official logos, see our <br></br>
                            <a href='/ContactUsScreen' className='txt' > logos & attribution </a>page.
                            <br></br><br></br>
                            When referring to TMDB, you should use either the acronym "TMDb" or the full name "The Movie Database".
                            Any other name is not acceptable. When linking back to our website, please point your link to "https://www.themoviedb.org/".
                            <br></br><br></br>
                            If you are putting our company name or logo on any merchandise or product packaging please consult us beforehand for approval.
                        </p>
                        <h3 className='text-style'> API Legal Notice </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            We do not claim ownership of any of the images or data in the API.
                            We comply with the Digital Millennium Copyright Act (DMCA) and expeditiously remove infringing content when properly notified. Any data and/or images you upload you expressly grant us a license to use.
                            You are prohibited from using the images and/or data in connection with libelous, defamatory, obscene, pornographic, abusive or otherwise offensive content.
                        </p>
                        <h3 className='text-style'> Finding Data </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            There are 3 ways to search for and find movies, TV shows and people on TMDB. They're outlined below.<br></br><br></br>
                            /search - Text based search is the most common way. You provide a query string and we provide the closest match. Searching by text takes into account all original, translated, alternative names and titles.
                            <br></br><br></br>
                            /discover - Sometimes it useful to search for movies and TV shows based on filters or definable values like ratings, certifications or release dates. The discover method make this easy. For some example queries, and to get an idea about the things you can do with discover,
                            <a href='/ContactUsScreen' className='txt' > take a look here</a>.
                            <br></br><br></br>
                            /find - The last but still very useful way to find data is with existing external IDs. For example, if you know the IMDB ID of a movie, TV show or person, you can plug that value into this method and we'll return anything that matches.
                            This can be very useful when you have an existing tool and are adding our service to the mix.
                        </p>
                        <h3 className='text-style'> General Features </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Top rated movies<br></br>
                            Upcoming movies<br></br>
                            Now playing movies<br></br>
                            Popular movies<br></br>
                            Popular TV shows<br></br>
                            Top rated TV shows<br></br>
                            On the air TV shows<br></br>
                            Airing today TV shows<br></br>
                            Popular people<br></br>
                        </p>
                        <h3 className='text-style'> Account Features </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Get details<br></br>
                            Get lists (created and marked as favourite)<br></br>
                            Get favourite movie list<br></br>
                            Get movie watch list<br></br>
                            Get rated movie list<br></br>
                            Get the account state for a movie (rated, marked as favourite or on watch list)<br></br>
                        </p>
                        <h3 className='text-style'> Account Session Features </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Rate a movie<br></br>
                            Add/remove a movie to your favourites<br></br>
                            Add/remove a movie to your watch list<br></br>
                        </p>
                        <h3 className='text-style'> Guest Session Features (no sign up required) </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Rate a movie<br></br>
                            Get a list of rated movies<br></br>
                        </p>
                        <h3 className='text-style'> Movie Features </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Search: Search for movies with a text query.<br></br>
                            Discover: Search for movies based on data. Movies are queryable by fields like average rating, certifications, release dates and genres.<br></br>
                            Find: Find movies based on an external ID like an IMDB ID.<br></br>
                            Get details<br></br>
                            Primary info<br></br>
                            Alternative titles<br></br>
                            Cast<br></br>
                            Crew<br></br>
                            Images (posters, backdrops)<br></br>
                            Plot keywords<br></br>
                            Release information<br></br>
                            Trailers<br></br>
                            Translations<br></br>
                            Similiar movies<br></br>
                            Reviews<br></br>
                            Belongs to lists<br></br>
                            Changes<br></br>
                        </p>
                        <h3 className='text-style'> TV Features </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Search: Search for TV shows with a text query.<br></br>
                            Discover: Search for TV shows based on data. TV shows are queryable by fields like average rating, air date, TV network and genres.<br></br>
                            Find: Find TV shows based on an external ID like an IMDB ID.<br></br>
                            Get details<br></br>
                            Primary info<br></br>
                            Cast<br></br>
                            Changes<br></br>
                            Crew<br></br>
                            Images (posters, backdrops)<br></br>
                            External IDs<br></br>
                            Translations<br></br>
                        </p>
                        <h3 className='text-style'> TV Season Features </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Get details<br></br>
                            Primary info<br></br>
                            Cast<br></br>
                            Changes<br></br>
                            Crew<br></br>
                            Images (posters, backdrops)<br></br>
                            External IDs<br></br>
                        </p>
                        <h3 className='text-style'> TV Episode Features </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Get details<br></br>
                            Primary info<br></br>
                            Cast<br></br>
                            Changes<br></br>
                            Crew<br></br>
                            Images (posters, backdrops)<br></br>
                            External IDs<br></br>
                        </p>
                        <h3 className='text-style'> Collection Features </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Search<br></br>
                            Get details<br></br>
                            Images (posters, backdrops)<br></br>
                        </p>
                        <h3 className='text-style'> People Features </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Search: Search for people with a text query.<br></br>
                            Find: Find people based on an external ID like an IMDB ID.<br></br>
                            Get details<br></br>
                            Primary info<br></br>
                            Changes<br></br>
                            Credits (movie, TV and combined)<br></br>
                            Images (profile)<br></br>
                            Tagged images<br></br>
                        </p>
                        <h3 className='text-style'> Company Features </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Search<br></br>
                            Get details<br></br>
                            Get movies<br></br>
                        </p>
                        <h3 className='text-style'> List Features </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Search<br></br>
                            List Features<br></br>
                        </p>
                        <h3 className='text-style'> Genre Features </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Get list<br></br>
                            Get movies<br></br>
                        </p>
                        <h3 className='text-style'> Plot Keyword Features </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Search<br></br>
                            Get details<br></br>
                            Get movies<br></br>
                        </p>
                        <h3 className='text-style'> Job Features </h3>
                        <div className='spacer-style'>
                            <div className='line-style' /></div>
                        <div></div>
                        <p className='paragraph-style'>
                            Get list<br></br>
                        </p>
                    </div>
                </Grid>
            </Grid>
            <FooterComponent />
        </div>
    );
}