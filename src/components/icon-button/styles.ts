import { StylesProps } from "../../utils/styles-props";

export const styles = (size: number): StylesProps => ({
  iconButton: {
    border: "none",
    borderRadius: "50%",
    width: size,
    height: size,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F7FA",
    cursor: "pointer",
  },
});
