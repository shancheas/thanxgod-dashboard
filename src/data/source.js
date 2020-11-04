import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: process.env.VUE_APP_API_KEY,
        projectId: process.env.VUE_APP_PROJECT_NAME
    })
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }
