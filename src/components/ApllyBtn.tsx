import React from "react";

interface ApllyBtnProps {
  handleSubmit: (event: React.FormEvent) => void;
}

const ApplyBtn: React.FC<ApllyBtnProps> = ({ handleSubmit }) => {
  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="bg-amber-500 hover:bg-amber-600 text-white font-bold iphone12:py-1 iphone12:px-2 md:py-0 md:px-4 rounded"
    >
      Apply
    </button>
  );
};

export default ApplyBtn;
