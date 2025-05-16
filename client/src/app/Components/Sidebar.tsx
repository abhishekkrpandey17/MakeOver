const Sidebar = () => {
  return (
    <aside className="mt-10 lg:mt-0 lg:w-1/3 space-y-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h4 className="font-bold mb-2">Getting Started</h4>
        <ul className="text-sm list-disc list-inside text-[#5a005a] space-y-1">
          <li>Community Guidelines</li>
          <li>FAQs</li>
          <li>Introduce Yourself</li>
          <li>Rank System</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h4 className="font-bold mb-2">Tutorial Videos</h4>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-40 rounded-md"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allowFullScreen
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
