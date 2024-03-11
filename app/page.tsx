"use client";

import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-center p-24">
      <div className="h-full w-full flex items-center justify-center text-center rounded-2xl">
        <Drawer shouldScaleBackground>
          <DrawerTrigger asChild>
            <Button variant={"link"}>
              <h1 className="scroll-m-30 text-white bg-zinc-950/70 rounded-full p-6 text-2xl font-nothing font-extrabold tracking-tight lg:text-5xl">
                {"Coming soon..."}
              </h1>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-black border-none">
            <div className=" h-auto">
              <DrawerHeader>
                <div className="h-auto w-full flex items-center justify-start">
                  <DrawerClose asChild>
                    <Button className=" hidden" variant={"ghost"}>
                      <h1 className="text-blue-600">Close</h1>
                    </Button>
                  </DrawerClose>
                </div>
                <div className="flex flex-col justify-center text-center h-full py-10 px-8 pt-16">
                  <DrawerTitle className=" font-nothing text-3xl text-white">Under Development</DrawerTitle>
                  
                </div>
              </DrawerHeader>

              <DrawerFooter></DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </main>
  );
}
