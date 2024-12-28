import React from "react";

const Ranking = ({ fill }: { fill: string }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.16667 24.5V22.1667H12.8333V18.55C11.8806 18.3361 11.0301 17.9328 10.2818 17.3402C9.53361 16.7475 8.98411 16.0036 8.63333 15.1083C7.175 14.9333 5.95506 14.2967 4.9735 13.1985C3.99194 12.1003 3.50078 10.8119 3.5 9.33333V8.16667C3.5 7.525 3.72867 6.97589 4.186 6.51933C4.64333 6.06278 5.19244 5.83411 5.83333 5.83333H8.16667V3.5H19.8333V5.83333H22.1667C22.8083 5.83333 23.3578 6.062 23.8152 6.51933C24.2725 6.97667 24.5008 7.52578 24.5 8.16667V9.33333C24.5 10.8111 24.0088 12.0995 23.0265 13.1985C22.0442 14.2975 20.8242 14.9341 19.3667 15.1083C19.0167 16.0028 18.4676 16.7467 17.7193 17.3402C16.9711 17.9336 16.1202 18.3369 15.1667 18.55V22.1667H19.8333V24.5H8.16667ZM8.16667 12.6V8.16667H5.83333V9.33333C5.83333 10.0722 6.04722 10.7384 6.475 11.3318C6.90278 11.9253 7.46667 12.348 8.16667 12.6ZM19.8333 12.6C20.5333 12.3472 21.0972 11.9241 21.525 11.3307C21.9528 10.7372 22.1667 10.0714 22.1667 9.33333V8.16667H19.8333V12.6Z"
        fill={fill}
      />
    </svg>
  );
};

export default Ranking;
