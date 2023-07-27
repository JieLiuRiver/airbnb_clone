## Full Stack Airbnb Clone with Next.js 13 

This is a Full Stack Airbnb clone project built with `Next.js`, `React`, `Tailwind`, `Prisma`, `MongoDB`, and `NextAuth`.

Note: Learn from [Youtube Video Course](https://www.youtube.com/watch?v=c_-b_isI4vg&t=17381s).

### How to Run the Project

1. First, you need to install Node.js and MongoDB.
2. Clone the project to your local machine.
3.Use the terminal to enter the project directory and run the npm install command to install dependencies.
4. Set up environment variables by creating a .env file in the root directory of the project with the following variables:
    ```
    GITHUB_ID=your-github-id
    GITHUB_SECRET=your-github-secret

    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    NEXTAUTH_SECRET=your-nextauth-secret
    DATABASE_URL=your-database-url
    ```
5. Run the `npm run dev` command to start the development server.
6. Open http://localhost:3000 ↗ in your browser to access the project website.

### Project Features
This project includes the following features:

1. Users can sign up, log in, and log out.
2. Users can search and book travel accommodations on the website.
3. Users can list and manage their own accommodations, including names, prices, descriptions, and photos.
4. Users can view and manage their own bookings.

### Future Improvements
There are several areas where this project can be improved, such as:

- Adding more search filter options, such as filtering by price, location, or rating.
- Adding more accommodation management features, such as editing or deleting listings.
- Adding more booking management features, such as viewing or cancelling bookings.

## NextAuth + MongoDB + Prisma Integration

### NextAuth
NextAuth is a library for authentication and authorization that makes it easy to integrate with various authentication providers (such as Google, Facebook, GitHub, etc.) and manage user sessions.

In this project, we use NextAuth to manage user authentication and sessions, including user login and logout, as well as logging in with third-party authentication providers.

### MongoDB
MongoDB is an open-source NoSQL database that can be used to store and manage unstructured data. In this project, we use MongoDB to store data such as user information, accommodation listings, and booking orders.

### Prisma
Prisma is a database ORM (Object-Relational Mapping) framework that provides a type-safe way to access databases and generates TypeScript code that conforms to type definitions. In this project, we use Prisma to manage the MongoDB database, including defining models, creating and updating data, and querying data.

### Integration Approach

In this project, we use Prisma to manage the MongoDB database. To use Prisma, we first define our models and write the data model definitions in the schema.prisma file. Then, by running the npx prisma generate command, we can generate the Prisma Client code, which provides a set of type-safe APIs for accessing and managing the MongoDB database.

When integrating NextAuth and Prisma, we need to write a custom adapter to integrate NextAuth with Prisma. This adapter is responsible for managing user data and storing user information in the MongoDB database. We can see this custom adapter in the `pages/api/auth/[...nextauth].js` file.

## Third-Party Libraries Used

### world-countries

The `world-countries` library provides a list of all the countries in the world, along with their ISO codes and other information. In this project, we use this library to display a dropdown list of countries in the accommodation search form.

### zustand

`zustand` is a state management library that provides a simple and lightweight way to manage state in React applications. In this project, we use `zustand` to manage the global state of the application, including user authentication status, search filters, and other shared state between components.

### react-hook-form

`react-hook-form` is a library for building forms in React applications. It provides a simple API for handling form inputs, validation, and submission. In this project, we use `react-hook-form` to build the accommodation listing form and the accommodation search form, as well as handling form validation and submission.

### react-hot-toast

`react-hot-toast` is a library for displaying toast notifications in React applications. It provides a simple and customizable way to display success messages, error messages, and other notifications to the user. In this project, we use `react-hot-toast` to display toast notifications for successful actions such as logging in, creating a new listing, or making a booking.

### react-icons

`react-icons` is a library that provides a set of popular icons as React components. In this project, we use `react-icons` to display icons for various UI elements, such as search and filter buttons.

### react-leaflet

`react-leaflet` is a library for building maps in React applications using the Leaflet library. In this project, we use `react-leaflet` to display the location of accommodations on a map, as well as allowing users to interact with the map to filter accommodations by location.

### react-select

`react-select` is a library for building custom select dropdowns in React applications. In this project, we use `react-select` to build the dropdowns for selecting the number of guests and the type of accommodation in the search form.

### react-spinners

`react-spinners` is a library that provides a set of loading spinners as React components. In this project, we use `react-spinners` to display loading spinners when the application is fetching data from the server.

### query-string

`query-string` is a library for parsing and stringifying query strings in URLs. In this project, we use `query-string` to parse the query string parameters in the accommodation search form and use them to filter the list of accommodations.

### next-cloudinary

`next-cloudinary` is a library for integrating Cloudinary image and video management with a Next.js application. In this project, we use `next-cloudinary` to upload and store images for accommodation listings and user avatars.

### date-fns

`date-fns` is a library for manipulating and formatting dates in JavaScript. In this project, we use `date-fns` to format dates and times for displaying booking details and availability.

## Responsive Design

`Tailwind CSS` is a powerful CSS framework that provides a set of pre-defined utility classes that can help us quickly design and build responsive interfaces.

In this project, we use `Tailwind CSS` to implement responsive design, which allows the web page to adapt to different screen sizes and device types. Here are some techniques we use to implement responsive design with `Tailwind CSS`:

### Utility Classes

`Tailwind CSS` provides a set of pre-defined utility classes that can be applied to HTML elements by adding a `class` attribute. We can choose the appropriate utility classes based on our needs to achieve different responsive effects. For example, we can use the `flex` and `flex-col` classes to implement flexbox layout, use the `text-center` class to center text, use the `w-full` class to set the width of an element to 100%, and so on.

### Responsive Breakpoints

`Tailwind CSS` also provides a set of responsive breakpoints that allow us to specify different styles for different screen sizes. These breakpoints can be applied to utility classes by adding a prefix. For example, we can use the `sm:text-lg` class to specify a larger font size on small screens.

### Utility Functions

`Tailwind CSS` also provides a set of utility functions that can help us quickly implement common responsive effects. For example, we can use the `grid` function with the `grid-cols-1`, `sm:grid-cols-2`, `md:grid-cols-3`, `lg:grid-cols-4`, `xl:grid-cols-5`, and `2xl:grid-cols-6` arguments to specify the number of columns in a grid layout for different screen sizes, and use the `hidden` and `sm:block` functions to show or hide elements on different screen sizes.

By using `Tailwind CSS`, we can quickly implement responsive design, and customize the styles and breakpoints by modifying the configuration file to meet our own needs.