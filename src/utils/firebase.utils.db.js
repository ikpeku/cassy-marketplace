import {initializeApp} from "firebase/app"
import {getAuth, signInWithPopup, GoogleAuthProvider , signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut} from "firebase/auth"
import { getFirestore,doc, getDoc, setDoc, serverTimestamp, collection, writeBatch, query, getDocs } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDzW_FQB69K4q8HLH7YopnCf1shNb9F_wA",
    authDomain: "crown-db-3c251.firebaseapp.com",
    projectId: "crown-db-3c251",
    storageBucket: "crown-db-3c251.appspot.com",
    messagingSenderId: "551481513946",
    appId: "1:551481513946:web:2d0b0acc1cf954c34112e3"
  };

initializeApp(firebaseConfig)

const getGoogleProvider = new GoogleAuthProvider()

getGoogleProvider.setCustomParameters({
    prompt: "select_account"
})


export const auth = getAuth()
export const signInWithPop = () => signInWithPopup(auth, getGoogleProvider)
export const signinOut = async() => await signOut(auth)


const db = getFirestore()

export const addColAndDoc = async(col, ColItems) => {
  const colRef = collection(db, col)

  const batch = writeBatch(db)

  await ColItems.forEach(item => {
    const docRef = doc(colRef, item.title.toLowerCase())
   batch.set(docRef, item)
  })

  await batch.commit()
  console.log("done")
}


export const getColAndDoc = async(col) => {
  const docRef = collection(db, col )
  const q = query(docRef)
  const response = await getDocs(q)

  const documents = response.docs.reduce((initData, colData) => {
    const {title, items} = colData.data()
    initData[title.toLowerCase()] = items
    return initData

  }, {})

  return documents;
}


export const createUserData = async(user) => {
    const response = doc(db, "users", user.uid) 
 

    const docSnapshot = await getDoc(response)
    const exit = docSnapshot.exists()

    if(!exit){
        const {displayName, email} = user
      try {
        await setDoc(response, {
            displayName, email, 
            createdAt: serverTimestamp(),
            status: "online"
        })
      } catch (error) {
        console.log(error.message)
      }
       
    }

    return docSnapshot

} 

export const signInWithEmail = async({logemail: email, logpassword:password}) => {
    if(!email && !password) return
    try {
        await signInWithEmailAndPassword(auth, email, password)
 
    } catch (error) {
        console.log(error.message)
    }
}

export const createUserWithEmail = async(email, password, displayName) => {
    if(!email && !password && !displayName) return

    try {
      await createUserWithEmailAndPassword(auth, email, password)
  
      await updateProfile(auth.currentUser, {displayName})
     
      // await createUserData(user)
   
    } catch (error) {
        console.log(error.message)        
    }

}