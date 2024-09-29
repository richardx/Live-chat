import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
    const documents = ref(null);
    const error = ref(null);

    // reference to the collection
    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt');

    // onSnapshot is a listener that listens to changes in the database
    collectionRef.onSnapshop((snap) => {
        let results = [];
        snap.docs.forEach(doc => {
            doc.data.createdAt && results.push({ ...doc.data(), id: doc.id });
        })
    });
}

export default getCollection;