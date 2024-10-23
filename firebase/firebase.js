// firebase/firebase.js
import { initializeApp } from 'firebase/app';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcisDiewnGs-lrqkyMWKMU5LxbXdffa5c",
    authDomain: "qavah-e11ec.firebaseapp.com",
    projectId: "qavah-e11ec",
    storageBucket: "qavah-e11ec.appspot.com",
    messagingSenderId: "375962366967",
    appId: "1:375962366967:web:dc7af928eee962a9d7b4f2",
    measurementId: "G-0CH5PR46HN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore initialization
const storage = getStorage(app); // Storage initialization

// Function to upload images and add item to Firestore
export async function uploadImagesAndAddItem(images, location, detail, price, type, rooms) {
    try {
        const imageUrls = [];

        // Upload images one by one to Firebase Storage and get their URLs
        for (let i = 0; i < images.length; i++) {
            try {
                const imageRef = ref(storage, `items/${Date.now()}_image_${i}`);
                const snapshot = await uploadBytes(imageRef, images[i]);
                const downloadURL = await getDownloadURL(snapshot.ref);
                imageUrls.push(downloadURL);
                console.log(`Image ${i + 1} uploaded successfully:`, downloadURL);
            } catch (uploadError) {
                console.error(`Error uploading image ${i + 1}:`, uploadError);
            }
        }

        // Ensure all images are uploaded before adding item to Firestore
        if (imageUrls.length === images.length) {
            try {
                const docRef = await addDoc(collection(db, 'items'), {
                    location,
                    detail,
                    price,
                    type,
                    rooms,
                    images: imageUrls,
                    createdAt: new Date(), // Optional: Add timestamp for item creation
                });
                console.log('Item added to Firestore successfully with ID:', docRef.id);
                return docRef.id;
            } catch (firestoreError) {
                console.error('Error adding item to Firestore:', firestoreError);
            }
        } else {
            console.error('Not all images were uploaded successfully.');
        }

    } catch (error) {
        console.error('Error in uploadImagesAndAddItem:', error);
    }
}

// Function to fetch all items from Firestore
export async function getItems() {
    try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const items = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log('Items fetched successfully:', items);
        return items;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}

// Function to update an existing item in Firestore
export async function updateItem(itemId, updatedData) {
    try {
        const itemRef = doc(db, 'items', itemId);
        await updateDoc(itemRef, updatedData);
        console.log('Item updated successfully:', itemId);
    } catch (error) {
        console.error('Error updating item:', error);
    }
}

// Function to delete an item from Firestore
export async function deleteItem(itemId) {
    try {
        const itemRef = doc(db, 'items', itemId);
        await deleteDoc(itemRef);
        console.log('Item deleted successfully:', itemId);
    } catch (error) {
        console.error('Error deleting item:', error);
    }
}
