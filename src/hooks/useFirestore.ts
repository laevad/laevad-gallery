import {useEffect, useState} from "react";
import {collection, query, onSnapshot, orderBy} from "firebase/firestore";
import {db} from "../firebase/config.ts";


interface Image {
    createdAt: Date;
    imageUrl: string;
    userEmail: string;
}
export const useFirestore = (collectionName:string) => {
    const [docs, setDocs] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        let unsubscribe: () => void;
       const getData = async () => {
           try {
                const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                     const images: Image[] = [];
                     querySnapshot.forEach((doc) => {
                          images.push({
                            createdAt: doc.data().createdAt.toDate(),
                            imageUrl: doc.data().url,
                            userEmail: doc.data().userEmail,
                          });
                     });
                     setDocs(images);
                     setIsLoading(false);
                });
                return () => unsubscribe();

           }catch (e) {
               console.error(e);
               setIsLoading(false);
           }
       }
            getData().then(r => console.log(r));

       return () => unsubscribe && unsubscribe();
    }
    , [collectionName]);

    return {
        docs,
        setDocs,
        isLoading,
    };
};
