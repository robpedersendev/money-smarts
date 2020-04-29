# money-smarts [![Netlify Status](https://api.netlify.com/api/v1/badges/8ba18ebf-1d0e-4501-808d-bb38b329002c/deploy-status)](https://app.netlify.com/sites/dreamy-lamport-fa3c50/deploys)

[Mailchimp Landing Page Email collector](https://mailchi.mp/ead1b3134e7b/life-calculator)

Do you know how much you need to make before taxes to make all your post-tax obligations happen? Let me help you.

# Planning

This project will be hosted using ZEIT utilizing the NextJS framework for the front end, and once it is in place - Firestore for the backend. This will allow for fast rendering, easy authentication, quick database establishing and modification when necessary.

User Flow

- Go to Webpage
- Answer prompts about post tax life
- Answer prompts about pre tax and deductions tax life
- Observe the results of their minimum needed income pre tax/deductions
- If they havent already, be offered to create an account to save their information and results.

Paid Version - user flow

- Once the user signs up and pays they get a notification to create a budget.
- The `Answer prompts about post tax life` from the free version will primarily be filled with the information in this budget
- Once the budget is filled out another notification will appear for them to fill out their tax and deduction information. This will also fill out most if not all of the `Answer prompts about pre tax and deductions tax life` portion.
- The biggest pro of the paid account is that the user will be able to break everything down to the penny if they wanted to and once either of the budget or the tax and the deduction section is updated they will see their minimal needed salary section update as well.
- The way the `Paid Version - user flow` will act and appear will need to be more thoroughly flushed out at later time.

## MVP Iterations

1. v1 - Landing page with a signup section with brief intro [x] - 1/18/2019
2. v2.1 - Create basic form layout for inputs and an output section
3. v2.2 - Build about page, use original landing page and add routing to app
4. v2.3 - Add animations to form and loading states
5. v3.1 - No visible differences, Build backend database setup in firebase/firestore
6. v3.2 - No visible differences, Build out authentication
7. v3.3 - No visible differences. Create the login page, Their account page, The results page
8. v3.4 - No visible differences. Build out notifications within firebase/firestore
9. v4.1 - Rollout account sign up
10. v4.2 - Implement site chat help support
11. v5 Revamp form entirely to make it modern. Make it mirror something similar to typeform
12. v6 No visible differences. Create the budget page, create the tax and deduction page to be a simple form (similar to v2.1)
13. v7 Rollout Paid account pages
14. v8 Revamp all forms and inputs on the website mirror typeform type style
15. v9.1 No visual differences. Develop several breakdowns comparable to https://neuvoo.com/tax-calculator/California-80000
16. v9.2 No visual differences. Hire graphic artist to create an animation.
17. v10 Rollout breakdowns and graphic to the site
