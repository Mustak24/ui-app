import { Button } from "@/Components/Button";

export default function Home() {
  return (<main className="flex items-center justify-center h-full">
    <Button>
      <div className="flex flex-col items-center justify-center w-[150px] h-full">
        <span>Explore - Us</span>
        <span className="text-[9px]">welcome</span>
      </div>
    </Button>
  </main>);
}
