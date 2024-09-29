import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
    
    const documents = ref(null);
    const error = ref(null);

    // reference to the collection
    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt');

    // onSnapshot is a listener that listens to changes in the database
    const unsub = collectionRef.onSnapshot(snap => {
        let results = [];
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
        })
        documents.value = results;
        error.value = null;
    }, err => {
        console.log(err.message);
        documents.value = null;
        error.value = 'could not fetch data';
    });

    watchEffect((onInvalidate) => {
    // unsub from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsub());
  });


        return { documents, error };
}

export default getCollection;