import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import githubIcon from '@/assets/github-icon.svg';
import Image from "next/image";
import Link from "next/link";


export default function SignUp() {
  return (
    <form className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="email" id="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" id="password" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password-confirmation">Confirm your password</Label>
        <Input name="password-confirmation" type="password" id="password-confirmation" />
      </div>

      <Button type="submit" className="w-full">Create account</Button>

      <Button variant="link" className="w-full" size="sm" asChild>
        <Link href='/auth/sign-in'>
          Already registered? Sign in
        </Link>
      </Button>

      <Separator />

      <Button type="submit" variant="outline" className="w-full">
        <Image src={githubIcon} alt="" className="size-4 mr-2 dark:invert" />
        Sign up with GitHub
      </Button>


    </form>
  );
}
