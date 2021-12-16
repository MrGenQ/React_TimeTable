import firebase from "firebase"
import {app} from "../firebaseConfig"

const auth = app.auth();
const db = app.firestore()

const registerWithEmailPassword = async (name, email, password) =>{
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db.collection('users')
            .add({
                uid: user.uid,
                name,
                authProvider: "local",
                email
            })
    }catch (err){
        console.log(err)
    }
}
const logout = () => {
    auth.signOut()
}

export {
    auth,
    db,
    registerWithEmailPassword,
    logout
}