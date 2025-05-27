// src/lib/firebase/firebase.db.js

import { getFirestore } from "firebase/firestore";
import app from "./firebase.config";

// Export nommé pour permettre l'import { db } dans les autres fichiers
export const db = getFirestore(app);
