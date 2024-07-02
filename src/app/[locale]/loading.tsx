import HashLoader from "react-spinners/HashLoader";
import PuffLoader from "react-spinners/PuffLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
export default function Loading() {
  return (
    <>
      <div className="flex justify-center min-h-screen mx-auto items-center">
        <PacmanLoader color="#ee5449" size={70} speedMultiplier={1} />
      </div>
    </>
  );
}
