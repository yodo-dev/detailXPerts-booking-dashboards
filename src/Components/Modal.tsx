// utils/confirmDialog.ts
import Swal from "sweetalert2";

export const ModalDelete = async (): Promise<boolean> => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "",
    confirmButtonText: "Yes, delete it!",
  });

  if (result.isConfirmed) {
    await Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
      showConfirmButton: false,
      timer:1500,
      timerProgressBar:true
    });
    return true;
  }

  return false;
};
