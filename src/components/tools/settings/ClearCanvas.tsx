const ClearCanvas = () => {
  const clearCanvas = () => {
    const canvas = document.querySelectorAll(
      ".square"
    ) as NodeListOf<HTMLCanvasElement>;
    if (window.confirm("Are you sure you want to clear the canvas?")) {
      canvas.forEach((canvas) => {
        canvas.style.backgroundColor = "#dad7d7";
      });
    }
  };
  return (
    <div className="clear-button">
      <button onClick={clearCanvas}>Clear</button>
    </div>
  );
};

export { ClearCanvas };
