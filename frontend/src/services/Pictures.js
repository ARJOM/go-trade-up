import {storage} from "../utils/firebase";

export default class Pictures {

    static async upload({path, uid, file_name, file}){
        return await storage
            .ref(`${path}/${uid}/${file_name}`)
            .put(file)
            .then((snapshot) => {
                return snapshot.ref.getDownloadURL()
            });
    }

}
