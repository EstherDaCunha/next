import React, { useState } from "react";

export default function Filter() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center space-x-4 w-[57em] justify-end">
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-blue-500"
          name="option"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        <span className="ml-2 font-semibold text-sm">1° Semestre</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-blue-500"
          name="option"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        <span className="ml-2 font-semibold text-sm">2° Semestre</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-blue-500"
          name="option"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
        />
        <span className="ml-2 font-semibold text-sm">3° Semestre</span>
      </label>
    </div>
  );
}
