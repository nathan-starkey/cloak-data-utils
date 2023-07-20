import { Content, parseContent } from "./ContentSchema.js";

/**
 * Stringify the content JSON with nicer formatting.
 * @param content Content to stringify.
 * @returns String representation of the content JSON.
 */
export function stringifyContent(content: Content): string {
  let json: any = structuredClone(content);
  let escape = "escape" + Math.random();

  json.worlds.forEach((world: any) => {
    world.chunks.forEach((chunk: any) => {
      chunk.data = escape + `[${chunk.data}]` + escape;
    });
  });

  let text = JSON.stringify(content, null, 2);

  text = text.split('"' + escape).join("");
  text = text.split(escape + '"').join("");

  return text;
}

/**
 * Read the content from a file.
 * @param file File to read from.
 * @param errors Array to append errors.
 * @param source String to suffix errors.
 * @returns Promise to the parsed content.
 */
export async function readContent(file: FileSystemFileHandle, errors: string[] = [], source: string = ""): Promise<Content> {
  let blob = await file.getFile();
  let text = await blob.text();
  let json = JSON.parse(text);

  return parseContent(json, errors, source);
}

/**
 * Write the content to a file.
 * @param file File to write to.
 * @param content Content to write.
 */
export async function writeContent(file: FileSystemFileHandle, content: Content) {
  let text = stringifyContent(content);
  let writable = await file.createWritable();

  await writable.write(text);
  await writable.close();
}