"use client";

import { useState } from "react";

const pdfs = [
  { name: "08/01/2026 Agenda", file: "/Day_1.pdf" },


];

export default function AgendaPage() {
  const [activePdf, setActivePdf] = useState(pdfs[0].file);

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-6">
      
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
       AOICON 2026
      </h1>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mb-4">
        {pdfs.map((pdf) => (
          <button
            key={pdf.file}
            onClick={() => setActivePdf(pdf.file)}
            className={`px-4 py-2 rounded-md text-sm font-medium
              ${
                activePdf === pdf.file
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border hover:bg-gray-200"
              }`}
          >
            {pdf.name}
          </button>
        ))}
      </div>

      {/* PDF iframe */}
      <div className="bg-white rounded-md shadow overflow-hidden">
        <iframe
          src={activePdf}
          title="Agenda PDF"
          className="w-full h-[80vh]"
        />
      </div>

      {/* Download */}
      <div className="mt-3 text-right">
        <a
          href={activePdf}
          download
          className="text-blue-600 font-medium hover:underline"
        >
          Download PDF
        </a>
      </div>

    </main>
  );
}
