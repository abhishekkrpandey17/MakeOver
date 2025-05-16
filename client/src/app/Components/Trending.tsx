const Trending = () => {
  return (
    <div className="my-8 bg-[#dbc3eb]">
      <h2 className="text-3xl font-bold mb-4 text-darkviolet">
        Trending Groups
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {[
          "Complexion Club",
          "Makeup is Life",
          "Haul Stars",
          "Beauty Confident",
          "Acne-Prone Skin",
          "Besides Beauty",
        ].map((group, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg shadow text-center text-sm font-medium"
          >
            {group}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
