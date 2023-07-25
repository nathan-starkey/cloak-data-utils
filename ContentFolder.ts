import { reloadImages } from "./ImagesFolder.js";
import { readContent } from "./ContentFile.js";
import { Content } from "./ContentSchema.js";

/**
 * Read the content folder, accessing the content and images.
 * @param success Success callback recieving the content and images.
 * @param error Error callback recieving a string describing the error.
 */
export async function readContentFolder(success: (folder: FileSystemDirectoryHandle, file: FileSystemFileHandle, content: Content, images: Map<string, HTMLImageElement>) => void, error: (message: string) => void): Promise<void> {
  // Attempt to access the content folder

  let folder: FileSystemDirectoryHandle;

  try {
    folder = await showDirectoryPicker();
  } catch (err) {
    error("Failed to access content folder:\n" + err);
    return;
  }

  // Attempt to access the content file

  let file: FileSystemFileHandle;

  try {
    file = await folder.getFileHandle("content.json");
  } catch (err) {
    error("Failed to access content file:\n" + err);
    return;
  }

  // Attempt to parse the content file

  let content: Content;
  let errors = [];

  try {
    content = await readContent(file, errors, "\n  in " + file.name);
  } catch (err) {
    error("Failed to parse content file:\n" + errors.join("\n"));
    return;
  }

  // Attempt to access the images folder
  
  let imagesFolder: FileSystemDirectoryHandle;

  try {
    imagesFolder = await folder.getDirectoryHandle("images");
  } catch (err) {
    error("Failed to access images folder:\n" + err);
    return;
  }

  // Attempt to load the images

  let images: Map<string, HTMLImageElement> = new Map();

  try {
    images = await reloadImages(imagesFolder, images, "images/")
  } catch (err) {
    error("Failed to load images:\n" + err);
    return;
  }

  success(folder, file, content, images);
}