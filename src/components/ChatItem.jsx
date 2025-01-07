

const ChatItem = ({ setSelectedChat, user }) => {
    return (
        <div className='px-2 py-2 flex gap-3 items-center relative rounded-md hover:bg-[#3d4043]' onClick={() => setSelectedChat(user?.name)}>
            <img className='w-12 h-12 rounded-full' src={user?.image} alt="" />
            <div className='flex flex-col text-white'>

                <div className='text-lg'>{user?.name}</div>
                <div className='text-sm text-gray-200'>{user?.message}</div>
                <div className='absolute right-2 top-2 text-sm'>{user?.time}</div>
            </div>
        </div>

    )
}

export default ChatItem