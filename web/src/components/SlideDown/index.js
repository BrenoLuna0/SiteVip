import React, { useRef } from "react";
import { bool, node } from "prop-types";
import { useTransition, animated } from "react-spring";
import { Container, Inner } from "./styles";

const visibleStyle = { height: "auto", opacity: 1, overflow: "visible" };
const hiddenStyle = { opacity: 0, height: 0, overflow: "hidden" };

function getElementHeight(ref) {
  return ref.current ? ref.current.getBoundingClientReact().height : 0;
}

function SlideDown({ isVisible, children, forceSlideIn }) {
  const containerRef = useRef(null);
  const innerRef = useRef();

  const transitions = useTransition(isVisible, null, {
    enter: () => async (next) => {
      const height = getElementHeight(innerRef);

      if (height) {
        await next({ height, opacity: 1, overflow: "hidden" });
        await next(visibleStyle);
      }
    },
    leave: () => async (next) => {
      const height = getElementHeight(containerRef);

      if (height) {
        await next({ height, overflow: "hidden" });
        await next(hiddenStyle);
      }
    },
    from: hiddenStyle,
    unique: true,
  });

  return transitions.map(({ item: show, props: springProps, key }) => {
    if (show) {
      return (
        <animated.div ref={containerRef} key={key} style={springProps}>
          <Inner ref={innerRef}>{children}</Inner>
        </animated.div>
      );
    }
    return null;
  });
}

SlideDown.defaultProps = {
  forceSlideIn: false,
};

SlideDown.propTypes = {
  isVisible: bool.isRequired,
  forceSlideIn: bool,
  children: node.isRequired,
};

export default SlideDown;
