"use client";  
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let [input, setInput] = useState(""); 

  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h2>Inner layout</h2>
      {children}
      <input
  className="border border-gray-800 p-2 focus:border-blue-700 focus:ring-0 outline-none"
  type="text"
  value={input}
  onChange={handleChange}
/>
    </div>
  );
}
