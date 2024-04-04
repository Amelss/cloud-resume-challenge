

export default function Skills() {
  return (
    <div id="skills">
       <h1 className="text-center text-3xl font-bold text-blue-300 mb-5 pt-4 xl:text-4xl">
       Skills
      </h1>
      <div className="grid grid-cols-4 gap-y-6 xl:grid-cols-8 px-3 py-9 mx-auto">
        <img src="/assets/html-5.png" alt="html logo" className="skills-logo"/>
        <img src="/assets/css-3.png" alt="css logo" className="skills-logo"/>
        <img src="/assets/js.png" alt="javascript logo" className="skills-logo w-16" />
        <img src="/assets/atom.png" alt="react logo" className="skills-logo"/>
        <img src="/assets/next-js.svg" alt="nextjs logo" className="w-14 skills-logo" />
        <img src="/assets/contentful.svg" alt="contentful logo" className="w-12 skills-logo" />
        <img src="/assets/shopify.png" alt="shopify logo"className="skills-logo w-14" />
        <img src="/assets/aws.png" alt="figma logo" className="skills-logo " />
       
      </div>
    </div>
  );
}
