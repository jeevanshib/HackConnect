const express = require("express");
const { uploadImages, listImages} = require( "../controllers/upload" );
const { authUser } = require( "../middleware/auth" );
const imageUpload = require( "../middleware/imageUpload" );

const router = express.Router();

router.post("/uploadImages",imageUpload,authUser , uploadImages);
router.post("/listImages", listImages);

module.exports = router;