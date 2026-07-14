export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  type: "image" | "video";
  category: "photos" | "videos" | "projects" | "hackathons" | "college" | "certificates" | "travel" | "cricket" | "life";
  tags: string[];
  date: string;
  thumbnail: string;
  mediaUrl: string;
  featured: boolean;
}

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "photos", label: "Photos" },
  { id: "videos", label: "Videos" },
    { id: "certificates", label: "Certificates" },
  
  
  
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "whatsapp-img-1",
    title: "Kuchipudi Duet Pose",
    description: "Two young pupils of Saraswathi Nrithyalaya showcasing a classical Kuchipudi posture during a stage performance dress rehearsal.",
    type: "image",
    category: "photos",
    tags: ["Kuchipudi", "Students", "Dance", "Performance"],
    date: "2026-04-12",
    thumbnail: "/gallery/images/WhatsApp Image 2026-07-13 at 8.37.01 PM.jpeg",
    mediaUrl: "/gallery/images/WhatsApp Image 2026-07-13 at 8.37.01 PM.jpeg",
    featured: true,
  },
  {
    id: "whatsapp-img-2",
    title: "Krishna Stage Enactment",
    description: "Saraswathi Nrithyalaya students depicting a Krishna and Radha scene on stage during the annual cultural fest celebration.",
    type: "image",
    category: "life",
    tags: ["Radha Krishna", "Stage Performance", "Annual Fest", "Students"],
    date: "2026-04-12",
    thumbnail: "/gallery/images/WhatsApp Image 2026-07-13 at 8.37.01 PM (1).jpeg",
    mediaUrl: "/gallery/images/WhatsApp Image 2026-07-13 at 8.37.01 PM (1).jpeg",
    featured: true,
  },
  {
    id: "whatsapp-img-3",
    title: "Summer Camp Group Photo",
    description: "Lakshmi Prasanna with her group of successful Kuchipudi students displaying their official training certificates and shields on stage.",
    type: "image",
    category: "certificates",
    tags: ["Awards", "Saraswathi Nrithyalaya", "Group Photo", "Certification"],
    date: "2026-04-12",
    thumbnail: "/gallery/images/WhatsApp Image 2026-07-13 at 8.37.02 PM.jpeg",
    mediaUrl: "/gallery/images/WhatsApp Image 2026-07-13 at 8.37.02 PM.jpeg",
    featured: true,
  },
  {
    id: "whatsapp-vid-1",
    title: "Stage Performance Video Clip",
    description: "A short clip of students performing synchronization footwork live on stage during a cultural event.",
    type: "video",
    category: "videos",
    tags: ["Dance Video", "Live", "Footwork", "Sync"],
    date: "2026-04-12",
    thumbnail: "/gallery/images/WhatsApp Image 2026-07-13 at 8.37.03 PM.jpeg",
    mediaUrl: "/gallery/videos/WhatsApp Video 2026-07-13 at 8.37.04 PM (1).mp4",
    featured: true,
  },
  {
    id: "whatsapp-vid-2",
    title: "Solo Performance Reel",
    description: "Short recording of Kuchipudi dance practice demonstrating intricate hand gestures (mudras) and expressive abhinaya.",
    type: "video",
    category: "videos",
    tags: ["Solo Reel", "Practice", "Abhinaya", "Kuchipudi"],
    date: "2026-04-12",
    thumbnail: "/gallery/images/WhatsApp Image 2026-07-13 at 8.37.05 PM.jpeg",
    mediaUrl: "/gallery/videos/WhatsApp Video 2026-07-13 at 8.37.04 PM.mp4",
    featured: false,
  },
  {
    id: "whatsapp-vid-3",
    title: "Dance Choreography Showcase",
    description: "A full group dance choreography rehearsal demonstrating coordination, rhythm, and traditional expressions.",
    type: "video",
    category: "videos",
    tags: ["Choreography", "Group Practice", "Kuchipudi", "Rhythm"],
    date: "2026-04-12",
    thumbnail: "/gallery/images/WhatsApp Image 2026-07-13 at 8.37.06 PM.jpeg",
    mediaUrl: "/gallery/videos/WhatsApp Video 2026-07-13 at 8.37.00 PM (1).mp4",
    featured: false,
  },
 
 
  {
    id: "item-college",
    title: "sarswathi nrithyalaya ",
    description: "Candid group photo capturing moments .",
    type: "image",
    category: "college",
    tags: ["College Life", "CSE", "Campus", "Friends"],
    date: "2026-04-12",
    thumbnail: "/gallery/images/WhatsApp Image 2026-07-13 at 8.37.02 PM (1).jpeg",
    mediaUrl: "/gallery/images/WhatsApp Image 2026-07-13 at 8.37.02 PM (1).jpeg",
    featured: false,
  },
 {
    id: "dance-showcase",
    title: "Dance Showcase",
    description: "dance, rhythm, and traditional expressions.",
    type: "video",
    category: "videos",
    tags: ["Choreography", "Group Practice", "Kuchipudi", "Rhythm"],
    date: "2026-04-12",
    thumbnail: "/gallery/images/WhatsApp Image 2026-07-13 at 8.37.06 PM.jpeg",
    mediaUrl: "/gallery/videos/WhatsApp Video 2026-07-13 at 8.37.00 PM.mp4",
    featured: false,
  },
 
];
