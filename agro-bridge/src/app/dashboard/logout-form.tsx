
"use-server";

import { Button } from "~/components/ui/button";
import { LogOut } from "lucide-react";

export async function logout() {
  // Clear const cookie = useCookie('cookie')
  // redirect to /signin
  alert("Logout successfully");
}

export default function LogoutForm() {
  <form action={logout}>
    <Button
      variant="ghost"
      className="justify-start w-full text-red-600 hover:text-red-700 hover:bg-red-50"
    >
      <LogOut className="w-5 h-5 mr-3" />
      Log Out
    </Button>
  </form>
}
