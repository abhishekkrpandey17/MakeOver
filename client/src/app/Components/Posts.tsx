const Posts = () => {
  return (
    <section className="my-10 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-bold text-lg">Mighty Marvelous May Hauls 2025</h3>
        <p className="text-sm text-gray-600">
          Posted by CynthiaLu • 2 weeks ago1nth closer to Summer BIC!
        </p>
        <div className="mt-2 flex gap-2">
          <button className="text-xs border px-2 py-1 rounded-full text-pink-700">
            Hauls
          </button>
          <button className="text-xs border px-2 py-1 rounded-full text-pink-700">
            Mother&rsquo;s Day
          </button>
        </div>

        <p className="mt-3">This is an answer by the expert author</p>
      </div>
    </section>
  );
};

export default Posts;
