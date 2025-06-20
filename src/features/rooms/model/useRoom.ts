import { useEffect, useState } from "react";
import { Room } from "~/src/domain/rooms/Room";
import { infra } from "../infra/getRooms";

export const useRoom = (id: string) => {
  const [room, setRoom] = useState<Room | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchRoom = async () => {
      try {
        const roomData = await infra.getById(id);
        setRoom(roomData);
      } catch (error) {
        console.error("Failed to fetch room:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  return { room, loading };
};
