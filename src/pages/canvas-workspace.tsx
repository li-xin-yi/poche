import Canvas from "@/components/canvas/canvas";
import SearchBar from "@/components/searchbar/searchbar";

export default function CanvasWorkspace() {
  return (
    <div className="min-h-screen">
      <div id="top-bar" className="flex flex-row-reverse p-8">
        <SearchBar />
      </div>
      <Canvas />
    </div>
  );
}
