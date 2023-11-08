const activatePencil = (): void => {
  const pencil = document.querySelector<HTMLDivElement>(".pencil");
  pencil?.classList.add("active-tool");
};
const deActivateEraser = (): void => {
  const eraser = document.querySelector<HTMLDivElement>(".eraser");
  eraser?.classList.remove("active-tool");
};

export { activatePencil, deActivateEraser };
