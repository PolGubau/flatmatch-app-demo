import { Room } from "~/src/domain/rooms/Room";

export const roomsMock: Room[] = [
  {
    id: "1",
    name: "Room One",
    description: "This is the first room.",
    createdAt: new Date("2023-01-01T00:00:00Z"),
    updatedAt: new Date("2023-01-02T00:00:00Z"),
    isPublic: true,
  },
  {
    id: "2",
    name: "Room Two",
    description: "This is the second room.",
    createdAt: new Date("2023-02-01T00:00:00Z"),
    updatedAt: new Date("2023-02-02T00:00:00Z"),
    isPublic: false,
  },
  {
    id: "3",
    name: "Room Three",
    description: "This is the third room.",
    createdAt: new Date("2023-03-01T00:00:00Z"),
    updatedAt: new Date("2023-03-02T00:00:00Z"),
    isPublic: true,
  },
];