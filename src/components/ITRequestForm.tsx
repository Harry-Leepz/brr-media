import React, { useState } from "react";

const issueTypes = [
  { label: "Hardware", value: "hardware" },
  { label: "Software", value: "software" },
  { label: "Network", value: "network" },
  { label: "Account Access", value: "account_access" },
  { label: "Other", value: "other" },
];

export default function ITRequestForm() {
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log({
        issueType,
        description,
        fileName: file?.name || null,
      });

      alert("Request submitted!");

      // Reset form
      setIssueType("");
      setDescription("");
      setFile(null);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white p-6 rounded shadow max-w-md mx-auto'
    >
      <h2 className='text-xl font-bold mb-4'>Submit IT Request</h2>

      <label className='block mb-2' htmlFor='issue-type'>
        Issue Type
      </label>
      <select
        id='issue-type'
        value={issueType}
        onChange={(e) => setIssueType(e.target.value)}
        className='w-full p-2 border rounded mb-4'
        required
      >
        <option value='' disabled>
          Select issue type
        </option>
        {issueTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>

      <label className='block mb-2' htmlFor='description'>
        Description
      </label>
      <textarea
        id='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='w-full p-2 border rounded mb-4'
        required
      />

      <label className='block mb-2'>Attach File (optional)</label>
      <div className='mb-4'>
        <input
          id='file-upload'
          type='file'
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className='hidden'
        />
        <label
          htmlFor='file-upload'
          className='inline-block px-4 py-2 bg-gray-200 text-sm rounded cursor-pointer hover:bg-gray-300'
        >
          {file ? `📎 ${file.name}` : "Choose File"}
        </label>
      </div>

      <button
        type='submit'
        disabled={isLoading}
        className={`px-4 py-2 rounded text-white ${
          isLoading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isLoading ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}
