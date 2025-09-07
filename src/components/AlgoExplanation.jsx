export default function AlgoExplanation({ title, description, steps, accent = "sky-400" }) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md mt-8 border border-gray-200">
        <h2 className={`text-xl font-semibold mb-3 text-${accent}`}>
          {title}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
          {steps}
        </pre>
      </div>
    );
  }  