import { PathnameHeaading, TypingHeading } from "@/Components/Heading";
import { FaAngleRight } from "react-icons/fa";

export default function Doc() {
  return (<main className="p-10 px-20 max-sm:px-5 max-md:px-10 font-sans">
    <div className="gap-1 font-semibold items-center justify-center inline-flex">
      <span className="opacity-50 items-center justify-center inline-flex gap-1">
        <PathnameHeaading/>
        <FaAngleRight/>
      </span>
        Inroducation
    </div>
    <TypingHeading className="text-4xl font-bold">Inroducation</TypingHeading>
    <p className="max-w-[500px] my-2 opacity-60">
    Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
    </p>
    <p className="my-5">
    This is <b>NOT</b> a component library. It's a collection of re-usable components that you can copy and paste into your apps.
    </p>
  </main>);
}
