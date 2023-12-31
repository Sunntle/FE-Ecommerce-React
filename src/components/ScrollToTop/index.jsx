import React, { useEffect } from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
function ScrollToTop() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const btnScroll = document.querySelector(".btnScroll");
      if (scrollTop > 500) {
        btnScroll?.classList.remove("d-none");
      } else {
        btnScroll?.classList.add("d-none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="scrollToTop fixed-bottom">
      <Button
        size="lg"
        color="transparent"
        className="btnScroll rounded-circle d-none p-0"
        onClick={() => window.scrollTo(0, 0)}
      >
        <FontAwesomeIcon className="scrollIcon fw-bolder fs-4 border-0 " icon={faAngleDoubleUp} />
      </Button>
    </div>
  );
}

export default ScrollToTop;
