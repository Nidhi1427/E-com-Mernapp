const express = require('express');
const router = express.Router();

const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require('../controller/user/userSignIn');
const userDetailsController = require('../controller/user/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/user/userLogout');
const allUsers = require('../controller/user/allUsers');
const updateUser = require('../controller/user/updateUser');
const UploadProductController = require('../controller/product/uploadProduct');
const getProductController = require('../controller/product/getProduct');
const updateProductController = require('../controller/product/updateProduct');
const getCategoryProduct = require('../controller/product/getCategoryProduct');
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct');
const getProductDetails = require('../controller/product/getProductDetails');
const addToCartController = require('../controller/product/addToCart'); // ✅ FIXED PATH
const countAddToCartProduct = require('../controller/product/countAddToCartProduct'); // ✅ FIXED PATH
const addToCartViewProduct = require('../controller/product/addToCartViewProduct'); // ✅ FIXED PATH
const updateAddToCartProduct = require('../controller/product/updateAddToCartProduct'); // ✅ FIXED PATH
const deleteAddToCartProduct = require('../controller/product/deleteAddToCartProduct'); // ✅ FIXED PATH
const searchProduct = require('../controller/product/searchProduct');
const filterProductController = require('../controller/product/filterProduct');

// User Auth Routes
router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout); // ✅ Fixed route name

// Admin Routes
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

// Product Routes
router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);
router.get("/get-categoryProduct", getCategoryProduct);
router.post("/category-wise-product", getCategoryWiseProduct); // ✅ Fixed route name
router.post("/product-details", getProductDetails);
router.get("/search", searchProduct);
router.post("/filter-product", filterProductController);

// Cart Routes
router.post("/add-to-cart", authToken, addToCartController);
router.get("/get-cart", authToken, addToCartViewProduct); // ✅ Fixed route name
router.get("/get-cart-count", authToken, countAddToCartProduct);
router.post("/update-cart-product", authToken, updateAddToCartProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);

module.exports = router;
