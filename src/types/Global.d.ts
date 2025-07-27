
// CSS module declarations
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

// Swiper CSS declarations
declare module "swiper/css" {
  const content: any;
  export default content;
}

declare module "swiper/css/navigation" {
  const content: any;
  export default content;
}

declare module "swiper/css/pagination" {
  const content: any;
  export default content;
}

// Image declarations
declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}