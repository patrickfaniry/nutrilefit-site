// src/lib/firebase/firebase.auth.js
import { getAuth } from "firebase/auth";
import app from "./firebase.config";

const auth = getAuth(app);

export default auth;
