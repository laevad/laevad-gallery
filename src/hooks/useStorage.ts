import {useState} from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import {useAuth} from "./useAuth.ts";


export const useStorage = () => {
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const [url, setUrl] = useState<string | null>(null);
    const {user} = useAuth();

    const startUpload = (file: File) => {
        if (!file) return;

        const id = uuidv4();
        const format = file.name.split(".")[1];
        const storageRef = ref(storage, `images/${id}.${format}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               setProgress(progress);

            }, (error) => {
                setError(error.message);
            },
             async () => {
                 const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                 setUrl(downloadURL);
                 setProgress(progress);
                 await addDoc(collection(db, "images"), {
                         url: downloadURL,
                         createdAt: new Date(),
                         userEmail: user?.email,
                     }
                 );
             }
        );
    }

    return { progress, error, url, startUpload };
};
