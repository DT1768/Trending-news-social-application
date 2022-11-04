import "../../Assets/Styles/MyFooter.css";

function MyFooter() {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className=" my-5">
        {/* Footer */}
        <footer className="text-center text-lg-start text-white footer">
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
            <a className="text-white" href="https://NewsBySpice.com/">
              NewsBySpice.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
      {/* End of .container */}
    </>
  );
}

export default MyFooter;
