# socials-meter
A React app that show cases the use of useContext hook by toggling between light and dark modes.
Live URL: https://mighty-ridge-22502.herokuapp.com/
Implemented: 
useContext hook for toggling between light and dark themes.
Separate Icon component to load all the SVG images.
Util file to implement common methods.

The major challenges in this project were:
1. CSS: As there are several grid areas that required to be rendered as parents for its child divs and so on. I have learnt the true meaning of display. For instance at one stage, I was making all the necessary changes for the display to show inline, but it still ends up block. I found that there was an intervening div in between the parent and the child items, which was not allowing the changes to reflect. 
2. In CSS layouts, I learnt that it is wiser to get the basic layout first(in the .wrapper) by adding required number of columns and rows using auto, (ex: grid-template-column: auto auto grid-template-rows: auto auto auto) and then going to the respective top level page/component(like .header) with grid-area defined (ex: grid-area: 1 / 2 / 2 / 3). The header or other components can now have display as flex or grid as required. 
3. Js: I declared the functions in the util.js file, so that they were re-usable for both the Card and OverviewCard components. Ideally both these components were using same functions for rendering but their UI was different. 
Using a single Icon component for loading different SVG icons by making using of a switch based function seemed to be a good problem to be solved.
4. React: The power of hooks is demonstrated by being able to move all the toggling related functionality to a single component(themeContext.js), and simply using the useContext hook to implement the switching of themes.
