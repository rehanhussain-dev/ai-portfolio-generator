import axios from "axios";

export async function generateMarkdown(formData) {
  const prompt = `
Create a markdown-based personal portfolio website from the following details:

Name: ${formData.name}
Title: ${formData.title}
Skills: ${formData.skills}
Experience: ${formData.experience}
Projects: ${formData.projects}

Output a full markdown content with sections for bio, skills, experience, and projects.
`;

  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7
    },
    {
      headers: {
        Authorization: `Bearer YOUR_OPENAI_API_KEY`
      }
    }
  );

  return res.data.choices[0].message.content;
}