import React from "react";

export const generateNodes = ({
  initialValue,
  setInitialValue,
  functions,
  nextFunctions,
  handleFunctionChange,
  handleSelectChange,
  isEditingChain,
  finalOutput,
}: {
  initialValue: any;
  setInitialValue: (value: any) => void;
  functions: { [key: string]: string };
  nextFunctions: { [key: string]: string };
  handleFunctionChange: (id: string, equation: string) => void;
  handleSelectChange: (id: string, nextFunction: string) => void;
  isEditingChain: boolean;
  finalOutput: string;
}) => {
  return [
    {
      id: "input",
      data: {
        label: (
          <div>
            <label className="block text-lg font-semibold mb-2">Input</label>
            <input
              type="text"
              className="border-2 border-yellow-400 bg-yellow-100 rounded-full text-center font-bold p-2 w-32 no-arrows"
              value={initialValue || ""}
              onChange={(e) => {
                const value = e.target.value;
                setInitialValue(value || 0);
              }}
            />
          </div>
        ),
      },
      position: { x: 50, y: 100 },
      type: "input",
    },
    ...Object.keys(functions).map((funcId, index) => {
      const xCardPosition =
        index % 3 === 0 ? 300 : 600 + ((index % 3) - 1) * 300;
      const yCardPostion = index < 3 ? 100 : 400;
      return {
        id: funcId,
        data: {
          label: (
            <div className="function-card bg-white shadow-md p-4 rounded-md w-64">
              <h3 className="text-lg font-bold mb-2">{funcId}</h3>
              <input
                type="text"
                className="function-input border border-gray-300 rounded-md p-2 w-full mb-2"
                placeholder="e.g., x + 2"
                onChange={(e) => handleFunctionChange(funcId, e.target.value)}
              />
              <select
                className={`next-function border border-gray-300 rounded-md p-2 w-full ${
                  isEditingChain ? "" : "pointer-events-none bg-gray-200"
                }`}
                value={nextFunctions[funcId]}
                onChange={(e) => handleSelectChange(funcId, e.target.value)}
              >
                {Object.keys(functions).map((targetFuncId) => (
                  <option key={targetFuncId} value={targetFuncId}>
                    {targetFuncId}
                  </option>
                ))}
                <option value="End">End</option>
              </select>
            </div>
          ),
        },
        position: { x: xCardPosition, y: yCardPostion },
      };
    }),
    {
      id: "output",
      data: {
        label: (
          <div>
            <label className="block text-lg font-semibold mb-2">Output</label>
            <input
              type="text"
              className="border-2 border-green-400 bg-green-100 rounded-full text-center font-bold p-2 w-32"
              value={finalOutput}
              readOnly
            />
          </div>
        ),
      },
      position: { x: 1300, y: 100 },
      type: "output",
    },
  ];
};
