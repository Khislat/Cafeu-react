import React, { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
	throw new Error('❌ VITE_API_URL is not defined! Tekshiring .env faylni.');
}

const socket: Socket = io(API_URL, {
	withCredentials: true,
});
export const SocketContext = createContext<Socket>(socket);

interface SocketProviderProps {
	children: React.ReactNode;
}
export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
	return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
