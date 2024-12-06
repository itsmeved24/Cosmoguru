import React, { useState } from 'react';
import axios from 'axios';
import EncryptButton from './EncryptButton';

const Bot = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [report, setReport] = useState('');

    const sendToGemini = () => {
        if (!name || !dob) {
            setReport('Please enter your name and date of birth.');
            return;
        }

        const apiKey = 'AIzaSyBsKNHO9eGxbK2c67z4uGYQmZcvNMJ5uOE';
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

        const requestBody = {
            contents: [
                {
                    parts: [
                        {
                            text: `User Name: ${name}\nDate of Birth: ${dob}\nFrom the DOB detect the Star sign of the user then using that star sign tell today's horoscope for that sign, don't take exact star sign take approximate, don't include (Note:  Horoscopes are for entertainment purposes only.  Their accuracy is not guaranteed or any type of warnings don't include, don't make it lenghty directly get to the point but explain how would that person have the day further and also tell the colored that is favored to be worn that day. Give the answer in points and also don't include useless symbols. keep it such that it's on point and is easy for the user to understand and also give the constellation of the stars for the day and the stones that suit the person. At the end don't bold the text or anything simply provide with plain text`,
                        },
                    ],
                },
            ],
        };

        axios.post(apiUrl, requestBody)
            .then((response) => {
                const reportData = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No data received.';
                setReport(reportData);
            })
            .catch((error) => {
                console.error('Error:', error.response?.data || error.message || error);
                setReport('Failed to fetch horoscope. Please try again later.');
            });
    };

    return (
        <div className="h-96 text-white flex items-start justify-center">
            <div className="relative w-full max-w-md rounded-lg">
                <h2 className="text-3xl font-extrabold text-center tracking-wider glow text-zinc-400">( ͡° ͜ʖ ͡°)</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-lg mb-2 text-zinc-400">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full p-2 rounded-lg bg-zinc-800 text-zinc-400 border border-gray-600 focus:ring-2 focus:ring-zinc-400"
                        />
                    </div>
                    <div>
                        <label className="block text-lg mb-2 text-zinc-400">Date of Birth:</label>
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="w-full p-2 rounded-lg bg-zinc-800 text-zinc-400 border border-gray-600 focus:ring-2 focus:ring-zinc-400"
                        />
                    </div>
                    <button onClick={sendToGemini} className="grid place-content-center bg-zinc-800 w-full p-2">
                        <EncryptButton />
                    </button>
                </div>
                <div className="mt-6">
                    {report && (
                        <div className="relative">
                            <button
                                onClick={() => setReport('')}
                                className="absolute top-0 right-0 text-xl text-red-500 hover:text-red-700 p-2"
                            >
                                &times;
                            </button>
                            <div
                                className="text-lg bg-zinc-800 p-4 rounded-lg max-h-96 overflow-y-auto text-white border border-gray-700 glow"
                                style={{
                                    whiteSpace: 'pre-wrap',
                                    wordWrap: 'break-word',
                                    overflowWrap: 'break-word',
                                }}
                            >
                                {report}
                            </div>
                        </div>
                    )}
                    {!report && <p className="text-lg text-center animate-pulse">Waiting for horoscope...</p>}
                </div>
            </div>
        </div>
    );
};

export default Bot;
