export interface Post {
  slug: string;
  title: string;
  logo: string;
  related_entity: string;
  magazine: Magazine;
  organ: null;
  author: Author;
  text: string;
  publish_date: string;
  is_show_author: boolean;
  visitor_counter: number;
  hashtags: null;
  likes: number;
  is_i_like_it: boolean;
  is_i_bookmark_it: boolean;
  resources: null;
  keyword: string;
  related_posts: any[];
  category: number[];
}

interface Magazine {
  name: string;
  slogan: string;
  description: string;
  username: string;
  logo: string;
  banner: string;
  is_verify: boolean;
}

interface Author {
  first_name: string;
  last_name: string;
  username: string;
  profile_photo: string;
  banner_photo: string;
}
