# Product-listing

Documentation: JDM Marketplace Design and Privacy.

The project will be a high-performance, user-friendly storefront of iconic Japanese domestic market vehicles, and is expected to focus highly on modern web standards and regional data requirements.

Construction/ Design Decisions.

It is a modular application and divides concerns into HTML5 (structure), CSS3 (presentation), and Vanilla JavaScript (behavior).
UI/UX Strategy

  Responsive Grid Layout: 
    The listing of the products is done using display: grid repeat(auto-fit, minmax(250px, 1fr)). This makes the car cards flow beautifully out of desktop to mobile screens without the need of heavy       media queries.

  Visual Feedback: Interaction Visual: Transition effects (e.g. transform: translateY (-5px)) are added to product cards and buttons to give them a touchy feeling and a high-end experience.

  Search by Structure: market.js had a real-time filtering system attached to it. It does a fuzzyish search, searching both the product title and instantly makes changes to the DOM to display matches.

  Typography and Colour Palette.

  The Dark Mode Effect Dark header (#333) and high-contrast buttons: a smooth performance brand-like look.

  System Fonts:Used 'Segoe UI', a typeface that is fast-loading (no external font calls) and at the same time has a clean and professional appearance.


privacy and Ethical Data Processing.

  The application has embraced Privacy by Design in accordance with the global standards and particular local laws.
  Compliance: Act of Data Protection (2019).

  The application is specifically designed to address the provisions of Kenya Data Protection Act (2019) and the Office of the Data Protection Commissioner (ODPC) guidelines:

  Transparency: An eminent privacy banner notifies the users about their rights and is linked directly to the legal framework that regulates their data.

  Consent Management: The registration form will have an obligatory data processing checkbox. This would guarantee that it does not gather any user data without an affirmative action (opt-in).

  Minimizing Data: Registration form will only capture necessary information (Name and Email) as it is in line with the idea that the minimum possible data required to enable the service should be       processed.

Cookie Implementation

  The app provides a returning user with the help of persistent JavaScript cookie:

  Duration: Set to 30 days (max-age=2592000).

  Purpose: To store the information whether the user has already accepted the privacy notice or not, so as to avoid consent fatigue, but not to be secretive about tracking.


Future Considerations

  Encryption: Replacing alert-based feedback with a secure endpoint with API TLS encryption of data over the air.

  Enhanced Head: Inclusion of price range and engine type filters to the side bar.

  Localization: Multi-currency support (e.g. KES to USD) of a global market. 
