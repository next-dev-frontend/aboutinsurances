import React, { useState } from 'react';
import axios from 'axios';
import slugify from 'slugify';

const ProtectedPage = () => {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [title, setTitle] = useState('');
  const [title2, setTitle2] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [articleContent, setArticleContent] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'your-hardcoded-password' with the desired password
    if (password === '123') {
      setLoggedIn(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  const handleGeneratePage = async () => {
    try {
      const routeName = slugify(title, { lower: true });
      const response = await axios.post(`/api/generatePage/${routeName}`, {
        title,
        title2,
        paragraph,
        articleContent,
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error generating the page.');
    }
  };

  const clearAll = async () => {
    setTitle('');
    setTitle2('');
    setParagraph('');
    setArticleContent('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {loggedIn ? (
        <div>
          <div>
            <h3 className="text-3xl font-semibold mb-4">Create Dynamic Page</h3>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the article title"
              className="border border-gray-300 p-2 mb-2 rounded-lg w-full"
            />
            <input
              type="text"
              value={title2}
              onChange={(e) => setTitle2(e.target.value)}
              placeholder="Enter the article title template"
              className="border border-gray-300 p-2 mb-2 rounded-lg w-full"
            />
            <input
              type="text"
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
              placeholder="Enter a description"
              className="border border-gray-300 p-2 mb-2 rounded-lg w-full"
            />
            <textarea
              value={articleContent}
              onChange={(e) => setArticleContent(e.target.value)}
              placeholder="Enter the article content (HTML format)"
              className="border border-gray-300 p-2 mb-2 rounded-lg w-full"
              rows="10"
            />
            <div className="flex justify-between">
              <button
                onClick={handleGeneratePage}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Generate Page
              </button>
              <button
                onClick={clearAll}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-2xl font-semibold mb-4">Please enter the password</h1>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="border border-gray-300 p-2 mb-2 rounded-lg w-full"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ProtectedPage;