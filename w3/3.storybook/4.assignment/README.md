### Learning Goals

- Storybook

### Getting started

1. create a react application.
2. install `storybook`.
3. `npx storybook init`.

### Task

1. Create a [Testimonial](https://chakra-templates.dev/templates/page-sections/testimonials/withSpeechBubbles) using storybook.

   - It accepts props followin props:

     ```ts
     type NavbarProps = {
     heading: string:
     subHeading: string:
     testimonials: {
         userName: string;
         userImage: string;
         userDesignation: string;
         title: string;
         comment: string;
     }[];
     };
     ```

   - Create following stories.

     1. Story for Simple Testimonials
     2. Testimonails with very long comments(5000-6000 characters.)
        - Have fixed height, height does not change as per comment length.
        - if more than 5 lines of comment is found then add scroll bar in the box.

2. (Bonus) Create a [Footer](https://chakra-templates.dev/templates/page-sections/footer/largeWithNewsletter) with 4 columns.
   - Column 1: Has the company logo, patent, social media links / buttons
   - Column 2: Has the title "Company" and links like: [About us, Blog, Contact us, pricing, testimonials]
   - Column 3: Has the title "Support" and links [Help Center, Terms of service, Legal, Privacy Policy, Status]
   - Column 4: Has the title "Stay up to data" and has one input with submit button where the user can type his/her emial address.
   - **_NOTE_**: Props and propTypes you have to decide on your own
