import {
  NotebookPen,
  Landmark,
  FileUser,
  FileCheck,
  Receipt,
  MailOpen,
  BookMarked,
  PlaneTakeoff,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  School,
  MapPin,
  Twitter,
  Phone,
  MailCheck,
  Navigation,
} from "lucide-react";

// website link --> https://dreamstudyinternational.com/#apply

function App() {
  return (
    <>
      <section className="bg-bgColor">
        {/*****---->  Header Section starts here  <----*****/}
        <header>
          {/*----> Header-Top Section <---*/}
          <div className="py-4 md:py-0 lg:h-14  bg-primary text-textWhite flex flex-wrap justify-between items-center px-4 lg:px-16  font-bold text-sm lg:text-base text-center">
            <h2 className="w-full lg:w-auto text-center lg:text-left mb-2 lg:mb-0">
              We're Leading Educational Consultancy in Bangladesh.
            </h2>
            <div className="h-full flex flex-wrap justify-center items-center lg:justify-end gap-2 lg:gap-4 ">
              <h2>Office Hours: 10:00AM - 07:00PM</h2>
              <a
                target="_blank"
                href="https://www.facebook.com/cryptic.nehal.9/"
              >
                <Facebook size={28} color="#ffff" strokeWidth={1.5} />
              </a>
              <a target="_blank" href="https://www.instagram.com/ahsanulnehal/">
                <Instagram size={28} color="#ffff" strokeWidth={1.5} />
              </a>
              <a target="_blank" href="https://github.com/nehal7472">
                <Github size={28} color="#ffff" strokeWidth={1.5} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ahsanul-haque-nehal/"
              >
                <Linkedin size={28} color="#ffff" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* {---->* Header-Middle Section <----*} */}
          <div className="flex flex-wrap justify-between items-center px-4 lg:px-16 py-8 gap-8">
            <div className="mx-auto lg:mx-0">
              <img src="logo.png" alt="Logo" className="w-40 md:w-[250px]" />
            </div>
            <div className="flex flex-col md:flex-row gap-6 lg:gap-40">
              <div className="flex items-center gap-4">
                <Phone size={32} color="#1B9FCB" className="text-accent" />
                <div>
                  <p className="font-bold text-textDarkGray">Call Us:</p>
                  <p className="text-textDarkGray">+8801633247472</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MailCheck size={32} color="#1B9FCB" className="text-accent" />
                <div>
                  <p className="font-bold text-textDarkGray">Email Us:</p>
                  <p className="text-textDarkGray">007cryptic@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Navigation size={32} color="#1B9FCB" className="text-accent" />
                <div>
                  <p className="font-bold text-textDarkGray"> Location Us:</p>
                  <p className="text-textDarkGray">Sylhet, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Header-Nav Section */}
          <nav className="w-[92%] mx-auto sticky top-0 z-50">
            <div className="flex flex-wrap justify-between items-center bg-primary text-textWhite font-bold py-4 px-4 lg:px-8 rounded-md shadow-md">
              <ul className="flex flex-wrap gap-4 lg:gap-8 text-sm lg:text-lg justify-center lg:justify-start w-full lg:w-auto mb-2 lg:mb-0">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Countries</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <button class="text-lg px-6 py-3 bg-blue-600 text-white font-bold rounded-lg transform transition-transform duration-300 hover:scale-105">
                Apply Now
              </button>
            </div>
          </nav>
        </header>

        {/*****---->  Header Section ends here  <----*****/}

        {/*****---->  Main Section starts here  <----*****/}
        <main className="flex flex-col  items-center gap-4 pt-8">
          {/*****---->  Main Section Logo   <----*****/}
          <div>
            <img src="logo.png" alt="Logo" width="300px" />
          </div>
          {/*****---->  Main Section body starts here  <----*****/}
          <div className="w-full min-h-[90vh] bg-[url('main-bg-image.jpg')] bg-cover bg-center flex flex-col md:flex-row px-4 md:px-20 pb-10 gap-8 items-center justify-center">
            {/*****---->  Main Section Image  <----*****/}
            <div className="w-full md:w-3/5">
              <img
                src="mainImage.jpg"
                alt="mainImage"
                className="w-full h-full object-cover"
              />
            </div>

            {/*****---->  Main Section form  <----*****/}
            <div className="w-full md:w-2/5 bg-bgColor rounded-xl shadow-3xl  ">
              <div className="w-full bg-gradient-to-r from-gradient to-gradient2 ease-in duration-300 cursor-pointer overflow-hidden text-textWhite rounded-t-xl  px-10 py-6 text-4xl font-bold">
                Apply Now!
              </div>
              <form className="space-y-6 p-12">
                <div className="flex items-center border border-borderColor rounded-lg px-8 py-4 text-xl ">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full outline-none bg-bgColor text-textGray"
                  />
                </div>

                <div className="flex items-center border border-borderColor rounded-lg px-8 py-4 text-xl">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full outline-none bg-bgColor text-textGray"
                  />
                </div>

                <div className="flex items-center border border-borderColor rounded-lg px-8 py-4 text-xl">
                  <select className="w-full outline-none bg-bgColor text-textGray">
                    <option>Last Education:</option>
                    <option>HSC</option>
                    <option>Bachelor</option>
                    <option>Masters</option>
                  </select>
                </div>

                <div className="flex items-center border border-borderColor rounded-lg px-8 py-4 text-xl">
                  <input
                    type="text"
                    placeholder="Preferred Country"
                    className="w-full outline-none bg-bgColor text-textGray"
                  />
                </div>
                {/*****---->  Form Button <----*****/}
                <button type="submit" className="btn">
                  Register
                </button>
              </form>
            </div>
          </div>
          {/*****---->  Main Section body ends here  <----*****/}
        </main>
        {/*****---->  Main Section ends here  <----*****/}

        {/*****---->  Offer Section  starts here  <----*****/}
        <div className="w-full bg-bgColor2 p-12 flex flex-col items-center gap-12">
          <img src="offer-logo.png" alt="" width={700} />
          {/*****---->  Offer Section Cards  <----*****/}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 pb-16">
            <div className="card">
              <NotebookPen color="#1E99C7" size={48} />
              <p className="tracking-wider">Eligibility Assessment</p>
            </div>
            <div className="card">
              <Landmark color="#1E99C7" size={48} />
              <p className="tracking-wider">University & Program Selection</p>
            </div>
            <div className="card">
              <FileUser color="#1E99C7" size={48} />
              <p className="tracking-wider">Scholarship Application</p>
            </div>
            <div className="card">
              <FileCheck color="#1E99C7" size={48} />
              <p className="tracking-wider">Sponsor DocumentSupport</p>
            </div>
            <div className="card">
              <Receipt color="#1E99C7" size={48} />
              <p className="tracking-wider">Bank Statement Support</p>
            </div>
            <div className="card">
              <MailOpen color="#1E99C7" size={48} />
              <p className="tracking-wider">SDP Letter Writing</p>
            </div>
            <div className="card">
              <BookMarked color="#1E99C7" size={48} />
              <p className="tracking-wider">Visa Application Support</p>
            </div>
            <div className="card">
              <PlaneTakeoff color="#1E99C7" size={48} />
              <p className="tracking-wider"> Pre-Departure Information</p>
            </div>
          </div>
        </div>
        {/*****---->  Offer Section  ends here  <----*****/}

        {/*****---->  Footer section starts here  <----*****/}
        <footer>
          {/*****---->  Footer body  <----*****/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 bg-white px-12 py-24">
            {/*****---->  Footer left  <----*****/}
            <div className="flex flex-col justify-between gap-6">
              <img src="logo.png" alt="" width={"300px"} />
              <p className="text-textGray text-xl">
                We are renowned education consultancy for prospective students
                who would like to study in CANADA, UK, USA, Australia, Sweden,
                Netherlands, Denmark & other European Countries.
              </p>
              <div className="flex gap-6">
                <a
                  target="_blank"
                  href="https://www.facebook.com/cryptic.nehal.9/"
                >
                  <Facebook size={28} color="#1B9FCB" strokeWidth={1.5} />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/ahsanulnehal/"
                >
                  <Instagram size={28} color="#1B9FCB" strokeWidth={1.5} />
                </a>
                <a target="_blank" href="https://github.com/nehal7472">
                  <Github size={28} color="#1B9FCB" strokeWidth={1.5} />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ahsanul-haque-nehal/"
                >
                  <Linkedin size={28} color="#1B9FCB" strokeWidth={1.5} />
                </a>
              </div>
            </div>
            {/*****---->  Footer sitemap <----*****/}
            <div className="flex gap-24">
              <div className="flex flex-col gap-8">
                <h2 className=" text-2xl font-bold text-textDarkGray flex">
                  <div className="mr-2 pl-2 w-8 bg-secondary rounded-full text-textWhite">
                    S
                  </div>
                  itemap
                </h2>
                <ul className="list-disc flex flex-col gap-3 text-lg text-textDarkGray">
                  <a href="#">
                    <li>Home</li>
                  </a>
                  <a href="#">
                    <li>About</li>
                  </a>
                  <a href="#">
                    <li>Service</li>
                  </a>
                  <a href="#">
                    <li>Countries</li>
                  </a>
                  <a href="#">
                    <li>Contact</li>
                  </a>
                </ul>
              </div>
              {/*****---->  Footer countries <----*****/}
              <div className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold text-textDarkGray flex">
                  <div className="mr-2 pl-2 w-8 bg-secondary rounded-full text-textWhite">
                    C
                  </div>
                  ountries
                </h2>
                <ul className="list-disc flex flex-col gap-3 text-lg text-textDarkGray">
                  <a href="#">
                    <li>Canada</li>
                  </a>
                  <a href="#">
                    <li>USA</li>
                  </a>
                  <a href="#">
                    <li>UK</li>
                  </a>
                  <a href="#">
                    <li>Australia</li>
                  </a>
                  <a href="#">
                    <li>Sweden</li>
                  </a>
                </ul>
              </div>
            </div>
            {/*****---->  Footer right <----*****/}
            <div className="flex flex-col gap-20 bg-bgColor2 p-8 rounded-xl">
              <School color="#1E99C7" strokeWidth={1.25} size={70} />
              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <MapPin color="#1E99C7" strokeWidth={1.25} />
                  <p>
                    <span className="font-bold text-textGray">
                      Bangladesh :
                    </span>
                    Sylhet, Sreemangal
                  </p>
                </div>
                <div className="flex gap-4 text-textGray">
                  <Twitter color="#1E99C7" strokeWidth={1.25} />
                  <p>
                    <span className="font-bold">WhatsApp: </span>+880 1633247472
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*****---->  Footer bottom  <----*****/}
          <div className="bg-[#22254B] text-[#ececec] flex flex-col md:flex-row justify-between items-center px-16 py-6 text-lg ">
            <p>© 2023 Dream Study Int.. Designed By *hirebirds Team.</p>
            <ul className="flex justify-between items-center gap-4">
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>FAQ</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </footer>
        {/*****---->  Footer section ends here  <----*****/}
      </section>
    </>
  );
}

export default App;
