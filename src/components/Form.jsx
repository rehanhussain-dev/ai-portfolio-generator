import { useState } from "react";

export default function Form({ onGenerate }) {
  const [form, setForm] = useState({
    name: "",
    title: "",
    skills: "",
    experience: "",
    projects: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {["name", "title", "skills", "experience", "projects"].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium capitalize">{field}</label>
          <textarea
            name={field}
            value={form[field]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={field === "skills" || field === "projects" ? 3 : 2}
          />
        </div>
      ))}
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Generate Portfolio
      </button>
    </form>
  );
}
