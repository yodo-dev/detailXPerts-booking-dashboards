import { useQuery } from "react-query";
import {ChatSupportGet,ChatSupportMessages} from "../Api/ChatSupport"

export const useChat = () => {
  return useQuery({
    queryKey: ['chatGetPeople'], // this enables caching per set of params
    queryFn: () => ChatSupportGet(),
  });
};

export const useChatAllMessages = (id) => {
  return useQuery({
    queryKey: ['chatMessages',id],
    queryFn: () => ChatSupportMessages(id),
  });
};

