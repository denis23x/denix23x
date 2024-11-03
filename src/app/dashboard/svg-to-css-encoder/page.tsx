"use client"

import {Textarea} from "@/components/ui/textarea";
import {useEffect, useState} from "react";
import {AutosizeTextarea} from "@/components/ui/autosize-textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {toast} from "sonner";
import {ChevronRightIcon} from "@radix-ui/react-icons";
import {FileCode2, FileImage} from "lucide-react";
import {DrawerDialogDemo} from "@/components/DrawerDialogDemo";
import {
  Drawer, DrawerClose,
  DrawerContent,
  DrawerDescription, DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";

export default function Page() {
  const [textarea, setTextarea] = useState<string>('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-airplane-engines-fill" viewBox="0 0 16 16">\n' +
    '  <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0"/>\n' +
    '</svg>');
  const [textarea2, setTextarea2] = useState<string>('');

  useEffect(() => {
    setTextarea2(svgToDataURL(textarea))
  }, [textarea]);

  const svgToDataURL = (svg: string): string => {
    const encoded = encodeURIComponent(svg)
      .replace(/'/g, "%27")
      .replace(/"/g, "%22");

    return `url("data:image/svg+xml,${encoded}")`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(textarea2)
      .then(() => {
        toast.success("Text copied to clipboard!")

      })
      .catch((error) => {
        toast("Failed to copy text")
      });
  };

  const BackgroundSVGComponent = () => {
    const backgroundImage = textarea2;

    const style = {
      backgroundImage,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    };

    return <div className={'size-full aspect-square'} style={style}></div>;
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        SVG to CSS Encoder
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This tool transforms SVG code into a Data URI format, creating an encoded URL that can be used directly as a
        background-image in CSS. Essentially, it lets you embed SVG images directly within your stylesheets, eliminating
        the need to host separate image files and reducing server requests for faster loading times.
      </p>
      <div className="grid w-full gap-2">
        <Label className={'flex items-center gap-1'} htmlFor="message-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7">
            <FileCode2 />
          </Button>
          <span className="text-lg font-semibold">SVG Input</span>
        </Label>
        <AutosizeTextarea
          className={'bg-sidebar'}
          id="message-2" placeholder="Type your message here." value={textarea}
                          onChange={(e) => setTextarea(e.target.value)}/>
      </div>

      <DrawerDialogDemo>
        <BackgroundSVGComponent></BackgroundSVGComponent>
      </DrawerDialogDemo>

      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <BackgroundSVGComponent></BackgroundSVGComponent>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      <div className="grid w-full gap-2">
        <Label className={'flex items-center gap-1'} htmlFor="message-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7">
            <FileCode2 />
          </Button>
          <span className="text-lg font-semibold">CSS Output</span>
        </Label>
        <AutosizeTextarea
          className={'bg-sidebar'}
          id="message-3"
          placeholder="Type your message here." value={textarea2} readOnly={true}/>
        <Button variant={'default'} onClick={handleCopy}>Copy CSS Output</Button>
      </div>

      <div className="grid gap-4">
        <Label htmlFor="message-3" className={'flex items-center gap-1'}>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7">
            <FileImage />
          </Button>
          <span className="text-lg font-semibold">Preview</span>
        </Label>
        <BackgroundSVGComponent></BackgroundSVGComponent>
      </div>

    </div>
  )
}
