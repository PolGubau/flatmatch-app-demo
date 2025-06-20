import { Room } from "~/src/domain/rooms/Room";
import { roomsMock } from "../__mocks__/rooms.mock";

const getAll = async (): Promise<Room[]> => {
  // Simulate an API call to fetch rooms
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(roomsMock);
    }, 3000); // Simulate a 300ms delay
  });
}

const getById = async (id: string): Promise<Room | undefined> => {
  // Simulate an API call to fetch a room by ID
  return new Promise((resolve) => {
    setTimeout(() => {
      const room = roomsMock.find((room) => room.id === id);
      resolve(room);
    }, 300); // Simulate a 300ms delay
  });
}

export const infra = {
  getAll,
  getById,
};
