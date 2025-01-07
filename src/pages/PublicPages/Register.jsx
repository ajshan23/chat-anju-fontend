import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", formData);
            if (response.status === 201) {
                toast.success("Registration successful!");
                navigate("/login");
            } else {
                toast.error("An error occurred!");
            }
        } catch (error) {
            toast(error.response?.data?.message || "An error occurred!");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-700  text-white gap-10">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="px-5 py-2 rounded-md border-4 border-gray-500 text-black"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-5 py-2 rounded-md border-4 border-gray-500 text-black"

                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="px-5 py-2 rounded-md border-4 border-gray-500 text-black"

                />
                <button type="submit" className="px-3 py-2 bg-violet-700 rounded-md">Register</button>
            </form>
        </div>
    );
};

export default Register;
