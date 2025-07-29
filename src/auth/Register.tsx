import React, { useState } from "react";
import axios from "axios";

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        username: "",
        fullName: "",
        email: "",
        password: "",
        avatar: null as File | null,
        coverImage: null as File | null,
    });
    console.log(formData, "formData");


    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const data = new FormData();
        data.append("username", formData.username);
        data.append("fullName", formData.fullName);
        data.append("email", formData.email);
        data.append("password", formData.password);
        if (formData.avatar) data.append("avatar", formData.avatar);
        if (formData.coverImage) data.append("coverImage", formData.coverImage);

        try {
            const res = await axios.post("http://localhost:8000/api/v1/users/register", data);
            setMessage("User registered successfully!");
            console.log(res.data);
        } catch (err: any) {
            setMessage(err.response?.data?.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Register</h2>

                {message && (
                    <div className="mb-4 text-sm text-center text-red-500">{message}</div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="w-full px-4 py-2 border rounded-md"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border rounded-md"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-md"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-md"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <div>
                        <label className="block text-sm mb-1 text-gray-600">Avatar</label>
                        <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1 text-gray-600">Cover Image</label>
                        <input
                            type="file"
                            name="coverImage"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
