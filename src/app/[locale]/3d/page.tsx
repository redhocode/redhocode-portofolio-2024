import Modely from "@/components/model";

export default function page() {
  return (
    <>
      <div className="flex items-center flex-col md:flex-row min-h-screen">
        <div>
          <Modely />
        </div>
        <div></div>
      </div>
    </>
  );
}
