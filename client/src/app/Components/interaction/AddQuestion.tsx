const AddQuestion = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Ask a New Question</h2>
      <textarea
        className="w-full border rounded p-2 h-32"
        placeholder="What's your question?"
      />
      <button className="mt-4 bg-purple-800 text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>
  );
};

export default AddQuestion;