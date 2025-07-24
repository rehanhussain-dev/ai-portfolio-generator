import { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import { generateMarkdown } from "./utils/generateMarkdown";
import { exportMarkdown } from "./utils/exportZip";

export default function App() {
  const [markdown, setMarkdown] = useState("");

  const handleGenerate = async (formData) => {
    const md = await generateMarkdown(formData);
    setMarkdown(md);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Portfolio Generator</h1>
      <Form onGenerate={handleGenerate} />
      {markdown && (
        <>
          <button
            onClick={() => exportMarkdown(markdown)}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Download ZIP
          </button>
          <Preview markdown={markdown} />
        </>
      )}
    </div>
  );
}