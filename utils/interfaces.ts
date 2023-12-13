export interface Farm {
  id: string;
  name: string;
  logo_url?: string;
  description: string;
  address?: {
    address1: string;
    address2?: string;
    zip: string;
    city: string;
  };
  social?: {
    email?: string;
    facebook?: string;
  };
  open_hours: Array<{ time: string }>;
  deliveries: Array<{ time: string; place: string }>;
  products: Array<{ title: string }>;
  activities: Array<{ title: string }>;
  team: Array<{ name: string; description: string; pic_url: string }>;
}
