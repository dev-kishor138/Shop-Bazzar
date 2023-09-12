import { getAuth, GoogleAuthProvider } from "firebase/auth";
const { default: app } = require("./firebase.config");

const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export default auth;
