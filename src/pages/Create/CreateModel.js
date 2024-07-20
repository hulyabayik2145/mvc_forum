import axios from "axios";
import { toast } from "react-toastify";

axios
export default class CreateModel {
    async createPost(newPost) {
        try {
            await axios.post('http://localhost:3000/post', newPost);
            toast.success("Gönderi başarıyla oluşturuldu");
        } catch (err) {
            toast.error("Gönderi kaydedilirken bir hata oluştur")
            console.log(err)

        }
    }
}