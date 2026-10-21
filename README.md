# Advocate Jada Peter Paul — React + Vite Website

Premium, responsive civil, criminal and family-law website built with React, Vite, JavaScript, CSS and Lucide React icons. Includes filterable practice areas and an expanded enquiry dropdown.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```
The production files are created in `dist/`.

## Supplied images
The six supplied images are included as optimized WebP assets in `src/assets/`. Review all photos and replace any image that does not accurately represent the advocate or an approved professional context before publishing. The group photo is labelled as a legal-community image and is not presented as a client endorsement.

## Before deployment — SEO checklist
1. Deploy the site to the final HTTPS domain.
2. Replace `https://REPLACE-WITH-YOUR-DOMAIN/` in `index.html`, `public/robots.txt`, and `public/sitemap.xml` with the exact canonical domain.
3. Update `og:image` to an absolute URL on that domain.
4. Verify the website in Google Search Console and submit `/sitemap.xml`.
5. Inspect the home page URL in Search Console and request indexing after deployment.
6. Confirm the phone, address, practice areas and all photographs are accurate.
7. Keep name, address and phone details consistent across the website and any legitimate professional directory listings.
8. Add only genuine, permitted professional profile links. Do not add fake reviews, ratings, credentials or legal results.

SEO improvements help search engines understand the website but cannot guarantee a number-one ranking. Local rankings depend on many factors, including relevance, location, competition, and trusted external signals.

## WhatsApp enquiry form
The form validates fields and consent, then opens a prefilled WhatsApp message to `+91 96760 74671`. The visitor must review and send the message inside WhatsApp. Form values are not sent to this website's server or stored in local storage. A browser popup blocker may require the visitor to allow/open the WhatsApp link.

The floating WhatsApp button opens the advocate WhatsApp chat, the call button uses the device phone handler (`tel:`), and the location button opens Google Maps directions/search for the supplied office address. These actions require a deployed site with internet access; calling depends on the visitor device/browser. The enquiry form prepares a personalized WhatsApp message and still requires the visitor to press Send inside WhatsApp.

## Legal and content review
This is a website implementation, not legal advice. Confirm all service offerings and professional imagery before launch. No case result is guaranteed. The site includes a general-information disclaimer and privacy notice.
