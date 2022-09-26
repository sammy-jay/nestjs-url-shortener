import { IUrl } from '../interface/url.interface';

const SingleUrl = (url: IUrl) => {
  return (
    <div className=" bg-white p-3 rounded-lg my-3 flex flex-col space-y-2">
      <h2 className="hover:underline font-medium">
        <a href={url.shortUrl} target="_blank" rel="noopener noreferrer">
          {url.title}
        </a>
      </h2>
      <span className="w-full rounded-md px-3 py-2 text-white bg-gradient-to-r from-blue-400 to-blue-500">
        {url.shortUrl}
      </span>
      <span className="text-gray-400 text-xs text-right">{url.longUrl}</span>
    </div>
  );
};

export default SingleUrl;
