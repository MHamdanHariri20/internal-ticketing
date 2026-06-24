import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AppLogo } from "@/components/brand/app-logo";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <AppLogo className="text-center my-4 mb-10" />
      <Card className="shadow-sm">
        <CardHeader className="space-y-2">
          <CardTitle className="text-xl font-bold">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-sm">
            Sign in to continue
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <Button className="w-full">Sign In</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
