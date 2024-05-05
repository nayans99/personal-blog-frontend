"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const NewBlog = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Assuming you have an API endpoint for creating new blog posts
            const response = await fetch('http://127.0.0.1:5000/blog/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, body }),
            });
            if (response.ok) {
                router.push('/'); // Redirect to blog list page after successful creation
            } else {
                console.error('Failed to create blog:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-8 text-center">Create New Blog Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
                        <input
                            type="text"
                            id="title"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-8">
                        <label htmlFor="body" className="block text-gray-700 font-bold mb-2">Blog</label>
                        <textarea
                            id="body"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            rows={6}
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Create Blog
                    </button>
                </form>
            </div>
        </div>
    );
};


export default NewBlog;
