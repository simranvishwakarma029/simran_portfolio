import React, { ReactNode } from "react";

interface LayoutProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  title = "Simran Vishwakarma — Software Developer",
  description = "Portfolio of Simran Vishwakarma, Software Developer: React, Node.js, MongoDB, Express. Projects, skills, contact.",
  children,
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" />
        <title>{title}</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/src/styles/global.css" />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
};

export default Layout;
