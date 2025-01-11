import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoCallOutline, IoVideocamOutline, IoSendOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import api from "../apiConfig/api";
import toast from "react-hot-toast";

const ChatScreen = ({ selectedChat, userData }) => {
    const [input, setInput] = useState("");
    const [conversationId, setConversationId] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchMessages = async () => {
        console.log("call is going");

        if (!selectedChat?.userId) return;
        setLoading(true);

        try {
            const response = await api.get(
                `/chat/get-messages-by-conversation-id?recieverId=${selectedChat.userId}`
            );
            console.log(response.data);
            if (response.status === 200) {
                setMessages(response.data.messages);
                setConversationId(response.data.conversationId);
            }
        } catch (error) {
            console.error("Error fetching messages:", error);
        } finally {
            setLoading(false);
        }
    };
    const sendMessage = async () => {
        const payload = { message: input, recieverId: selectedChat.userId }
        if (conversationId) {
            payload.conversationId = conversationId;
        }
        try {
            const response = await api.post("/chat/send-message", payload);
            if (response.status === 201) {
                setConversationId(response.data.conversationId);
                setMessages([...messages, response.data?.newMessage]);
            }
        } catch (error) {
            toast.error("Error sending message");
            console.log(error);

        } finally {
            setInput("");
        }
    }

    useEffect(() => {
        if (selectedChat) {
            fetchMessages();
        }
    }, [selectedChat]);

    if (!selectedChat) {
        return (
            <div style={{ flex: 18 }} className="flex items-center justify-center bg-[#1E1F20] text-white">
                <p>Select a chat to start messaging</p>
            </div>
        );
    }

    return (
        <div style={{ flex: 18 }} className="flex flex-col w-full h-full">
            {/* Chat Header */}
            <div className="bg-[#333537] border-l-2 border-[#1E1F20] h-20 flex items-center justify-between px-4 rounded-b-md">
                <div className="flex items-center gap-2">
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://attic.sh/cp1hqhupj4wih5fzfutey2ns5krq"
                        alt={`${selectedChat.username}'s avatar`}
                    />
                    <div className="ml-2">
                        <div className="text-white text-lg">{selectedChat.username}</div>
                        <div className="text-sm text-gray-200">online</div>
                    </div>
                </div>
                <div className="flex flex-row rounded-md bg-[#1d1e1f]">
                    <div className="flex items-center justify-center p-1.5">
                        <IoVideocamOutline size={25} color="white" />
                    </div>
                    <div className="flex border-l-2 border-[#333537] items-center justify-center p-1.5">
                        <IoCallOutline size={25} color="white" />
                    </div>
                </div>
            </div>

            {/* Chat Content */}
            <div className="w-full h-full bg-[#1E1F20]" style={{ overflowY: "auto" }}>
                <div className="flex flex-col gap-3 h-[90%] px-4 py-2">
                    {loading ? (
                        <p className="text-white">Loading messages...</p>
                    ) : messages.length > 0 ? (
                        messages.map((message, index) => (
                            <div key={index} className={`text-white bg-gray-600 rounded-md p-2 w-fit ${message.sender === userData._id ? "self-end" : "self-start"}`}>
                                {message.text}
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400">No messages yet</p>
                    )}
                </div>
                {/* Chat Input */}
                <div className="w-full h-[10%] border-l-2 mt-auto border-[#1E1F20] bg-[#333537] px-3 py-4 flex items-center gap-2.5">
                    <MdOutlineEmojiEmotions color="white" />
                    <input
                        type="text"
                        className="bg-transparent w-full h-full outline-none text-white"
                        placeholder="Type here"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <IoSendOutline color="white" aria-disabled={!input} onClick={sendMessage} />
                </div>
            </div>
        </div>
    );
};

export default ChatScreen;
