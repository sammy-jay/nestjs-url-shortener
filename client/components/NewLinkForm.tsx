import { useState } from 'react';
import axios from 'axios';
import { UrlForm } from '../interface/url.interface';

const URL =
  process.env.NEXT_PUBLIC_API_URL?.toString() || 'http://localhost:3000';

const NewLinkForm = () => {
  const [urlForm, setUrlForm] = useState<UrlForm>({
    title: '',
    longUrl: '',
  });

  const handleSubmit = async () => {
    if (urlForm.title && urlForm.longUrl) {
      const data = await axios.post(URL, {
        longUrl: urlForm.longUrl,
        title: urlForm.title,
      });
    }
  };

  return (
    <div className=" bg-white p-6 rounded-lg">
      <h1 className="font-semibold text-lg mb-4">Shorten a url</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="sr-only">
            Title
          </label>
          <input
            type="title"
            value={urlForm?.title}
            onChange={(e) => setUrlForm({ ...urlForm, title: e.target.value })}
            name="title"
            id="title"
            placeholder="Descriptive title here"
            className="bg-gray-100 border-2 w-full px-3 py-2 rounded-lg outline-gray-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="sr-only">
            Url
          </label>
          <input
            type="body"
            value={urlForm?.longUrl}
            onChange={(e) =>
              setUrlForm({ ...urlForm, longUrl: e.target.value })
            }
            id="body"
            placeholder="Long url here"
            className="bg-gray-100 border-2 w-full px-3 py-2 rounded-lg outline-gray-400"
          />
        </div>
        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-3 rounded-lg font-medium w-full"
          >
            Shorten url
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewLinkForm;
