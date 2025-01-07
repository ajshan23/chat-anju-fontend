
import { MdOutlineEmojiEmotions, } from "react-icons/md";
import { } from "react-icons/fa";
import { IoCallOutline, IoVideocamOutline, IoSendOutline } from "react-icons/io5";
const ChatScreen = ({ selectedChat }) => {
    return (
        <div style={{ flex: 18 }} className='flex flex-col w-full h-full'>
            <div className={`bg-[#333537] border-l-2 border-[#1E1F20] h-20 flex items-center justify-between px-4 rounded-b-md ${selectedChat ? "" : "hidden"}`}>
                <div className='flex items-center gap-2'>
                    <img className='w-10 h-10 rounded-full' src="https://attic.sh/cp1hqhupj4wih5fzfutey2ns5krq" alt="" />
                    <div className='ml-2'>
                        <div className='text-white text-lg'>{selectedChat}</div>
                        <div className='text-sm text-gray-200'>online</div>
                    </div>
                </div>
                <div className='flex flex-row rounded-md bg-[#1d1e1f]'>
                    <div className='flex items-center justify-center p-1.5'>
                        <IoVideocamOutline size={25} color='white' />
                    </div>
                    <div className='flex border-l-2 border-[#333537] items-center justify-center p-1.5'>
                        <IoCallOutline size={25} color='white' />
                    </div>
                </div>
            </div>

            <div className={`w-full h-full bg-[#1E1F20] ${selectedChat ? "" : "hidden"}`} style={{ overflowY: 'auto', }}>
                {/* Chat messages and content */}
                <div className='flex flex-col gap-3 h-[90%]'>
                    {/* Messages will go here */}
                </div>
                <div className='w-full h-[10%] border-l-2 mt-auto border-[#1E1F20] bg-[#333537] px-3 py-4 flex items-center gap-2.5'>
                    <MdOutlineEmojiEmotions color="white" />
                    <input
                        type="text"
                        className="bg-transparent w-full h-full outline-none text-white"
                        placeholder="Type here"
                    />
                    <IoSendOutline color="white" />
                </div>
            </div>
        </div>
    )
}

export default ChatScreen