import Swal from "sweetalert2";
export function SweetAlert(todoValue: string) {
  return Swal.fire({
    title: "Success!",
    html: `You already add  <span style="color:red;font-weight:semi-bold;font-size:25px">${todoValue}</span>  to list.`,
    icon: "success",
    confirmButtonText: "Close",
  });
}

export function SweetAlertDelete(todoValue: string) {
  return Swal.fire({
    title: "Success!",
    html: `<span style="color:red;font-weight:semi-bold;font-size:25px">${todoValue}</span> has been deleted.`,
    icon: "success",
    confirmButtonText: "Close",
  });
}

export function SweetAlertEdit() {
  return Swal.fire({
    title: "Success!",
    html: `Your task has been updated.`,
    icon: "success",
    confirmButtonText: "Close",
  });
}
