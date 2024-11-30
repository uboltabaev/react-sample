import { BreadcrumbJsonLd } from 'next-seo';
export default function Breadcrumbs() {
    return (
       <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Books',
            item: 'https://example.com/books',
          },
          {
            position: 2,
            name: 'Authors',
            item: process.env.URL + '/books/authors',
          },
          {
            position: 3,
            name: 'Ann Leckie',
            item: 'https://example.com/books/authors/annleckie',
          },
          {
            position: 4,
            name: 'Ancillary Justice',
            item: 'https://example.com/books/authors/ancillaryjustice',
          },
        ]}
      />
        
    )
  }