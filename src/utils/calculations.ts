export const evaluateEquation = (equation: string, x: number): number => {
  const formattedEquation = equation
    .replace(/\^/g, "**")
    .replace(/([0-9]*)x/g, (match, p1) => `${p1 ? p1 : 1}*${x}`)
    .replace(/x/g, x.toString());
  // eslint-disable-next-line no-eval
  return eval(formattedEquation);
};

export const calculateResult = (
  initialValue: any,
  functions: { [key: string]: string },
  nextFunctions: { [key: string]: string },
  evaluate: (equation: string, x: number) => number
): string => {
  try {
    if (!initialValue || isNaN(Number(initialValue))) {
      return "Error";
    }

    let x = Number(initialValue);
    const visited = new Set<string>();
    let currentFunction = "function1";

    while (currentFunction && currentFunction !== "End") {
      if (visited.has(currentFunction)) {
        return "Error: Cyclic Dependency";
      }

      visited.add(currentFunction);
      const equation = functions[currentFunction];

      if (!equation) {
        return "Error";
      }

      x = evaluate(equation, x);
      currentFunction = nextFunctions[currentFunction];
    }

    return x.toString();
  } catch {
    return "Error";
  }
};
