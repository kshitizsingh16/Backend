import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { user } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
    
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
       
    if (!token) {
      throw new ApiError(401, "Invalid login request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const User = await user
      .findById(decodedToken?._id)
      .select("-password -refreshToken");
    if (!User) {
      throw new ApiError(403, "Unauthorized user");
    }
    req.user = User;
    next();
  } catch (error) {
    throw new ApiError(401, error.message || "Invalid access token");
  }
});
