import {storage} from "../utils/firebase";

export default class Pictures {

    static async upload({path, uid, file}){
        return await storage
            .ref(`${path}/${uid}`)
            .put(file)
            .then((snapshot) => {
                return snapshot.ref.getDownloadURL()
            });
    }

}
