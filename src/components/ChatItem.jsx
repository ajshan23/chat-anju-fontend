

const ChatItem = ({ setSelectedChat, user, mode, setSelectedOption, isOnline }) => {
    return (
        <div className='px-2 py-2 flex gap-3 items-center relative rounded-md hover:bg-[#3d4043]' onClick={() => { setSelectedChat({ username: mode === "chats" ? user?.otherUser?.username : user?.username, conversationId: mode === "chats" ? user?._id : "", userId: mode === "chats" ? user?.otherUser?._id : user?._id }); setSelectedOption("chats") }}>
            <img className='relative w-12 h-12 rounded-full' src={user?.image} alt="" />
            {isOnline && <div className=" absolute p-1  bottom-3 rounded-full bg-green-800 "></div>}
            <div className='flex flex-col text-white'>

                <div className='text-lg'>{mode === "chats" ? user?.otherUser?.username : user?.username}</div>

                {mode === "chats" && (<>
                    <div className='text-sm text-gray-200'>{user?.lastMessage?.text}</div>
                    <div className='absolute right-2 top-2 text-sm'>{user?.time}</div></>)}
            </div>

        </div>

    )
}

export default ChatItem