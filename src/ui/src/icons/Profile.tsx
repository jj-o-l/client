import React from "react";

function Profile({ fill }: { fill: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.33333 8.16667C9.33333 6.92899 9.825 5.742 10.7002 4.86683C11.5753 3.99167 12.7623 3.5 14 3.5C15.2377 3.5 16.4247 3.99167 17.2998 4.86683C18.175 5.742 18.6667 6.92899 18.6667 8.16667C18.6667 9.40434 18.175 10.5913 17.2998 11.4665C16.4247 12.3417 15.2377 12.8333 14 12.8333C12.7623 12.8333 11.5753 12.3417 10.7002 11.4665C9.825 10.5913 9.33333 9.40434 9.33333 8.16667ZM9.33333 15.1667C7.78624 15.1667 6.30251 15.7812 5.20854 16.8752C4.11458 17.9692 3.5 19.4529 3.5 21C3.5 21.9283 3.86875 22.8185 4.52513 23.4749C5.1815 24.1313 6.07174 24.5 7 24.5H21C21.9283 24.5 22.8185 24.1313 23.4749 23.4749C24.1313 22.8185 24.5 21.9283 24.5 21C24.5 19.4529 23.8854 17.9692 22.7915 16.8752C21.6975 15.7812 20.2138 15.1667 18.6667 15.1667H9.33333Z"
        fill={fill}
      />
    </svg>
  );
}

export default Profile;
