import { Content, Creature, Image, Sprite, Tile, World } from "./ContentSchema";

/**
 * Find the index of a creature in the content.
 * @param content Content to search.
 * @param id ID of the creature to find.
 * @returns Index of the creature; -1 if not found.
 */
export function indexOfCreature(content: Content, id: string): number {
  return content.creatures.findIndex(elem => elem.id == id);
}

/**
 * Find a creature in the content.
 * @param content Content to search.
 * @param id ID of the creature to find.
 * @returns The creature; null if not found.
 */
export function getCreature(content: Content, id: string): Creature | null {
  return content.creatures[indexOfCreature(content, id)] || null;
}

/**
 * Insert a new creature into the content.
 * @param content Content to modify.
 * @param id An ID for the creature to be inserted.
 * @returns String describing an error; an empty string when successful.
 */
export function insertCreature(content: Content, id: string): string {
  if (indexOfCreature(content, id) > -1) {
    return "creature id already exists";
  }

  content.creatures.push({
    id: id,
    name: id,
    description: "",
    sprites: [],
    width: 1,
    height: 1,
    canFly: false,
    healthMin: 0,
    healthMax: 0,
    damageMin: 0,
    damageMax: 0
  });

  return "";
}

/**
 * Delete a creature from the content.
 * @param content Content to modify.
 * @param id ID of the creature to delete.
 * @returns String describing an error; an empty string when successful.
 */
export function deleteCreature(content: Content, id: string): string {
  let index = indexOfCreature(content, id);

  if (index == -1) {
    return "creature id does not exist";
  }

  content.creatures.splice(index, 1);

  return "";
}

/**
 * Find the index of an image in the content.
 * @param content Content to search.
 * @param id ID of the image to find.
 * @returns Index of the image; -1 if not found.
 */
export function indexOfImage(content: Content, id: string): number {
  return content.images.findIndex(elem => elem.id == id);
}

/**
 * Find an image in the content.
 * @param content Content to search.
 * @param id ID of the image to find.
 * @returns The image; null if not found.
 */
export function getImage(content: Content, id: string): Image | null {
  return content.images[indexOfImage(content, id)] || null;
}

/**
 * Insert a new image into the content.
 * @param content Content to modify.
 * @param id An ID for the image to be inserted.
 * @returns String describing an error; an empty string when successful.
 */
export function insertImage(content: Content, id: string): string {
  if (indexOfImage(content, id) > -1) {
    return "image id already exists";
  }

  content.images.push({
    id: id,
    path: ""
  });

  return "";
}

/**
 * Delete an image from the content.
 * @param content Content to modify.
 * @param id ID of the image to delete.
 * @returns String describing an error; an empty string when successful.
 */
export function deleteImage(content: Content, id: string): string {
  let index = indexOfImage(content, id);

  if (index == -1) {
    return "image id does not exist";
  }

  content.images.splice(index, 1);

  return "";
}

/**
 * Find the index of a sprite in the content.
 * @param content Content to search.
 * @param id ID of the sprite to find.
 * @returns Index of the sprite; -1 if not found.
 */
export function indexOfSprite(content: Content, id: string): number {
  return content.sprites.findIndex(elem => elem.id == id);
}

/**
 * Find a sprite in the content.
 * @param content Content to search.
 * @param id ID of the sprite to find.
 * @returns The sprite; null if not found.
 */
export function getSprite(content: Content, id: string): Sprite | null {
  return content.sprites[indexOfSprite(content, id)] || null;
}

/**
 * Insert a new sprite into the content.
 * @param content Content to modify.
 * @param id An ID for the sprite to be inserted.
 * @returns String describing an error; an empty string when successful.
 */
export function insertSprite(content: Content, id: string): string {
  if (indexOfSprite(content, id) > -1) {
    return "sprite id already exists";
  }

  content.sprites.push({
    id: id,
    image: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });

  return "";
}

/**
 * Delete a sprite from the content.
 * @param content Content to modify.
 * @param id ID of the sprite to delete.
 * @returns String describing an error; an empty string when successful.
 */
export function deleteSprite(content: Content, id: string): string {
  let index = indexOfSprite(content, id);

  if (index == -1) {
    return "sprite id does not exist";
  }

  content.sprites.splice(index, 1);

  return "";
}

/**
 * Find the index of a tile in the content.
 * @param content Content to search.
 * @param id ID of the tile to find.
 * @returns Index of the tile; -1 if not found.
 */
export function indexOfTile(content: Content, id: string): number {
  return content.tiles.findIndex(elem => elem.id == id);
}

/**
 * Find a tile in the content.
 * @param content Content to search.
 * @param id ID of the tile to find.
 * @returns The tile; null if not found.
 */
export function getTile(content: Content, id: string): Tile | null {
  return content.tiles[indexOfTile(content, id)] || null;
}

/**
 * Insert a new tile into the content.
 * @param content Content to modify.
 * @param id An ID for the tile to be inserted.
 * @returns String describing an error; an empty string when successful.
 */
export function insertTile(content: Content, id: string): string {
  if (indexOfTile(content, id) > -1) {
    return "tile id already exists";
  }

  content.tiles.push({
    id: id,
    name: id,
    description: "",
    sprites: [],
    isOpaque: false,
    isSolid: false
  });

  return "";
}

/**
 * Delete a tile from the content.
 * @param content Content to modify.
 * @param id ID of the tile to delete.
 * @returns String describing an error; an empty string when successful.
 */
export function deleteTile(content: Content, id: string): string {
  let index = indexOfTile(content, id);

  if (index == -1) {
    return "tile id does not exist";
  }

  content.tiles.splice(index, 1);

  return "";
}

/**
 * Find the index of a world in the content.
 * @param content Content to search.
 * @param id ID of the world to find.
 * @returns Index of the world; -1 if not found.
 */
export function indexOfWorld(content: Content, id: string): number {
  return content.worlds.findIndex(elem => elem.id == id);
}

/**
 * Find a world in the content.
 * @param content Content to search.
 * @param id ID of the world to find.
 * @returns The world; null if not found.
 */
export function getWorld(content: Content, id: string): World | null {
  return content.worlds[indexOfWorld(content, id)] || null;
}

/**
 * Insert a new world into the content.
 * @param content Content to modify.
 * @param id An ID for the world to be inserted.
 * @returns String describing an error; an empty string when successful.
 */
export function insertWorld(content: Content, id: string): string {
  if (indexOfWorld(content, id) > -1) {
    return "world id already exists";
  }

  content.worlds.push({
    id: id,
    name: id,
    chunks: [],
    tilePalette: ["air"]
  });

  return "";
}

/**
 * Delete a world from the content.
 * @param content Content to modify.
 * @param id ID of the world to delete.
 * @returns String describing an error; an empty string when successful.
 */
export function deleteWorld(content: Content, id: string): string {
  let index = indexOfWorld(content, id);

  if (index == -1) {
    return "world id does not exist";
  }

  content.worlds.splice(index, 1);

  return "";
}