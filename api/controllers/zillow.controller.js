import axios from 'axios';

export const getZillowData = async (req, res) => {
    //console.log('getZillowData controller has been accessed');
    // const options = {
    //     method: 'GET',
    //     url: 'https://zillow-com1.p.rapidapi.com/searchByUrl',
    //     params: {
    //         url: 'https://www.zillow.com/dunwoody-ga-30360/?searchQueryState=%7B%22pagination%22%3A%7B%7D%2C%22usersSearchTerm%22%3A%2230360%22%2C%22mapBounds%22%3A%7B%22west%22%3A-84.36232590551758%2C%22east%22%3A-84.16148209448242%2C%22south%22%3A33.89577159630012%2C%22north%22%3A33.96670114674591%7D%2C%22regionSelection%22%3A%5B%7B%22regionId%22%3A71076%2C%22regionType%22%3A7%7D%5D%2C%22isMapVisible%22%3Atrue%2C%22filterState%22%3A%7B%22price%22%3A%7B%22min%22%3A100000%7D%2C%22mp%22%3A%7B%22min%22%3A512%7D%2C%22sort%22%3A%7B%22value%22%3A%22globalrelevanceex%22%7D%2C%22ah%22%3A%7B%22value%22%3Atrue%7D%7D%2C%22isListVisible%22%3Atrue%2C%22mapZoom%22%3A13%7D'
    //     },
    //     headers: {
    //         'x-rapidapi-key': 'a54aa1c9bcmshfb5648c66fca39bp1d3bbajsna886380d78c2',
    //         'x-rapidapi-host': 'zillow-com1.p.rapidapi.com'
    //     }
    // };

    const options = {
        method: 'GET',
        url: 'https://zillow-com1.p.rapidapi.com/propertyByCoordinates',
        params: {
            long: '-118.504744',
            lat: '34.01822',
            d: '0.1',
            includeSold: 'true'
        },
        headers: {
            'x-rapidapi-key': 'a54aa1c9bcmshfb5648c66fca39bp1d3bbajsna886380d78c2',
            'x-rapidapi-host': 'zillow-com1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const zillowData = response.data;
        //const listings = zillowData.props;
        //console.log('Received response from Zillow API:', JSON.stringify(zillowData, null, 3));

        res.status(200).json({
            message: 'Fetched Zillow data successfully',
            data: zillowData,
        });
        //onsole.log('Response sent to client');
    } catch (error) {
        console.error('Error fetching Zillow data:', error);
        res.status(500).json({ error: 'Failed to fetch Zillow data' });
    }

};


// import axios from 'axios';
// import DOMPurify from 'dompurify';
// import { JSDOM } from 'jsdom';
// import { RateLimit } from 'async-sema';

// // Setup DOMPurify with JSDOM for server-side use
// const window = new JSDOM('').window;
// const purify = DOMPurify(window);

// // Setup rate limiter: 1 request per second
// const rateLimit = RateLimit(1); // Adjust the rate as per your requirements

// export const getZillowData = async (req, res) => {
//     const zpid = req.params.id; // Assuming this is the zpid from Zillow

//     const options = {
//         method: 'GET',
//         url: 'https://zillow-com1.p.rapidapi.com/property',
//         params: { zpid },
//         headers: {
//             'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY',
//             'x-rapidapi-host': 'zillow-com1.p.rapidapi.com',
//         },
//     };

//     try {
//         // Apply rate limit before making the request
//         await rateLimit();

//         const response = await axios.request(options);
//         const zillowData = response.data;
//         const listings = zillowData.props;

//         console.log('Received response from Zillow API:', JSON.stringify(zillowData, null, 2));

//         // Function to validate image URLs
//         const validateImageUrl = (url) => {
//             const pattern = /^https?:\/\/.*\.(jpeg|jpg|gif|png)$/;
//             return pattern.test(url);
//         };

//         // Sanitize and validate listings
//         const sanitizedListings = listings.map((listing) => ({
//             id: listing.zpid,
//             title: `Home for Sale in ${listing.city}`,
//             description: purify.sanitize(listing.description || ''),
//             img: validateImageUrl(listing.imgSrc) ? listing.imgSrc : 'default_image_url',
//             bedroom: listing.bedrooms,
//             bathroom: listing.bathrooms,
//             price: listing.price,
//             address: `${listing.streetAddress}, ${listing.city}, ${listing.state} ${listing.zipcode}`,
//             latitude: listing.latitude,
//             longitude: listing.longitude,
//             images: [validateImageUrl(listing.imgSrc) ? listing.imgSrc : 'default_image_url'],
//         }));

//         res.status(200).json({
//             message: 'Fetched Zillow data successfully',
//             data: sanitizedListings,
//         });
//     } catch (error) {
//         console.error('Error fetching Zillow data:', error);
//         res.status(500).json({ error: 'Failed to fetch Zillow data' });
//     }
// };




