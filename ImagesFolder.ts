async function* getImageFiles(folder: FileSystemDirectoryHandle): AsyncGenerator<FileSystemFileHandle> {
  for await (let entry of folder.values()) {
    if (entry.kind != "file" || !entry.name.endsWith(".png")) {
      continue;
    }

    yield entry;
  }
}

/**
 * Unload each image by releasing the previously created object URLs. The images
 * map will be cleared.
 * @param images Map of images.
 * @returns The map of images.
 */
export function unloadImages(images: Map<string, HTMLImageElement>): Map<string, HTMLImageElement> {
  for (let image of images.values()) {
    URL.revokeObjectURL(image.src);
  }

  images.clear();

  return images;
}

/**
 * Fetch images from a folder and store them in a map by their filename.
 * Existing images will be unloaded first.
 * @param folder Folder to search.
 * @param images Map to store the images.
 * @param prefix String the prefix the image filenames.
 * @returns Promise to the map of images.
 */
export async function reloadImages(folder: FileSystemDirectoryHandle, images: Map<string, HTMLImageElement> = new Map(), prefix: string = ""): Promise<Map<string, HTMLImageElement>> {
  unloadImages(images);

  for await (let file of getImageFiles(folder)) {
    let blob = await file.getFile();
    let image = new Image();

    image.src = URL.createObjectURL(blob);
    images.set(prefix + file.name, image);
  }

  return images;
}