import { useState } from "react";
import { Button } from "../../components/ui/button";
import SubNavMenu from "./SubNavMenu";
import { Progress } from "../../components/ui/progress";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { PiFileCsvLight } from "react-icons/pi";
import uploadSuccess from "../../assets/uploadSuccess.png"; // Import your image here
import fileUpload from "../../assets/fileUpload.png"; // Import your image here

function ImportFile() {
  // State to manage files, upload progress, and the list of uploaded files
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; file: File }[]>([]);
  const [hoveredFile, setHoveredFile] = useState<string | null>(null); // Add state for hovered file

  // Handle file selection and update the files state
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  // Simulate file upload and update progress
  const handleFileUpload = async () => {
    if (!files.length) return;

    setUploading(true);
    setProgress(0);

    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate upload delay
      setProgress(i);
    }

    // Add uploaded files to the list and reset states
    const fileDetails = files.map((file) => ({ name: file.name, file }));
    setUploadedFiles((prev) => [...prev, ...fileDetails]);
    setFiles([]);
    setUploading(false);
  };

  // Function to trigger the file input click
  const triggerFileInput = () => {
    document.getElementById("file-upload")?.click();
  };

  // Remove a file from the uploaded files list
  const handleRemoveFile = (fileName: string) => {
    setUploadedFiles((prev) => prev.filter(file => file.name !== fileName));
  };

  return (
    <div className="w-full h-[100%]">
      <h1 className="text-3xl pb-5">Asset Names</h1>
      <SubNavMenu />
      <main className="flex flex-1 flex-col  gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex  items-center">
          <h1 className="text-lg  font-semibold md:text-2xl">Import a File</h1>
        </div>
        <div
          className="flex flex-col h-[100%] items-center justify-center rounded-lg border border-dashed shadow-sm p-6 "

        >
          <div style={{ width: "35vw", alignItems: "center", textAlign: "center" }}>
            {!uploadedFiles.length ? (
              <div className="flex flex-col items-center gap-1 text-center">
                <img src={fileUpload} alt="Upload Success" className="w-1/6 mx-auto my-4 " />
                <h3 className="text-2xl font-bold tracking-tight">{files.length} Files Selected </h3>


                {/* <p className="text-sm text-muted-foreground">
                    You can start uploading your files.
                  </p> */}
                {files.length === 0 && (
                  <>
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      id="file-upload"
                      onChange={handleFileChange}
                    />
                    <Button className="mt-4 cursor-pointer" onClick={triggerFileInput}>
                      Add Files ({files.length})
                    </Button>
                  </>
                )}
                {files.length > 0 && !uploading && (
                  <div className="mt-4 w-full">

                  </div>
                )}
                {files.length > 0 && !uploading && (
                  <Button className="mt-4" onClick={handleFileUpload}>
                    Upload Files ({files.length})
                  </Button>
                )}
              </div>
            ) : (
              <ul className="w-full">
                <img src={uploadSuccess} alt="Upload Success" className="w-1/6 mx-auto my-4 " />
                <h3 className="text-2xl font-bold tracking-tight my-4 text-cyan-700">
                  {uploadedFiles.length} Sensor Files Uploaded Successfully
                </h3>
                {uploadedFiles.map((file, index) => (
                  <li
                    key={index}
                    className={`p-2 mt-2 flex items-center justify-between ${hoveredFile === file.name ? "bg-gray-100 rounded-lg" : ""
                      }`} // Add conditional class for hovered file
                    onMouseEnter={() => setHoveredFile(file.name)} // Set hovered file on mouse enter
                    onMouseLeave={() => setHoveredFile(null)} // Reset hovered file on mouse leave
                  >
                    <div className="flex items-center">
                      <PiFileCsvLight className="mr-2 h-5 w-5 ml-4 " /> {file.name}
                    </div>

                    <button
                      onClick={() => handleRemoveFile(file.name)}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Remove file"
                    >
                      <XMarkIcon className="h-5 w-5 mr-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {uploading && (
              <div className="mt-4 w-full">
                <Progress value={progress} className="h-2" />
                <p className="text-sm mt-2">Uploading {files.length} Files {progress}%</p>
              </div>
            )}


          </div>
        </div>


      </main>
    </div>
  );
}

export default ImportFile;
