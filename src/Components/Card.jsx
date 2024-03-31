/* eslint-disable react/prop-types */


export default function Card({url, title, description, image, languages }) {
  return (
      <div>
          <a href={url} target="blank">
      <div className="  overflow-hidden px-4 rounded 2xl:max-w-xl 2xl:mx-auto">
        <img className="w-full rounded-lg" src={image} alt="Sunset in the mountains" />
        <div className="px-2 py-2">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-base">{description}</p>
        </div>
        <div className="px-2 pt-2 pb-2">
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
