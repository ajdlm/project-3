import React from "react";

// reactstrap components
import {Carousel, CarouselItem, CarouselIndicators} from "reactstrap";

// core components

function CarouselSection(props) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {

    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.image.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.image.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      {/* <div className="section pb-0" id="carousel"> */}
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={props.image}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {props.image.map(item => {
            return (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.src}
              >
                <img className="w-100" src={item.src} alt={item.altText} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{item.caption}</h5>
                </div>
              </CarouselItem>
            );
          })}
          <a
            className="carousel-control-prev text-dark"
            data-slide="prev"
            href="#pablo"
            onClick={e => {
              e.preventDefault();
              previous();
            }}
            role="button"
          >
            <i className="now-ui-icons arrows-1_minimal-left"></i>
          </a>
          <a
            className="carousel-control-next text-dark"
            data-slide="next"
            href="#pablo"
            onClick={e => {
              e.preventDefault();
              next();
            }}
            role="button"
          >
            <i className="now-ui-icons arrows-1_minimal-right"></i>
          </a>
        </Carousel>
      {/* </div> */}
    </>
  );
}

export default CarouselSection;
