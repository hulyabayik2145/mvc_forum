const CreateView = ({ handleSubmit }) => {
  return (
    <div className="h-[90vh] grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 w-3/4 max-w-[700px] bg-black p-10 md:p-20 rounded-lg"
      >
        <h1 className="text-center text-xl">Yeni Gönderi Oluştur</h1>
        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium">Kullanıcı Adı </label>
          <input
            required
            placeholder="ör:Mehmet"
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
            name="user"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium">Başlık </label>
          <input
            required
            placeholder="ör:React Sorun"
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
            name="title"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium">Açıklama</label>
          <textarea
            required
            placeholder="ör:Mehmet"
            className="max-h-[300px] min-h-[150px] bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
            name="text"
            type="text"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 rounded-lg transition hover:bg-yellow-600"
        >
          Oluştur
        </button>
      </form>
    </div>
  );
};

export default CreateView;
