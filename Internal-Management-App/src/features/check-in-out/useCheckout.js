import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: ischeckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    //data here is recieved from mutationFn i.e. updateBooking if it is successfull.
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      //this will invalidate all the queries that are active on the page
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("There was some error while checking-out"),
  });

  return { checkout, ischeckingOut };
}
