export interface Testimonial {
  name: string;
  location: string;
  text: string;
  service: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mike & Sarah J.",
    location: "Murrysville, PA",
    text: "Our heating bills dropped by 40% after getting our attic insulated with spray foam. The crew was professional, clean, and finished in one day. Best home improvement investment we've ever made.",
    service: "Attic Insulation",
    rating: 5,
  },
  {
    name: "Tom R.",
    location: "Pittsburgh, PA",
    text: "As a commercial property owner, I was skeptical about the investment. After seeing the energy savings in my first quarter, I had them do all three of my buildings. The ROI speaks for itself.",
    service: "Commercial Buildings",
    rating: 5,
  },
  {
    name: "Jennifer M.",
    location: "Monroeville, PA",
    text: "We had terrible drafts in our 1920s home. They sealed everything up and now our home is comfortable year-round. The noise reduction was an unexpected bonus — we can barely hear Route 22 anymore.",
    service: "Whole Home Retrofit",
    rating: 5,
  },
  {
    name: "Robert K.",
    location: "Export, PA",
    text: "Quick, clean, and professional. Our basement used to be freezing in winter — now it's our favorite room in the house. The crawl space encapsulation made a huge difference too.",
    service: "Basement & Crawl Space",
    rating: 5,
  },
  {
    name: "Lisa & David M.",
    location: "Greensburg, PA",
    text: "The energy audit was eye-opening. They showed us exactly where we were losing heat with thermal imaging. After the spray foam, our energy bills dropped from $380/month to under $200.",
    service: "Energy Audit + Insulation",
    rating: 5,
  },
  {
    name: "Amanda W.",
    location: "Irwin, PA",
    text: "Best home improvement decision we've made in 20 years. No more ice dams, no more cold rooms upstairs, and our HVAC runs half as much. Wish we'd done this years ago.",
    service: "Attic & Walls",
    rating: 5,
  },
  {
    name: "James T.",
    location: "North Huntingdon, PA",
    text: "Our new construction project came in way under budget on energy costs because of the spray foam insulation. The builder was impressed with the quality and professionalism.",
    service: "New Build Insulation",
    rating: 5,
  },
  {
    name: "Patricia S.",
    location: "Delmont, PA",
    text: "Professional from start to finish. They took the time to explain everything, protected our belongings, and left the workspace cleaner than they found it. Highly recommend.",
    service: "Crawl Space",
    rating: 5,
  },
  {
    name: "Chris R.",
    location: "Bethel Park, PA",
    text: "Night and day difference in our home's comfort. We used to fight over the thermostat — now every room is the same temperature. The investment paid for itself in the first two winters.",
    service: "Full Home Insulation",
    rating: 5,
  },
];
