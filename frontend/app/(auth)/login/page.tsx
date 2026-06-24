import { AppLogo } from "@/components/brand/app-logo";
import LoginForm from "../../../components/forms/login-form";

export default function LoginPage() {


  return (
    <div className="w-full max-w-md">
      <AppLogo className="text-center my-4 mb-10" />
      <LoginForm />
    </div>
  );
}
