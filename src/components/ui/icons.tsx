import * as React from 'react';

// Define the Icons object with individual SVG components
export const Icons = {
  logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="Logo"
    >
      {/* Replace the path data with your actual logo SVG path */}
      <path d="M12 0L9.1 7.6H2.2L7.3 12.4L5.4 19.2L12 14.4L18.6 19.2L16.7 12.4L21.8 7.6H14.9L12 0Z" />
    </svg>
  ),
  // Add additional icons as needed
  arrow: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="Arrow"
    >
      {/* Example arrow path */}
      <path d="M12 2L10.6 3.4L18.2 11H2V13H18.2L10.6 20.6L12 22L22 12L12 2Z" />
    </svg>
  ),
};
