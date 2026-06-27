import type { Metadata } from "next";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stylezonecare.com"),
  title: "Style Zone Study Care | Learn Today, Lead Tomorrow",
  description:
    "Premium English & Social Science coaching for Classes 6-10. CBSE, ICSE & State Board preparation with personal attention, regular tests, and expert faculty. Enroll now for a free demo class!",
  keywords: [
    "coaching institute",
    "English coaching",
    "Social Science coaching",
    "CBSE coaching",
    "ICSE coaching",
    "Classes 6-10",
    "tuition",
    "Style Zone Study Care",
    "board exam preparation",
    "study care",
  ],
  authors: [{ name: "Style Zone Study Care" }],
  creator: "Style Zone Study Care",
  publisher: "Style Zone Study Care",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://stylezonecare.com",
    siteName: "Style Zone Study Care",
    title: "Style Zone Study Care | Learn Today, Lead Tomorrow",
    description:
      "Premium English & Social Science coaching for Classes 6-10. Personal attention, regular tests, expert faculty. Your success is our responsibility.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Style Zone Study Care - Learn Today, Lead Tomorrow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Style Zone Study Care | Learn Today, Lead Tomorrow",
    description:
      "Premium English & Social Science coaching for Classes 6-10. Enroll now!",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://stylezonecare.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Style Zone Study Care",
  description:
    "Premium English & Social Science coaching institute for Classes 6-10. CBSE, ICSE & State Board preparation.",
  url: "https://stylezonecare.com",
  telephone: "+919668580583",
  slogan: "Learn Today, Lead Tomorrow",
  award: "Outstanding Academic Improvement Award 2024",
  knowsAbout: ["English Grammar & Literature", "Social Science (CBSE, ICSE, State Boards)"],
  areaServed: {
    "@type": "City",
    name: "Local Area",
  },
  address: [
    {
      "@type": "PostalAddress",
      name: "Paharkhana Branch",
      addressLocality: "Paharkhana",
    },
    {
      "@type": "PostalAddress",
      name: "Treasury Colony Branch",
      addressLocality: "Treasury Colony",
    },
    {
      "@type": "PostalAddress",
      name: "College Chhaka Branch",
      addressLocality: "College Chhaka",
    },
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Coaching Programs",
    itemListElement: [
      {
        "@type": "Course",
        name: "English Coaching",
        description:
          "Grammar, Vocabulary, Reading Comprehension, Writing Skills, Spoken English",
      },
      {
        "@type": "Course",
        name: "Social Science Coaching",
        description:
          "History, Geography, Civics, Political Science, Current Affairs, Map Work",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <LoadingScreen />
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
