import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      //replace the current entry in the browser's history with the login page's entry after the user logs out. This ensures that the user cannot go back to the previous page using the browser's "back" button, and prevents them from accessing protected pages after logging out.replace function
      navigate("/login", { replace: true });
      // remove all the queries from react-query
      queryClient.removeQueries();
    },
  });

  return { logout, isLoading };
}
