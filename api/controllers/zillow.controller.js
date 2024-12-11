import axios from 'axios';

export const getZillowData = async (req, res) => {
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
        // console.error('Error fetching Zillow data:', error);
        res.status(500).json({ error: 'Failed to fetch Zillow data' });
    }

};

