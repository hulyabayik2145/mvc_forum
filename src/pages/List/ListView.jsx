import PopupController from "../../components/Popup/PopupController";

const ListView = ({ posts, selectedUser, setSelectedUser }) => {
  //   console.log(selectedUser);
  return (
    <div className=" h-screen bg-[#1c1c1c] text-white container-sm px-5 py-5 md:px-40 lg:px-52">
      <h1>
        Gönderi Sayısı <span className="font-bold">{posts.length}</span>
      </h1>
      <div>
        {posts.length === 0 ? (
          <p>Yüklenyor</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-black w-full my-5 p-5 rounded-md shadow shadow-gray-400 corsor-pointer transition hover:shadow-yellow-300"
            >
              <div className="flex justify-between">
                <h3>{post.title}</h3>
                <p
                  onClick={() => setSelectedUser(post.user)}
                  className="text-yellow-500"
                >
                  {post.user}
                </p>
              </div>
              <p>{post.text}</p>
            </div>
          ))
        )}
        {/* Bir kullanıcı tıklanırsa o kişiye ait gonderiler açılacak */}
        {selectedUser && (
          <PopupController
            user={selectedUser}
            close={() => setSelectedUser(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ListView;
