export const conditionalRowStyle = [
  {
    when: (row) => row.__index % 2 !== 0,
    style: {
      backgroundColor: "#F8F9FD", // odd rows
    },
  },
];

export const customStyles = {
  headRow: {
    style: {
      backgroundColor: "#F1F3FB",
      color: "#252525",
      fontSize: "12px",
      fontWeight: 500,
      borderBottom: "1px solid #E6E7E7",
    },
  },
  headCells: {
    style: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
  rows: {
    style: {
      fontSize: "14px",
      color: "#4D5361",
      fontWeight: 500,
      paddingTop: "12px",
      paddingBottom: "12px",
      borderBottom: "1px solid #f0f0f0",
    },
  },
  cells: {
    style: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
};
