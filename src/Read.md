step 1 ：creat React App
npx create-react-app my-app

To create a React app that uses TypeScript, we can use the Create React App TypeScript template:
npx create-react-app my-react-app --template typescript

step 2:Run your React Project
Once you have dragged your project into your code editor, you can open up your terminal (in VSCode, go to View > Terminal).
cd my-app
npm start

Ps: When you save by using Command/Ctrl + S, you will see our page immediately update.

step 3: How to Install Dependencies

For API get, post, update, put:
npm install axios

Animate.css is a library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages, sliders, and attention-guiding hints.
npm install animate.css --save

if we need to uninstall Dependencies
npm uninstall @supabase/ui

For Auth login, npm install @supabase/supabase-js,
if it's fail when you install @supabase/ui, you need to npm install @supabase/ui --force to solver this problem.

step 4: How to Run Tests with the React Testing Library

It includes all of the packages you need to run tests using the React Testing Library (@testing-library/react).

A basic test is included in the file App.test.js in src. It tests that our App component successfully displays a link with the text "learn react".

We can run our tests with the command:

npm run test

step4
