# Portfolio Fullstack Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It serves as a portfolio website showcasing projects, skills, and more.

## Features

- **Next.js 15**: Built with the latest features of Next.js, including the App Router.
- **Sanity CMS**: Integrated with [Sanity](https://www.sanity.io/) as the headless CMS for managing content dynamically.
- **Reusable Actions**: Centralized logic for fetching data from Sanity using reusable functions in the `actions` directory.
- **Responsive Design**: Fully responsive and optimized for all devices.
- **Accessibility**: Includes `aria-label` attributes and other accessibility improvements.
- **Dynamic Metadata**: Metadata for pages is dynamically generated based on content from Sanity.
- **Optimized Images**: Uses `next/image` for optimized image loading.
- **Animations**: Smooth animations powered by Framer Motion.
- **TypeScript**: Fully typed with TypeScript for better developer experience.

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/portfolio-fullstack.git
cd portfolio-fullstack
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Contains the main application logic and routing.
- `components/`: Reusable UI components such as headers, footers, and cards.
- `app/actions/`: Centralized functions for fetching data from Sanity, such as `getHero`, `getTechSkills`, and `getServices`.
- `styles/`: Global and component-specific styles.
- `public/`: Static assets like images and fonts.
- `utils/`: Utility functions and helpers.

## Sanity Integration

This project uses [Sanity](https://www.sanity.io/) as the headless CMS. Content such as projects, skills, and services is managed dynamically through Sanity. The `actions` directory contains reusable functions to fetch data from Sanity, such as:

- `getHero`: Fetches the hero section data.
- `getTechSkills`: Fetches the list of technical skills.
- `getServices`: Fetches the services section data.
- `getProjectDetail`: Fetches detailed information about a specific project.

## Commit Messages

The commit messages follow a clear and descriptive format, explaining the integration of Sanity and the use of actions. For example:

- `feat: integrate Sanity CMS for dynamic content management`
- `refactor: centralize data fetching logic in actions`
- `fix: resolve issues with hero component data fetching`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.