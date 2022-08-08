import { useEffect } from "react";
import { useLocation } from "react-router";
import React from 'react';
import { ReactChildrenType } from "../../types";

const ScrollToTop = (props:ReactChildrenType) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export {ScrollToTop};