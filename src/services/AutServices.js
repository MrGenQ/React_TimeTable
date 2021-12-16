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
const signInWithEmailPassword = async (email, password) => {
    try{
        const res = await auth.signInWithEmailAndPassword(email, password)
    }catch(error){
        console.log(error)
    }
}
const sendPasswordReset = async (email) => {
    try{
        await auth.sendPasswordResetEmail(email)
        alert("Laiškas sėkmingai išsiūstas")
    }catch(error){
        console.log(error)
    }
}

export {
    auth,
    db,
    registerWithEmailPassword,
    logout,
    signInWithEmailPassword,
    sendPasswordReset
}