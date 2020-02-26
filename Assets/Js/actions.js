@charset "UTF-8";

/* * * * * * * * * * * * * * * * * * * * * * * 
    FONTS 
* * * * * * * * * * * * * * * * * * * * * * */
@font-face {
  font-display: swap;
  font-family: montserrat;
  src: url("../../Assets/Fonts/Montserrat-Regular.woff") format("woff2"),
  url("../../Assets/Fonts/Montserrat-Regular.woff") format("woff"); }

@font-face {
  font-display: swap;
  font-family: montserrat-bold;
  src: url("../../Assets/Fonts/Montserrat-Bold.woff") format("woff2"),
  url("../../Assets/Fonts/Montserrat-Bold.woff") format("woff"); }


/* * * * * * * * * * * * * * * * * * * * * * * 
    VARS 
* * * * * * * * * * * * * * * * * * * * * * */
:root {
  --orange-1: #f58025;
  --gray-1: #333;
  --gray-2: #979797;
  --gray-3: #ebebeb;
  --gray-4: #cfcfcf;
  --gray-5: #f5f5f5;
  --blue-1: #0091e6;
  --default-radius: 4px; 
}


/* * * * * * * * * * * * * * * * * * * * * * * 
    RESET AND GENERAL STYLING 
* * * * * * * * * * * * * * * * * * * * * * */
html, body, blockquote, img,
dl, dt, dd, ol, ul, li, fieldset, form,
table, caption, tbody, tfoot, thead, tr, th, td { border: 0 none; margin: 0; padding: 0; }
body { font: 1rem/1.5rem 'montserrat', sans-serif; color: var(--gray-1); }
.wrapper { max-width: 1040px; margin: 0 auto; padding: 0 16px; }
.hide { display: none; }


/* * * * * * * * * * * * * * * * * * * * * * * 
    HEADER 
* * * * * * * * * * * * * * * * * * * * * * */
header { margin-bottom: 90px; border-bottom: solid 2px var(--gray-3); }
.header-logo { display: block; margin: 20px 0; }


/* * * * * * * * * * * * * * * * * * * * * * * 
    CONTACT US 
* * * * * * * * * * * * * * * * * * * * * * */
.contact-us { display: flex; flex-direction: column; margin-bottom: 60px; justify-content: space-between; }
.contact-us-header { margin-top: 0; font: 2rem/2.4rem 'montserrat-bold', sans-serif; }
.contact-us-subheader { font: 1rem/1.5rem 'montserrat-bold', sans-serif; color: var(--gray-2); }
.contact-us-content { color: var(--gray-2); }


/* * * * * * * * * * * * * * * * * * * * * * * 
    FORM
* * * * * * * * * * * * * * * * * * * * * * */
.contact-us-form { padding: 50px 60px; background-color: var(--gray-5); }
.contact-us-label { display: block; }
.contact-us-label-text { font: 0.9rem/1.4rem 'montserrat-bold', sans-serif; }
.contact-us-field { width: calc(100% - 30px); padding: 15px; margin-bottom: 20px; border: solid 1px var(--gray-4); }
select.contact-us-field { width: 100%; }


/* * * * * * * * * * * * * * * * * * * * * * * 
    FOOTER
* * * * * * * * * * * * * * * * * * * * * * */
footer { background-color: var(--gray-5); }
.footer-info { display: flex; flex-direction: column; justify-content: space-between; padding: 20px 0; }
.footer-info-data { color: var(--gray-2); }

/* * * * * * * * * * * * * * * * * * * * * * * 
    COLUMNS
* * * * * * * * * * * * * * * * * * * * * * */
.col-size-2 .col-1 { padding-right: 40px; }


/* * * * * * * * * * * * * * * * * * * * * * * 
    DESKTOP
* * * * * * * * * * * * * * * * * * * * * * */
@media (min-width: 768px) { 
  .contact-us { display: flex; flex-direction: row; }
  .col-size-2 .col { width: calc(50% - 40px); }
  .footer-info { flex-direction: row; }
  .contact-us-form { max-width: calc(460px - 120px); }
}

