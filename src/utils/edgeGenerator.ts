export const generateEdges = (nextFunctions: { [key: string]: string }) => {
  return [
    {
      id: "e-input-function1",
      source: "input",
      target: "function1",
      animated: true,
    },
    ...Object.keys(nextFunctions)
      .map((sourceId) => {
        const targetId = nextFunctions[sourceId];
        return targetId !== "End"
          ? {
              id: `e-${sourceId}-${targetId}`,
              source: sourceId,
              target: targetId,
              animated: true,
            }
          : undefined;
      })
      .filter((edge): edge is NonNullable<typeof edge> => Boolean(edge)),
    {
      id: "e-function3-output",
      source: "function3",
      target: "output",
      animated: true,
    },
  ];
};
