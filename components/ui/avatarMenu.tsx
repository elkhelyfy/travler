import React from 'react'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarShortcut, MenubarTrigger } from "./menubar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from './button';
import { logOut } from '@/app/actions/user';
import { LogOut, Bolt } from "lucide-react";
import { signOut } from '@/auth';


const AvatarMenu = () => {

    const handleLogOut = async (event : any) => {
        "use server";
        event.preventDefault();
        await signOut();
    };
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Bolt className="w-4 mr-2" /> settings
          </MenubarItem>
          <MenubarItem>
            <form>
              <Button variant="none" size="none" className="none" onSubmit={handleLogOut}>
                <LogOut className="w-4 mr-2" /> Sign out
              </Button>
            </form>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default AvatarMenu