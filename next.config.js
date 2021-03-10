//URL for local server and mongoDB server to connect the application with the server
module.exports = {
    env: {
        "BASE_URL": "http://localhost:3000",
        "MONGODB_URL": "mongodb+srv://bennytran:bennytran@cluster0.dbkmn.mongodb.net/nextjs_ecommerce?retryWrites=true&w=majority",
        "ACCESS_TOKEN_SECRET": "4ez'CQVamL[:6B}]=!2c`2m){.PqR3bbe2zvDx]La#NU8G:r&",
        "REFRESH_TOKEN_SECRET": "GTYn9%w']6R^A)bD:e4U#.*<CU6`:2{8,aMM9'%T54JWu7_V{y#`AUfPxS8>}uetE*f'}*&D",
        "PAYPAL_CLIENT_ID": "AXt8iSrA6r4jBI7nPz-6BC3eOgPZeT307IppciT4j6Eo3J8RKtea6_wOozRH8-L0PtyMdLpyvhB6IHWY",
        "CLOUD_UPDATE_PRESET":"nextjs_store",
        "CLOUD_NAME":"bennytran",
        "CLOUD_API":"https://api.cloudinary.com/v1_1/bennytran/image/upload"

    }
}