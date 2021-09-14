import {useEffect, useState} from "react"
import {projectFireStore} from "../library/firebase"

export const useFireStore = (collection) => {
    
    const [docs,setDocs] = useState([]);

    useEffect(() => {
        
        const unsub = projectFireStore.collection(collection)
        .orderBy("id" ,"asc")
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({
                    ...doc.data(),
                    id: doc.id
                })
            });
            
            setDocs(documents);
        })
        return () => unsub();
    }, [collection])    

    return { docs }
}
