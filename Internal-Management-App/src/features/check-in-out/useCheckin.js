import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckinIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    //data here is recieved from mutationFn i.e. updateBooking if it is successfull.
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      //this will invalidate all the queries that are active on the page
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: () => toast.error("There was some error while checking-in"),
  });

  return { checkin, isCheckinIn };
}
