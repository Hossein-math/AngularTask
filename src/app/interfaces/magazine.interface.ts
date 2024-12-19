export interface Magazine {
  name: string;
  slogan: string;
  description: string;
  username: string;
  logo: string;
  org_logo: string;
  banner: string;
  org_banner: string;
  creator: Creator;
  create_date: string;
  is_verify: boolean;
  creator_entity: string;
  magazine_category: MagazineCategory;
}

interface MagazineCategory {
  id: number;
  title: string;
}

interface Creator {
  username: string;
  first_name: string;
  last_name: string;
  profile_photo: string;
  banner_photo: string;
  profile_text: string;
}

