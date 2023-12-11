import { FaDownload } from "react-icons/fa6";

const DownloadResume = () => {
  const handleDownload = () => {
    const resumePdfUrl = "https://drive.google.com/u/0/uc?id=1NjExaCRIYtxR8kFxhem2LLJ2ic0PSK9d&export=download";
    window.open(resumePdfUrl, "_blank");
  };
  return (
    <button
      onClick={handleDownload}
      className="flex justify-center items-center gap-2 bg-primary-main py-5 px-8 text-primary-blue-gray font-medium hover:bg-primary-blue-gray hover:text-white duration-300"
    >
      Download Resume <FaDownload />
    </button>
  );
};

export default DownloadResume;
