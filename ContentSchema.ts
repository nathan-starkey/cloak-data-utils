/** Represents a content object, as defined in the schema. */
export type Content = {
  creatures: Creature[];
  images: Image[];
  sprites: Sprite[];
  tiles: Tile[];
  worlds: World[];
};

/** Represents a creature object, as defined in the schema. */
export type Creature = {
  id: string;
  name: string;
  description: string;
  sprites: string[];
  width: number;
  height: number;
  canFly: boolean;
  healthMin: number;
  healthMax: number;
  damageMin: number;
  damageMax: number;
};

/** Represents an image object, as defined in the schema. */
export type Image = {
  id: string;
  path: string;
};

/** Represents a sprite object, as defined in the schema. */
export type Sprite = {
  id: string;
  image: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

/** Represents a tile object, as defined in the schema. */
export type Tile = {
  id: string;
  name: string;
  description: string;
  sprites: string[];
  isOpaque: boolean;
  isSolid: boolean;
};

/** Represents a world object, as defined in the schema. */
export type World = {
  id: string;
  name: string;
  chunks: Chunk[];
  tilePalette: string[];
};

/** Represents a chunk object, as defined in the schema. */
export type Chunk = {
  data: number[];
  x: number;
  y: number;
};

/**
 * Append errors of a content object to an array.
 * @param content Content to validate.
 * @param errors Array to append errors.
 * @param source String to suffix errors.
 * @returns Array of errors.
 */
export function getContentError(content: any, errors: string[] = [], source: string = ""): string[] {
  if (!content) {
    errors.push("content is not an object" + source);
    return errors;
  }

  if (Object.keys(content).length > 5) {
    errors.push("content has too many keys" + source);
    return errors;
  }

  if (!Array.isArray(content.creatures) || !content.creatures.every((elem: any, index: number) => getCreatureError(elem, errors, `\n  at content.creatures[${index}]`).length == 0)) {
    errors.push("content.creatures is not an array of Creatures" + source);
    return errors;
  }

  if (!Array.isArray(content.images) || !content.images.every((elem: any, index: number) => getImageError(elem, errors, `\n  at content.images[${index}]`).length == 0)) {
    errors.push("content.images is not an array of Images" + source);
    return errors;
  }

  if (!Array.isArray(content.sprites) || !content.sprites.every((elem: any, index: number) => getSpriteError(elem, errors, `\n  at content.sprites[${index}]`).length == 0)) {
    errors.push("content.sprites is not an array of Sprites" + source);
    return errors;
  }

  if (!Array.isArray(content.tiles) || !content.tiles.every((elem: any, index: number) => getTileError(elem, errors, `\n  at content.tiles[${index}]`).length == 0)) {
    errors.push("content.tiles is not an array of Tiles" + source);
    return errors;
  }

  if (!Array.isArray(content.worlds) || !content.worlds.every((elem: any, index: number) => getWorldError(elem, errors, `\n  at content.worlds[${index}]`).length == 0)) {
    errors.push("content.worlds is not an array of Worlds" + source);
    return errors;
  }

  return errors;
}

/**
 * Append errors of a creature object to an array.
 * @param content Creature to validate.
 * @param errors Array to append errors.
 * @param source String to suffix errors.
 * @returns Array of errors.
 */
export function getCreatureError(creature: any, errors: string[] = [], source: string = ""): string[] {
  if (!creature) {
    errors.push("creature is not an object" + source);
    return errors;
  }

  if (Object.keys(creature).length > 11) {
    errors.push("creature has too many keys" + source);
    return errors;
  }

  if (typeof creature.id != "string") {
    errors.push("creature.id is not a string" + source);
    return errors;
  }

  if (typeof creature.name != "string") {
    errors.push("creature.name is not a string" + source);
    return errors;
  }

  if (typeof creature.description != "string") {
    errors.push("creature.description is not a string" + source);
    return errors;
  }

  if (!Array.isArray(creature.sprites) || !creature.sprites.every((elem: any) => typeof elem == "string")) {
    errors.push("creature.sprites is not an array of strings" + source);
    return errors;
  }

  if (!Number.isInteger(creature.width) || creature.width < 0) {
    errors.push("creature.width is not an unsigned integer" + source);
    return errors;
  }

  if (!Number.isInteger(creature.height) || creature.height < 0) {
    errors.push("creature.height is not an unsigned integer" + source);
    return errors;
  }

  if (typeof creature.canFly != "boolean") {
    errors.push("creature.canFly is not a boolean" + source);
    return errors;
  }

  if (!Number.isInteger(creature.healthMin) || creature.healthMin < 0) {
    errors.push("creature.healthMin is not an unsigned integer" + source);
    return errors;
  }

  if (!Number.isInteger(creature.healthMax) || creature.healthMax < 0) {
    errors.push("creature.healthMax is not an unsigned integer" + source);
    return errors;
  }

  if (!Number.isInteger(creature.damageMin) || creature.damageMin < 0) {
    errors.push("creature.damageMin is not an unsigned integer" + source);
    return errors;
  }

  if (!Number.isInteger(creature.damageMax) || creature.damageMax < 0) {
    errors.push("creature.damageMax is not an unsigned integer" + source);
    return errors;
  }

  return errors;
}

/**
 * Append errors of an image object to an array.
 * @param content Image to validate.
 * @param errors Array to append errors.
 * @param source String to suffix errors.
 * @returns Array of errors.
 */
export function getImageError(image: any, errors: string[] = [], source: string = ""): string[] {
  if (!image) {
    errors.push("image is not an object" + source);
    return errors;
  }

  if (Object.keys(image).length > 2) {
    errors.push("image has too many keys" + source);
    return errors;
  }

  if (typeof image.id != "string") {
    errors.push("image.id is not a string" + source);
    return errors;
  }

  if (typeof image.path != "string") {
    errors.push("image.path is not a string" + source);
    return errors;
  }

  return errors;
}

/**
 * Append errors of a sprite object to an array.
 * @param content Sprite to validate.
 * @param errors Array to append errors.
 * @param source String to suffix errors.
 * @returns Array of errors.
 */
export function getSpriteError(sprite: any, errors: string[] = [], source: string = ""): string[] {
  if (!sprite) {
    errors.push("sprite is not an object" + source);
    return errors;
  }

  if (Object.keys(sprite).length > 6) {
    errors.push("sprite has too many keys" + source);
    return errors;
  }

  if (typeof sprite.id != "string") {
    errors.push("sprite.id is not a string" + source);
    return errors;
  }

  if (typeof sprite.image != "string") {
    errors.push("sprite.image is not a string" + source);
    return errors;
  }
  
  if (!Number.isInteger(sprite.x) || sprite.x < 0) {
    errors.push("sprite.x is not an unsigned integer" + source);
    return errors;
  }

  if (!Number.isInteger(sprite.y) || sprite.y < 0) {
    errors.push("sprite.y is not an unsigned integer" + source);
    return errors;
  }

  if (!Number.isInteger(sprite.width) || sprite.width < 0) {
    errors.push("sprite.width is not an unsigned integer" + source);
    return errors;
  }

  if (!Number.isInteger(sprite.height) || sprite.height < 0) {
    errors.push("sprite.damageMax is not an unsigned integer" + source);
    return errors;
  }

  return errors;
}

/**
 * Append errors of a tile object to an array.
 * @param content Tile to validate.
 * @param errors Array to append errors.
 * @param source String to suffix errors.
 * @returns Array of errors.
 */
export function getTileError(tile: any, errors: string[] = [], source: string = ""): string[] {
  if (!tile) {
    errors.push("tile is not an object" + source);
    return errors;
  }

  if (Object.keys(tile).length > 6) {
    errors.push("tile has too many keys" + source);
    return errors;
  }

  if (typeof tile.id != "string") {
    errors.push("tile.id is not a string" + source);
    return errors;
  }

  if (typeof tile.name != "string") {
    errors.push("tile.name is not a string" + source);
    return errors;
  }

  if (typeof tile.description != "string") {
    errors.push("tile.description is not a string" + source);
    return errors;
  }
  
  if (!Array.isArray(tile.sprites) || !tile.sprites.every((elem: any) => typeof elem == "string")) {
    errors.push("tile.sprites is not an array of strings" + source);
    return errors;
  }

  if (typeof tile.isOpaque != "boolean") {
    errors.push("tile.isOpaque is not a boolean" + source);
    return errors;
  }

  if (typeof tile.isSolid != "boolean") {
    errors.push("tile.isSolid is not a boolean" + source);
    return errors;
  }

  return errors;
}

/**
 * Append errors of a world object to an array.
 * @param content World to validate.
 * @param errors Array to append errors.
 * @param source String to suffix errors.
 * @returns Array of errors.
 */
export function getWorldError(world: any, errors: string[] = [], source: string = ""): string[] {
  if (!world) {
    errors.push("world is not an object" + source);
    return errors;
  }

  if (Object.keys(world).length > 4) {
    errors.push("world has too many keys" + source);
    return errors;
  }

  if (typeof world.id != "string") {
    errors.push("world.id is not a string" + source);
    return errors;
  }

  if (typeof world.name != "string") {
    errors.push("world.name is not a string" + source);
    return errors;
  }

  if (!Array.isArray(world.chunks) || !world.chunks.every((elem: any, index: number) => getChunkError(elem, errors, `\n  at world.chunks[${index}]`).length == 0)) {
    errors.push("world.chunks is not an array of Chunks" + source);
    return errors;
  }

  if (!Array.isArray(world.tilePalette) || !world.tilePalette.every((elem: any) => typeof elem == "string")) {
    errors.push("world.tilePalette is not an array of strings" + source);
    return errors;
  }

  return errors;
}

/**
 * Append errors of a chunk object to an array.
 * @param content Chunk to validate.
 * @param errors Array to append errors.
 * @param source String to suffix errors.
 * @returns Array of errors.
 */
export function getChunkError(chunk: any, errors: string[] = [], source: string = ""): string[] {
  if (!chunk) {
    errors.push("chunk is not an object" + source);
    return errors;
  }

  if (Object.keys(chunk).length > 3) {
    errors.push("chunk has too many keys" + source);
    return errors;
  }

  if (!Array.isArray(chunk.data) || !chunk.data.every((elem: any) => Number.isInteger(elem) && elem >= 0)) {
    errors.push("chunk.data is not an array of unsigned integers" + source);
    return errors;
  }

  if (!Number.isInteger(chunk.x)) {
    errors.push("chunk.x is not an integer" + source);
    return errors;
  }

  if (!Number.isInteger(chunk.y)) {
    errors.push("chunk.y is not an integer" + source);
    return errors;
  }

  return errors;
}

/**
 * Parse a value as a content object; throws a TypeError when the input is invalid.
 * @param content Content to parse.
 * @param errors Array to append errors.
 * @param source String to suffix errors.
 * @returns The parsed content.
 */
export function parseContent(content: any, errors: string[] = [], source: string = ""): Content {
  if (getContentError(content, errors, source).length > 0) {
    throw new TypeError(errors.join("\n"));
  }

  return content as Content;
}