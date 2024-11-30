import { SiteLinksSearchBoxJsonLd } from 'next-seo';

const Page = () => (
  <>
    <h1>Makeup Palace -Professional Mobile Hair & Makeup Artists</h1>
    <SiteLinksSearchBoxJsonLd
      url="https://www.makeuppalace.com.au"
      potentialActions={[
        {
          target: 'https://query.example.com/search?q',
          queryInput: 'search_term_string',
        },
        {
          target: 'android-app://com.example/https/query.example.com/search/?q',
          queryInput: 'search_term_string',
        },
      ]}
    />
  </>
);

export default Page;