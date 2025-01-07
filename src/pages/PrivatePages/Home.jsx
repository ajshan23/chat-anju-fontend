import { useEffect, useState } from 'react';
import api from '../../apiConfig/api';
import { FaWhatsapp } from "react-icons/fa";
import { MdSort } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoSearch, IoChatbubbleEllipsesOutline, IoCallOutline, } from "react-icons/io5";
import { RiChatHistoryLine } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import ChatItem from '../../components/ChatItem';
import ChatScreen from '../../components/ChatScreen';

const Home = () => {
    const [userData, setUserData] = useState({});
    const [selectedOption, setSelectedOption] = useState('chats');
    const [selectedChat, setSelectedChat] = useState(null);

    console.log("selectedChat", selectedChat);

    const getDetails = async () => {
        try {
            const response = await api.get("/auth/me");
            if (response.status === 200) {
                console.log(response.data);
                setUserData(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDetails();
    }, []);

    // Sample data for 10 users
    const users = [
        {
            id: 1,
            name: "Uncle Bun",
            message: "Hello po po",
            time: "12:00",
            image: "https://attic.sh/cp1hqhupj4wih5fzfutey2ns5krq"
        },
        {
            id: 2,
            name: "Aunt May",
            message: "How are you?",
            time: "12:15",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16aVWfFhTjy_HY56bQcpM3GHh_0x2q1z38Q&s"
        },
        {
            id: 3,
            name: "John Doe",
            message: "See you soon!",
            time: "12:30",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16aVWfFhTjy_HY56bQcpM3GHh_0x2q1z38Q&s"
        },
        {
            id: 4,
            name: "Jane Smith",
            message: "Good morning",
            time: "12:45",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHO4hmpY7IFVdd-lYIbHpNyd4Z77lYvOxgBg&s"
        },
        {
            id: 5,
            name: "Chris Evans",
            message: "Let's catch up",
            time: "01:00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16aVWfFhTjy_HY56bQcpM3GHh_0x2q1z38Q&s"
        },
        {
            id: 6,
            name: "Bruce Wayne",
            message: "Check this out!",
            time: "01:15",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHO4hmpY7IFVdd-lYIbHpNyd4Z77lYvOxgBg&s"
        },
        {
            id: 7,
            name: "Clark Kent",
            message: "Got it, thanks!",
            time: "01:30",
            image: "https://attic.sh/cp1hqhupj4wih5fzfutey2ns5krq"
        },
        {
            id: 8,
            name: "Diana Prince",
            message: "I'll join later",
            time: "01:45",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHO4hmpY7IFVdd-lYIbHpNyd4Z77lYvOxgBg&s"
        },
        {
            id: 9,
            name: "Tony Stark",
            message: "Meeting at 3?",
            time: "02:00",
            image: "https://attic.sh/cp1hqhupj4wih5fzfutey2ns5krq"
        },
        {
            id: 10,
            name: "Steve Rogers",
            message: "On my way",
            time: "02:15",
            image: "https://attic.sh/cp1hqhupj4wih5fzfutey2ns5krq"
        }
    ];


    return (
        <div className='flex flex-col h-screen w-screen bg-[#1E1F20]'>
            <div className='bg-[#1E1F20] text-white px-10 py-2'>
                <div className='flex gap-3'><FaWhatsapp size={25} color='lightgreen' />Whatsapp</div>
            </div>
            <div className='flex flex-row h-full w-screen'>
                <div style={{ flex: 1 }} className='h-full w-full flex flex-col  gap-5 pt-2 items-center bg-[#1E1F20] text-white'>
                    <CgDetailsMore size={20} color='gray' />
                    <IoChatbubbleEllipsesOutline size={20} color='gray' onClick={() => setSelectedOption("chats")} />
                    <IoCallOutline size={20} color='gray' onClick={() => setSelectedOption("contacts")} />
                    <RiChatHistoryLine size={20} color='gray' />
                </div>
                {selectedOption === "chats" ? (
                    <div style={{ flex: 8 }} className='bg-[#333537] rounded-tl-xl px-3 pt-4'>
                        <div className='flex text-white text-lg justify-between items-center pb-4'>
                            <div>Chats</div>
                            <div className='flex gap-5 items-center'>
                                <div><FaEdit size={20} color='white' /></div>
                                <div><MdSort size={20} color='white' /></div>
                            </div>
                        </div>
                        <div className="group w-full bg-[#1E1F20] rounded-xl px-3 py-2 flex items-center gap-2.5 group-focus-within:border-b-2 group-focus-within:border-green-600">
                            <IoSearch color="white" />
                            <input
                                type="text"
                                className="bg-transparent w-full h-full outline-none text-white"
                                placeholder="search here"
                            />
                        </div>

                        <div className='flex flex-col gap-3 mt-4 overflow-y-auto' style={{ maxHeight: 'calc(100vh - 200px)' }}>
                            {
                                users.map((user, index) => (
                                    <ChatItem setSelectedChat={setSelectedChat} key={index} user={user} />
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div style={{ flex: 8 }} className='bg-[#333537] rounded-t-xl px-3 pt-4'>
                        <div className='flex text-white text-lg justify-between items-center pb-4'>
                            <div onClick={() => console.log("clicked contacts")}>Contacts</div>
                        </div>
                        <div className="group w-full bg-[#1E1F20] rounded-xl px-3 py-2 flex items-center gap-2.5 group-focus-within:border-b-2 group-focus-within:border-green-600">
                            <IoSearch color="white" />
                            <input
                                type="text"
                                className="bg-transparent w-full h-full outline-none text-white"
                                placeholder="search here"
                            />
                        </div>

                        <div className='flex flex-col gap-3 mt-4 overflow-y-auto' style={{ maxHeight: 'calc(100vh - 200px)' }}>
                            {
                                users.map((user, index) => (
                                    <ChatItem setSelectedChat={setSelectedChat} key={index} user={user} />
                                ))
                            }
                        </div>
                    </div>
                )}

                <ChatScreen selectedChat={selectedChat} />
            </div>
        </div>
    );
};

export default Home;
