import { getPost as getMongoPost } from '../controllers/post.controller.js';
import { getZillowData } from '../controllers/zillow.controller.js';

// Function to determine if the ID is a Zillow ID
const isZillowId = (id) => {
    return id.length === 8; // Assuming Zillow IDs are 8 characters long
};

// Middleware to route based on ID format
export const conditionalRoute = async (req, res, next) => {
    const { id } = req.params;

    if (isZillowId(id)) {
        // If it's a Zillow ID, use the Zillow controller
        return getZillowData(req, res);
    } else {
        // Otherwise, use the MongoDB controller
        return getMongoPost(req, res);
    }
};
