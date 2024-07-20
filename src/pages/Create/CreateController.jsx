import { useNavigate } from "react-router-dom";
import CreateModel from "./CreateModel";
import CreateView from "./CreateView";
import { v4 } from "uuid";

const CreateController = () => {
  //modelden br önek oluşturacağız
  const model = new CreateModel();

  // navigate kurulumu
  const navigate = useNavigate;
  // form gönderilince çalışacak olan fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();
    // 1. inputlardaki verileri alıp bir post nesnesi oluşturacağız,
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());
    // console.log(newPost);

    //2. post nesnesine id değeri ekle
    newPost.id = v4();

    //3 api a verileri kaydet ve anasayfaya yönlendir
    // mvc yapısı gerepği bu kodu model de yazmalıyız
    model.createPost(newPost).then(() => navigate("/"));
  };
  // controller sadece view bileşenini döndürür
  return <CreateView handleSubmit={handleSubmit} />;
};

export default CreateController;
