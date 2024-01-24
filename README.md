# Number Memory App

This is a simple number memory game built with Next.js and React.

## Installation

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

The game is simple. A random number will be displayed on the screen for a few seconds. Your task is to remember this number and input it correctly after it disappears.

## Components

The app consists of three main components:

1. `NumberMemory`: This is the main component that handles the game logic.
2. `NumberInput`: This component is used for user input.
3. `NumberDisplay`: This component is used to display the number to the user.

## Styles

The styles for the components are located in the `styles` directory. Each component has its own CSS module.

## Server-side Rendering

The app uses Next.js's `getServerSideProps` function for server-side rendering.

## Dependencies

The app uses React and Next.js as its main libraries. The dependencies and their versions can be found in the `package.json` and `package-lock.json` files.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)