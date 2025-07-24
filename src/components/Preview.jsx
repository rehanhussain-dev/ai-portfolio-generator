import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Preview({ markdown }) {
  return (
    <div className="prose max-w-none bg-white p-4 rounded shadow mt-6">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}