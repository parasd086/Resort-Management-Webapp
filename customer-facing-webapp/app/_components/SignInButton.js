import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    //Since we want entire signIn flow on the server for much better UX, we dont want this to become client component.
    //And thus, since it isnt a client component we can add "onClick" interactivity to this component. Thus, we will use server actions.
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
