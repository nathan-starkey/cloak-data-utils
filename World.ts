import { World, Chunk } from "./ContentSchema";

export const CHUNK_WIDTH = 32;

export const CHUNK_HEIGHT = 32;

export const TILE_WIDTH = 10;

export const TILE_HEIGHT = 10;

/**
 * Find the index of a chunk in a world.
 * @param world World to search.
 * @param chunkX X coordinate of the chunk location to find.
 * @param chunkY Y coordinate of the chunk location to find.
 * @returns Index of the chunk; -1 if not found.
 */
export function indexOfChunk(world: World, chunkX: number, chunkY: number) {
  return world.chunks.findIndex(elem => elem.x == chunkX && elem.y == chunkY);
}

/**
 * Find a chunk in a world.
 * @param world World to search.
 * @param chunkX Chunk location to find.
 * @param chunkY Chunk location to find.
 * @returns The chunk; null if not found.
 */
export function getChunk(world: World, chunkX: number, chunkY: number): Chunk | null {
  return world.chunks[indexOfChunk(world, chunkX, chunkY)] || null;
}

/**
 * Insert a new chunk into a world.
 * @param world World to modify.
 * @param chunkX Chunk location for the chunk to be inserted.
 * @param chunkY Chunk location for the chunk to be inserted.
 * @returns String describing an error; an empty string when successful.
 */
export function insertChunk(world: World, chunkX: number, chunkY: number): string {
  if (indexOfChunk(world, chunkX, chunkY) > -1) {
    return "chunk x y already exists";
  }

  if (!Number.isInteger(chunkX) || !Number.isInteger(chunkY)) {
    return "chunk x y is not an integer";
  }

  world.chunks.push({
    data: new Array(CHUNK_WIDTH * CHUNK_HEIGHT).fill(0),
    x: chunkX,
    y: chunkY
  });

  return "";
}

/**
 * Delete a chunk from a world.
 * @param world World to modify.
 * @param chunkX Chunk location of the chunk to delete.
 * @param chunkY Chunk location of the chunk to delete.
 * @returns String describing an error; an empty string when successful.
 */
export function deleteChunk(world: World, chunkX: number, chunkY: number): string {
  let index = indexOfChunk(world, chunkX, chunkY);

  if (index == -1) {
    return "chunk x y does not exist";
  }

  world.chunks.splice(index, 1);

  return "";
}

/**
 * Find the index of a tile in a world's tilePalette.
 * @param world World to access.
 * @param tileId ID of the tile to find.
 * @returns Index of the tile ID; -1 if not found.
 */
export function indexOfTilePaletteEntry(world: World, tileId: string) {
  return world.tilePalette.indexOf(tileId);
}

/**
 * Insert a tile into a world's tilePalette if it doesn't already exist there.
 * @param world World to modify.
 * @param tileId ID of the tile to insert.
 * @returns Index of the tile ID in the tilePalette.
 */
export function insertTilePaletteEntry(world: World, tileId: string): number {
  let index = indexOfTilePaletteEntry(world, tileId);

  if (index == -1) {
    index = world.tilePalette.push(tileId) - 1;
  }
  
  return index;
}

export function removeUnusedTilePaletteEntries(world: World) {
  // TODO: Implement this
  throw new Error("not implemented");
}

export function removeDuplicateTilePaletteEntries(world: World) {
  // TODO: Implement this
  throw new Error("not implemented");
}

/**
 * Remove empty chunks in a world.
 * @param world World to modify.
 */
export function removeEmptyChunks(world: World) {
  for (let i = 0; i < world.chunks.length; ++i) {
    let chunk = world.chunks[i];

    if (!chunk.data.every(elem => world.tilePalette[elem] == "air")) {
      continue;
    }

    world.chunks.splice(i, 1);
    --i;
  }
}