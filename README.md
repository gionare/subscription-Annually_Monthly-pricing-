<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Typescript" />

&#xa0;

  <!-- <a href="https://typescript.netlify.app">Demo</a> -->
</div>

<h1 align="center">Typescript</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/gionare/typescript?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/gionare/typescript?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gionare/typescript?color=56BEB8">

  <!-- <img alt="License" src="https://img.shields.io/github/license/gionare/typescript?color=56BEB8"> -->

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/gionare/typescript?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{YOUR_GITHUB_USERNAME}}/typescript?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/{{YOUR_GITHUB_USERNAME}}/typescript?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  Typescript 🚀 Under construction...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
    <a href="#memo-license">Typescript</a> &#xa0; | &#xa0;
    <a href="#checkered_flag-starting">Toogle switch: CSS</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/gionare" target="_blank">Author</a>
</p>

<br>

## :dart: About

This project is a simple pricing app built with Vite and React, allowing users to toggle between monthly and yearly pricing options and displaying pricing details from a JSON file.

## :sparkles: Features

Demonstrates the integration of Vite, React and Typescript
It utilizes React components to display pricing options fetched from a JSON file.

- Display pricing options from a JSON file
- Toggle between monthly and yearly pricing
- Responsive design

<img src="public/screenshot.png" width="500px">

## :rocket: Technologies

The following tools were used in this project:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/gionare/vite-react-pricing-app.git

# Access
$ cd typescript

# Install dependencies
$ npm i

# Run the project
$ npm run dev

# The server will initialize in the <http://localhost:3000>
```

## :checkered_flag: Typescript

i did create interfaces in types.d.ts file and ensure that the components receive the correct props with the expected data types.

```ts
interface IItem {
  id: number;
  title: string;
  price: { monthly: number; yearly: number };
  storage: string;
  users: string;
  send: string;
}

interface ICardProps {
  item: IItem;
  index: number;
  selectedOption: string;
}

interface ButtonProps {
  index: number; // Define the type of the 'index' prop
}

interface ToogleProps {
  selectedOption: string;
  onOptionChange: (option: string) => void;
}
```

App array function renders a Toogle component with selectedOption and handleOptionChange as props. It then maps over a data array, rendering a Card component for each item in the array. The Card component receives props such as item, index, and selectedOption.

```tsx
const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("monthly");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="main-container-app">
      <Toogle
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />

      <ul className="list-container">
        {data.map((item: IItem, index: number) => (
          <Card
            key={item.id}
            item={item}
            index={index}
            selectedOption={selectedOption}
          />
        ))}
      </ul>
      <img className="curved" src={CurvedImg} alt="wave image"></img>
      <img className="wave" src={WaveImg} alt="wave image"></img>
    </div>
  );
};

export default App;
```

## :checkered_flag: Toogle switch: CSS

```css
/* To hide the checkbox */
#checkboxInput {
  display: none;
}

.toggleSwitch {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 90px;
  height: 30px;
  background-color: rgb(206, 206, 206);
  border-radius: 40px;
  cursor: pointer;
  transition-duration: 0.3s;
}

.toggleSwitch::after {
  content: "";
  position: absolute;
  height: 30px;
  width: 50%;
  left: 0px;
  background: conic-gradient(
    rgba(26, 26, 26, 0.555),
    white,
    rgba(26, 26, 26, 0.555),
    white,
    rgba(26, 26, 26, 0.555)
  );
  border-radius: 40px;
  transition-duration: 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.281);
}

#checkboxInput:checked + .toggleSwitch::after {
  transform: translateX(100%);
  transition-duration: 0.3s;
}

#checkboxInput:checked + .toggleSwitch {
  background-color: rgb(124, 173, 206);
  transition-duration: 0.3s;
}
```

## :memo: License

@Bitcamp

Made with :heart: by <a href="https://github.com/{{YOUR_GITHUB_USERNAME}}" target="_blank">Giorgi Nareklishvili</a>

&#xa0;

<a href="#top">Back to top</a>
