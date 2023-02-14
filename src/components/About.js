const About = () => {
  return (
    <>
      {/* <Hero text="Welcome to react" /> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <h1>About Page</h1>
            <p>
              Bookstache is an open-source project that helps to keep track of
              your books or family members' books. Let's say someone wants to
              get you a book, but they need to know if you have it. If they were
              to ask you directly, then the element of surprise would be gone.
              Bookstache would allow others to check out your library and see if
              you have a specific book. Not only will they be able to see the
              list, but you can also display which is your favorite! This way,
              they could see the type of books you enjoy and suggest certain
              books.{" "}
            </p>
            <h2>More Info</h2>
            <span>
              You can find more information on this project's github page{" "}
              <a href="https://github.com/YolandaHaynes/bookstache" target="_blank">
                https://github.com/YolandaHaynes/bookstache
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
