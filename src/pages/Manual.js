import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import Success from "../components/Success";
import { useState } from "react";

const Manual = () =>{
    const [showSuccess, setShowSuccess] = useState(false);

    return (
        <div className="h-screen max-h-screen bg-gray-800 flex flex-col p-10 gap-10">
            {/* navbar section */}
            <div className="navbar bg-gray-800">
                <div className="flex-1 text-6xl">
                <Link to="/"><IoChevronBackOutline style={{ color: 'white' }} /></Link>
                </div>
            </div>

            {/* Title section */}
            <h2 className="text-6xl text-white title-container mt-5">
                Manual
            </h2>

            <div className="flex flex-col bg-gray-300 rounded-xl p-10 gap-5">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-3xl font-medium">
            Will this app stop my roommate from stealing my snacks?
          </div>
          <div className="collapse-content">
            <p className="text-2xl">
              While we can't guarantee complete snack security, our app does
              help you keep track of who’s eaten what. Install it and catch the
              snack thief red-handed!
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-3xl font-medium">
            Can I track how many times I’ve procrastinated on cooking?
          </div>
          <div className="collapse-content">
            <p className="text-2xl">
              Absolutely! We even have a special badge for the “Master of
              Procrastination.” Wear it with pride!
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-3xl font-medium">
            Will this app help me find the meaning of life in my fridge?
          </div>
          <div className="collapse-content">
            <p className="text-2xl">
              While it can’t solve existential questions, it can help you find
              that jar of pickles you’ve been searching for. Close enough,
              right?
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 rounded-xl p-10 gap-5">
        <form className="flex flex-col gap-5">
        <p className="text-2xl">Don't see your question here? Fill out the form below:</p>
        <div className="flex flex-row justify-between gap-5">
        <label className="input input-bordered flex items-center gap-2 w-1/2 h-20 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-1/2 h-20 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
        </div>
         
        <textarea className="textarea textarea-bordered h-28 text-2xl" placeholder="Message"></textarea>

    <div className="flex justify-center">
      <button type="button" onClick={() => setShowSuccess(true)} className="btn btn-primary text-2xl w-1/2">Submit</button>
    </div>
        </form>
    {showSuccess && <Success onClose={() => setShowSuccess(false)}/>}
      </div>

      <div className="bg-gray-300 rounded-xl p-10 gap-5">
        <p className="text-2xl"><b>Disclaimer</b>: This application is a prototype for a UX course. The intended resolution is <b>1000 x 1920</b> as it's targetted for a fridge touch screen. 
        Other resolutions may display the interface incorrectly.</p>
      </div>

        </div>
    );
}

export default Manual;