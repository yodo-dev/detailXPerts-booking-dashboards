export const customStyles = {
  rows: {
    style: {
      backgroundColor: "#F1F3FB",
      color: "#333",
      fontSize: "16px",
      minHeight: "50px",
      // maxWidth:"10px",
      margin: "0px 0",
      "&:nth-child(even)": {
        backgroundColor: "#F1F3FB80",
      },
      "&:nth-child(odd)": {
        backgroundColor: "white",
      },
    },
  },
  headCells: {
    style: {
      backgroundColor: "#F1F3FB",
      color: "black",
      fontSize: "12px",
      // maxWidth:"10px",
    },
  },
  cells: {
    style: {
      padding: "15px",
      fontSize: "14px",
      maxWidth: "10px",
    },
  },
  headRow: {
    style: {
      overflow: "hidden",
      backgroundColor: "#f1f1f1", // optional: add background color
    },
  },
};
