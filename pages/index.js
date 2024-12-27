import { Button } from "@/Components/Button";

export default function Home() {
  return (<main className="flex items-center justify-center h-full">
    <Button className="h-16 w-40">
      <div className="flex flex-col items-center justify-center w-[150px]">
        <span>Explore - Us</span>
        <span className="text-xs">welcome</span>
      </div>
    </Button>
  </main>);
}
