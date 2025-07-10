import Image from "next/image";
import ARPage from "./ar/page";

export default function Home() {
  return (
      <>
      <div className="w-full h-screen">
      <iframe
        src="/ar-view.html"
        title="AR Core"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
      </>
  );
}
