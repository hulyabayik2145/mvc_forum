import axios from "axios";
import { toast } from "react-toastify";

export default class PopupModel {
    //parametre olarak aldığı kullanıcının gönderilerini apidan alır
    async getUserPosts(username) {
        try {
            const res = await axios.get(`http://localhost:3000/post?user=${username}`);
            return res.data;

        } catch (err) {
            toast.err("Gönderilere Erişilemedi");
            console.log(err);
        }
    }
}