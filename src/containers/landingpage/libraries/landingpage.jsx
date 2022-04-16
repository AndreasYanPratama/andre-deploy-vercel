import Image from 'next/image';
// import people from '../../../../public/img/people.png'
// import money from '../../../../public/img/money2.png'
// import ojk from '../../../../public/img/ojk.png'
// import finance from '../../../../public/img/financial-profit.png'
// import secure from '../../../../public/img/secure-shield.png'
// import clock from '../../../../public/img/clock.png'
// import search from '../../../../public/img/search.png'

const skills = () => {
  let s = [];
  for(let i=0; i<10; i++){
    s.push(
      <div key={i} className="grid grid-rows-1 justify-items-center p-5">
        <img src="./icons/next-js.svg" className="bg-white p-2 rounded" width="100" height="100" alt="" />
        <div>Next Js</div>
      </div>
    );
  }
  return s;
}

const projects = () => {
  let p = [];
  for(let i=0; i<5; i++){
    p.push(
      <div key={i} className="group rounded overflow-hidden shadow-lg p-7 card">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Project {i+1}</div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean ut sollicitudin libero. 
              Suspendisse nec sapien id tortor finibus pellentesque sit amet in augue. 
              Cras volutpat dolor sit amet mattis iaculis. 
              Etiam non diam quis enim consequat volutpat vel pretium tortor.
            </p>
        </div>
        <div className="px-6 py-4 invisible group-hover:visible">
          <a href="#" className="btn-detail p-2 rounded">Details</a>
        </div>
      </div>
    );
  }
  return p;
}

export default function LandingPage() {
  return(
  <>
      <div className="pt-40" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/img-startup-login.png')`}}>
        <div className="container mx-auto px-6 pb-52 text-center text-white">
          <div className="flex justify-center items-center">
            <img className="rounded-full border border-white" height="50px" src="/andre-tkd.JPG" width="150" height="150"/>
          </div>
          <div className="text-lg pt-6">
            Hello, my name is...
          </div>
          <div className="text-4xl font-bold ">
            Andreas Yan Pratama
          </div>
          <div className="text-2xl my-2 ">
            Front End Web Developer
          </div>
          <div className="rounded-social-buttons p-2">
            <a className="social-button linkedin" href="https://www.linkedin.com/" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="social-button twitter" href="https://t.me/andreasyanpratama" target="_blank">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>
        {/* <div className="mb-6 w-full md:w-full lg:w-full justify-center items-center" style={{  position: 'relative', width: '100%'}}>
        </div> */}
      </div>
      {/* Skills */}
      <section className="sectionOne">
        <div className="container mx-auto px-4 py-2">
          <h2 className="text-3xl font-bold text-center pt-10">
            Skills
          </h2>
          <div className="flex justify-center pb-10">
            <hr className="w-1/2 border-b border-gray-300"/>
          </div>
          <div className="flex justify-center items-center mb-10 sm:mx-20 md:mx-20 lg:mx-20 xl:mx-20">
            <div className="flex flex-wrap justify-center">
              {
                skills()
              }
              {/* <div className="grid grid-rows-1 justify-items-center p-5">
                <img src="https://teamrrq.com/images/logo/logo-rrq.png" className="rounded-full" width="100" height="100" alt="" />
                <div>Rex Regum Qeon</div>
              </div> */}
            </div>
          </div>
          
        </div>
      </section>
      {/* Projects */}
      <section className="sectionTwo">
        <div className="container mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold text-center pt-10">
            Projects
          </h2>
          <div className="flex justify-center pb-10">
            <hr className="w-1/2 border-b border-gray-300"/>
          </div>
          <div className="flex justify-center items-center">
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 ">
              {
                projects()
              }
              {/* <div className="rounded overflow-hidden shadow-lg p-7 card">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Project 1</div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean ut sollicitudin libero. 
                    Suspendisse nec sapien id tortor finibus pellentesque sit amet in augue. 
                    Cras volutpat dolor sit amet mattis iaculis. 
                    Etiam non diam quis enim consequat volutpat vel pretium tortor.
                  </p>
                </div>
                <div className="px-6 py-4">
                  <a href="#" className="btn-detail p-2 rounded">Details</a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="btn-more px-10 py-2 rounded">More...</button>
          </div>
        </div>
      </section>

      {/* <section className="sectionOne">
        <div className="container mx-auto px-6 py-10">
          <div className="group">
            <p>Some content that is always visible.</p>
            <p className="hidden group-hover:block">I am hidden until my parent is hovered!</p>
          </div>

        </div>
      </section> */}
      <div className="group hidden border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ">
        <p className="text-indigo-600 group-hover:text-gray-900 ">New Project</p>
        <p className="bg-blue-500 group-hover:bg-red-500 ">Create a new project from a variety of starting templates.</p>
        <span className="block group-hover:hidden">RRQ</span>
      </div>
      {/* <section className="" style={{ backgroundImage: "linear-gradient(101.31deg, #FFF48C 0%, #DDBF53 100%)"}}>
        <div className="container mx-auto px-6 text-center text-black py-10 mb-5">
          <h2 className="my-6 text-4xl  font-bold text-center">
            Why clients love us
          </h2>
          <div className="flex justify-center items-center my-8 ">
            <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
          </div>
          <p className="text-sm text-center px-6 mb-5">
            We’ve user FundRaisey to grow our business. I don’t think we<br/>
            would have been able to expand the way we wanted while<br/>
            staying true to our agile roots with FundRaisey.<br/>
          </p>
          <p className="text-gray-800 text-xs md:text-sm px-6">
            <span className="font-bold">Michael Hernanda</span>
          </p>
          <p>
            <span className="text-gray-800 text-xs md:text-sm p-6">Founder and CEO of Sunday</span>
          </p>
        </div>
      </section> */}

      {/* <section className="bg-white">
        <div className="container mx-auto px-6 text-center py-10">
          <h2 className="my-2 text-3xl font-bold text-center text-black">
            Licensed and Supervised by
          </h2>
          <div className="flex justify-center items-center">
            <div className="my-10 md:w-1/3 lg:w-1/3 flex justify-center items-center " style={{width:'250px', height:'100px'}}>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="" style={{ backgroundImage: 'linear-gradient(288.46deg, #082542 0.04%, #0F4880 100.04%)' }}>
        <div className="container mx-auto p-10 text-center">
            <h2 className="my-6 text-3xl font-bold text-white">
              Accelerate your business now
            </h2>
            <button type="button" className="border-red-500 transform hover:scale-110 transition duration-300 ease-in-out bg-gray-50 text-blue-600 font-bold rounded py-2 px-7 tracking-wider my-6">
              Get Started &#8594;
            </button>
          </div>
      </section> */}
  </>
  );
}

