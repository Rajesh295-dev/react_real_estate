import { defer } from "react-router-dom";
import apiRequest from "./apiRequest"

//adding zillowpage loader
// export const zillowPageLoader = async () => {
//     try {
//         const response = await apiRequest('/zillowData');
//         //console.log('API response data:', response.data);
//         //console.log('API response:', JSON.stringify(response.data, null, 2)); // Log the API response

//         const listings = response.data.data || []; // if property is an array
//         //console.log('Listings:', listings);

//         return Array.isArray(listings) ? listings : [];
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     }
// };



export const singlePageLoader = async ({ request, params }) => {
    const res = await apiRequest("/posts/" + params.id)
    return res.data;
}

export const listPageLoader = async ({ request, params }) => {

    const query = request.url.split("?")[1];
    const postPromise = await apiRequest("/posts?" + query)
    return defer({
        postResponse: postPromise
    })
}

export const profilePageLoader = async () => {
    const postPromise = await apiRequest("/users/profilePosts")
    const chatPromise = await apiRequest("/chats")
    return defer({
        postResponse: postPromise,
        chatResponse: chatPromise,
    })
}



