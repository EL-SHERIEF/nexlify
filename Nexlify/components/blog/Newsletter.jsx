"use client";
import bg from "@/public/assets/images/landing/hero-bg-2.webp";

export default function Newsletter() {
  return (
    <div
      id="blog_newsletter"
      className="blog-newsletter section panel overflow-hidden"
    >
      <div className="section-outer panel pb-4 lg:pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel p-3 py-6 lg:p-6 xl:p-8 rounded-2 border-1 border-black border overflow-hidden shadow-sm text-white"
                    style={{
                        borderRadius: '20px',
                        backgroundImage: `url(${bg.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'start center',
                        backgroundRepeat: 'no-repeat',
                      }}>
            <div
              className="row child-cols-12 md:child-cols g-6 justify-center items-center"
              data-uc-grid=""
            >
                <div className="vstack items-center gap-2 max-w-500px xl:max-w-600px">
                <span className="fw-medium d-flex align-items-center px-2 py-1 bg-white bg-opacity-10 rounded-pill blur gap-1 m-0" style={{border:'solid 1px rgba(255, 255, 255, 0.38)'}}>
                                   <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000000"><g strokeWidth="0"></g><g  strokeLinecap="round" strokeLinejoin="round"></g><g><g> <path d="M421.073,221.719c-0.578,11.719-9.469,26.188-23.797,40.094v183.25c-0.016,4.719-1.875,8.719-5.016,11.844 c-3.156,3.063-7.25,4.875-12.063,4.906H81.558c-4.781-0.031-8.891-1.844-12.047-4.906c-3.141-3.125-4.984-7.125-5-11.844V152.219 c0.016-4.703,1.859-8.719,5-11.844c3.156-3.063,7.266-4.875,12.047-4.906h158.609c12.828-16.844,27.781-34.094,44.719-49.906 c0.078-0.094,0.141-0.188,0.219-0.281H81.558c-18.75-0.016-35.984,7.531-48.25,19.594c-12.328,12.063-20.016,28.938-20,47.344 v292.844c-0.016,18.406,7.672,35.313,20,47.344C45.573,504.469,62.808,512,81.558,512h298.641c18.781,0,36.016-7.531,48.281-19.594 c12.297-12.031,20-28.938,19.984-47.344V203.469c0,0-0.125-0.156-0.328-0.313C440.37,209.813,431.323,216.156,421.073,221.719z"></path> <path d="M498.058,0c0,0-15.688,23.438-118.156,58.109C275.417,93.469,211.104,237.313,211.104,237.313 c-15.484,29.469-76.688,151.906-76.688,151.906c-16.859,31.625,14.031,50.313,32.156,17.656 c34.734-62.688,57.156-119.969,109.969-121.594c77.047-2.375,129.734-69.656,113.156-66.531c-21.813,9.5-69.906,0.719-41.578-3.656 c68-5.453,109.906-56.563,96.25-60.031c-24.109,9.281-46.594,0.469-51-2.188C513.386,138.281,498.058,0,498.058,0z"></path> </g> </g></svg>
                                   Read
                    </span>
                  <h2 className="h4 md:h3 lg:h2 m-0 text-inherit mt-1">Get the latest updates</h2>
                  <p className="fs-6 lg:fs-5 text-inherit text-center">
                    Subscribe to get our most-popular proposal eBook and more
                    top revenue content to help you send docs faster.
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="row child-cols g-1 mt-1 xl:mt-2 w-100"
                  >
                    <div>
                      <input
                        className="form-control h-48px xl:h-56px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                        type="text"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <div className="col-12 sm:col-auto">
                      <button className="btn btn-md h-48px xl:h-56px w-100 lg:min-w-150px xl:min-w-200px btn-secondary text-white">
                        Subscribe
                      </button>
                    </div>
                  </form>
                  <p className="fs-7 text-opacity-70 text-inherit">
                    Don't worry we don't spam.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
