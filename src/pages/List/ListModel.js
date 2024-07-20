// veri ile alakalı her yapıyı model de tanmlarız

import axios from "axios";

// model oluştururken genelde classları tercih ederiz

export default class ListModel {
    // api den post verilerini alıp döndüren fonksiyon
    async getPosts() {
        try {

            const res = await axios.get('http://localhost:3000/post');

            return res.data;
        } catch (err) {
            alert("HATA");
            console.log(err);
        }

    }
}