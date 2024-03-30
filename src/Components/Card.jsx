/* eslint-disable react/prop-types */


export default function Card({url, title, description, image, languages }) {
  return (
      <div>
          <a href={url} target="blank">
      <div className="max-w-sm overflow-hidden">
        <img className="w-full" src={image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {languages.map((language, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {language}
            </span>
          ))}
        </div>
              </div>
          </a>
    </div>
  );
}
