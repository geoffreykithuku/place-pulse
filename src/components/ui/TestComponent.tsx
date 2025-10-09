
const TestComponent = () => {
  return (
    <div className="p-8 bg-primary-50">
      <h1 className="text-4xl font-bold text-primary-600 mb-4">
        Tailwind Test
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-soft">
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">Primary Colors</h2>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded"></div>
            <div className="w-8 h-8 bg-primary-600 rounded"></div>
            <div className="w-8 h-8 bg-primary-700 rounded"></div>
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-soft">
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">Secondary Colors</h2>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-secondary-500 rounded"></div>
            <div className="w-8 h-8 bg-secondary-600 rounded"></div>
            <div className="w-8 h-8 bg-secondary-700 rounded"></div>
          </div>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-soft">
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">Safari Colors</h2>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-safari-500 rounded"></div>
            <div className="w-8 h-8 bg-safari-600 rounded"></div>
            <div className="w-8 h-8 bg-safari-700 rounded"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <button className="glass px-6 py-3 rounded-xl mr-4">
          Glass Button
        </button>
        <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-xl">
          Gradient Button
        </button>
      </div>
      
      <div className="mt-4">
        <p className="gradient-text text-2xl font-bold">
          Gradient Text Test
        </p>
      </div>
    </div>
  );
};

export default TestComponent;
