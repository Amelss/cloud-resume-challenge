

export default function Experience() {
  return (
      <div id='experience' className="">
          
          <h1 className='text-center text-3xl font-bold text-blue-300 mb-5 pt-4 xl:text-4xl'>Experience</h1>

          <hr className="line xl:hidden"/>

          <div className="grid grid-cols-1 xl:grid-cols-2 xl:divide-y-2 xl:w-[1200px] xl:mx-auto">
              <div>
                  <hr className="hidden line xl:block"/>
                  <h4 className="work-header">Solutions Specialist</h4>
              </div>
              <div className="px-10 xl:px-0">
                  <h4 className="work-date font-bold">Revlifter</h4>
                   <p className="work-date">April 2023 - Present</p>
                  <ul className="list-outside list-disc my-list pb-10">
                      <li className="">Creating tailored solutions and implementing complex rules in JavaScript for client specific issues.</li>
                      <li>Creating and maintaining documentation for user onboarding that is easily understood by non-technical users.</li>
                      <li>Interacting with client’s APIs to pull in data to create mappings to configure our tool to work on client’s site.</li>
                      <li>Developing pixel perfect ‘RevPages’ using HTML & CSS in line with the UI provided by the design team.</li>
                      <li>Supporting the Campaign Services by being a technical liaison between them and the client by providing solutions to client’s technical issues.</li>
                  </ul>
                 
              </div>
       <hr className="line xl:hidden"/>
              <div>
                  <h4 className="work-header">eCommerce Content Assistant</h4>
              </div>
              <div className="px-10 xl:px-0">
                  <h4 className="work-date font-bold">Hunter Boots</h4>
                   <p className="work-date">May 2022 - April 2023</p>
                  <ul className="list-outside list-disc my-list pb-10">
                      <li className="">Working with various SaaS products including XO and Contentful to effectively merchandise and update the site.</li>
                      <li>Assisting with reporting on sales, key metrics and promotions involving proactively working with other team functions including content and merchandising teams</li>
                      <li>Assisting with administration duties for ecommerce photography workflow including product inventories, shoot planning and product activation tracking.</li>
                      <li>Website content updates across global websites Homepage, landing pages, and Discover brand content sections</li>
                  </ul>
                 
              </div>

                 <hr className="line xl:hidden"/>
              <div>
                  <h4 className="work-header">Admin & Web Content Co-Ordinator</h4>
              </div>
              <div className="px-10 xl:px-0">
                  <h4 className="work-date font-bold">Citizens Advice </h4>
                   <p className="work-date">October 2019 - October 2021</p>
                  <ul className="list-outside list-disc my-list pb-10">
                      <li className="">Liaising with partner agencies and other stakeholders as appropriate.</li>
                      <li>Maintaining and updating the WordPress website.</li>
                      <li>Supporting the Business Development Manager with fundraising events and research.</li>
                      <li>Responsible for raising awareness of CAB through social media and general promotion of CAB’s work.</li>
                  </ul>
                 
              </div>
              
          </div>
         
    </div>
  )
}
