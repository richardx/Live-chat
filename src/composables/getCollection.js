import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
    const documents = ref(null);
    const error = ref(null);

    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt');

    collectionRef.onSnapshop()
}

export default getCollection;