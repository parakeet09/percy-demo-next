"use client";

import React, { useState, useEffect } from "react";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { calculateResult, evaluateEquation } from "@/utils/calculations";
import { generateNodes } from "@/components/NodeGenerator";
import { generateEdges } from "@/utils/edgeGenerator";

const FunctionChainCalculator: React.FC = () => {
  const [initialValue, setInitialValue] = useState<any>(0);
  const [functions, setFunctions] = useState<{ [key: string]: string }>({
    function1: "",
    function2: "",
    function3: "",
    function4: "",
    function5: "",
  });
  const [nextFunctions, setNextFunctions] = useState<{ [key: string]: string }>(
    {
      function1: "function2",
      function2: "function4",
      function4: "function5",
      function5: "function3",
      function3: "End",
    }
  );
  const [isEditingChain, setIsEditingChain] = useState<boolean>(false);
  const [finalOutput, setFinalOutput] = useState<string>("");

  const handleFunctionChange = (id: string, equation: string) => {
    setFunctions((prev) => ({ ...prev, [id]: equation }));
  };

  const handleSelectChange = (id: string, nextFunction: string) => {
    setNextFunctions((prev) => ({ ...prev, [id]: nextFunction }));
  };

  useEffect(() => {
    setFinalOutput(
      calculateResult(initialValue, functions, nextFunctions, evaluateEquation)
    );
  }, [initialValue, functions, nextFunctions]);

  const nodes = generateNodes({
    initialValue,
    setInitialValue,
    functions,
    nextFunctions,
    handleFunctionChange,
    handleSelectChange,
    isEditingChain,
    finalOutput,
  });

  const edges = generateEdges(nextFunctions);

  return (
    <div className="calculator-container p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Function Chain Calculator</h1>
      <button
        onClick={() => setIsEditingChain(!isEditingChain)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        {isEditingChain ? "Disable Editing Chain" : "Enable Editing Chain"}
      </button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        style={{ width: "100%", height: "600px" }}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FunctionChainCalculator;
