import { useEffect, useState } from "react";
import { Room } from "~/src/domain/rooms/Room";
import { infra } from "../infra/getRooms";

export const useRooms = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchRooms = async () => {
      try {
        const roomsData = await infra.getAll();
        return roomsData;

      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      }
    };

    fetchRooms().then((roomsData) => {
      setRooms(roomsData ?? []);
      setLoading(false);
    });
  }, []);
  return { rooms, setRooms, loading };
}