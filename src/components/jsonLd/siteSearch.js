import { SiteLinksSearchBoxJsonLd } from 'next-seo';

export default function SiteSearch(props) {
    return (
     <SiteLinksSearchBoxJsonLd
url= {props.url}
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
)
}