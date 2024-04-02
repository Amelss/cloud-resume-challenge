/* eslint-disable react/prop-types */


export default function Card({url, title, description, image}) {
  return (
      <div>
          <a href={url} target="blank">
      <div className="  overflow-hidden px-2 rounded 2xl:max-w-xl 2xl:mx-auto">
        <img className="w-full rounded-lg xl:w-80 xl:mx-auto" src={image} alt="Sunset in the mountains" />
        <div className="px-2 py-2 xl:text-center">
          <div className="font-bold text-base mb-2 xl:text-xl">{title}</div>
          <p className="text-sm">{description}</p>
        </div>
       
              </div>
          </a>
    </div>
  );
}
